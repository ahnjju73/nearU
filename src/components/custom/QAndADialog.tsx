import React, { useEffect, useState } from 'react';

import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { LoadingButton } from '@mui/lab';
import DialogTitle from '@mui/material/DialogTitle';
import {
  Box,
  Button,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { format } from 'date-fns';
import { useSnackbar } from 'notistack';
import { useMutation, useQuery } from 'react-query';
import {
  addApplication,
  updateApplication,
  cancelRegister,
  registerApp,
  getQAndADetail,
  addQnAComment,
  deleteQnA,
  deleteQnAComment,
} from 'src/apis/apifunc/sign';
import { useSelector } from 'react-redux';
import FormProvider, { RHFTextField, RHFSelect } from 'src/components/hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export interface IQAndADialog extends DialogProps {
  data: any;
  refetch: () => void;
}

const QAndADialog = ({ open, onClose, refetch, data: paramData }: IQAndADialog) => {
  const [text, setText] = useState('');
  const { data: tDetailData, refetch: detailRefetch } = useQuery(
    [
      'admin/report-types/details',
      {
        qa_no: paramData?.question?.qaNo || 0,
      },
    ],
    (res) => getQAndADetail(res),
    {
      retry: 0,
      enabled: Boolean(paramData?.question?.qaNo),
    }
  );
  const contents: any = tDetailData?.data || {};
  const { enqueueSnackbar } = useSnackbar();
  const { session } = useSelector((state: any) => state);
  const { mutate: mutateDeleteQnA, isLoading: mutateLoading } = useMutation(deleteQnA, {
    onSuccess: () => {
      refetch();
      if (onClose) {
        onClose({}, 'backdropClick');
      }
      enqueueSnackbar('Q&A가 삭제되었습니다.');
    },
    onError: ({ ...error }: any) => {
      enqueueSnackbar(error?.response?.data?.message || 'Q&A 삭제에 문제가 발생하였습니다.', {
        variant: 'error',
      });
    },
  });
  const { mutate: mutateDeleteComment, isLoading: mutateCommentLoading } = useMutation(
    deleteQnAComment,
    {
      onSuccess: () => {
        detailRefetch();
        enqueueSnackbar('댓글이 삭제되었습니다.');
      },
      onError: ({ ...error }: any) => {
        enqueueSnackbar(error?.response?.data?.message || '댓글 삭제에 문제가 발생하였습니다.', {
          variant: 'error',
        });
      },
    }
  );
  const { mutate, isLoading, isError } = useMutation(addQnAComment, {
    onSuccess: () => {
      enqueueSnackbar('댓글이 작성되었습니다.');
      detailRefetch();
      setText('');
    },
    onError: ({ ...error }) => {
      enqueueSnackbar(error?.response?.data?.message || '댓글 작성에 문제가 발생하였습니다.', {
        variant: 'error',
      });
    },
  });

  const handleClose = () => {
    if (!onClose) return;
    onClose({}, 'backdropClick');
  }; 
  console.log('text text', text);

  const onSubmit = async () => {
    if (text === '' || !text || text === ' ') {
      enqueueSnackbar('작성 된 댓글 내용이 없습니다.', {
        variant: 'error',
      });
      return;
    }
    try {
      mutate({
        user_id: session.userId,
        qa_no: paramData?.question?.qaNo || 0,
        content: text,
      });
    } catch (error) {
      console.error(error);
    }
  };
  console.log(contents);
  return (
    <Dialog open={open} onClose={handleClose} maxWidth='lg' fullScreen>
      <DialogTitle sx={{ justifyContent: 'space-between', display: 'flex' }}>
        <span>Q&A 상세보기 {`: ${contents?.question?.title || ''}`}</span>
        {session.userNo === contents?.question?.userNo && (
          <Button
            variant='contained'
            onClick={() =>
              mutateDeleteQnA({
                qa_no: contents?.question?.qaNo || 0,
              })
            }
          >
            삭제하기
          </Button>
        )}
      </DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Stack>
          <TextField value={contents?.question?.title || ''} label='제목' variant='standard' />
          <TextField
            sx={{ mt: 2 }}
            value={contents?.question?.question || ''}
            label='내용'
            variant='standard'
          />
          <Stack flexDirection='row' sx={{ mt: 2 }}>
            <TextField
              size='small'
              sx={{ flex: 1, mr: 1 }}
              value={
                contents?.question?.anonymous
                  ? 'anonymous'
                  : contents?.question?.user?.userInfo?.name || ''
              }
              label='작성자'
              variant='standard'
            />
            <TextField
              sx={{ flex: 1 }}
              size='small'
              value={
                contents?.question?.createdDt
                  ? format(new Date(contents?.question?.createdDt), 'yyyy-MM-dd p')
                  : ''
              }
              label='작성일'
              variant='standard'
            />
          </Stack>
        </Stack>
        <Divider sx={{ my: 2, height: '0.5rem' }} color='primary' />
        <Stack sx={{ flex: 1, overflow: 'auto' }}>
          {(contents?.comments || []).map((v: any) => (
            <Stack key={v.commentNo} flexDirection='row' sx={{ width: '100%', mb: 1 }}>
              <Stack flexDirection='row' sx={{ width: '100%', my: 'auto' }}>
                <Typography sx={{ width: '160px' }}>{v?.user?.userInfo?.name || ''}</Typography>
                <Divider orientation='vertical' sx={{ mx: 1 }} flexItem />
                <Typography sx={{ flex: 1 }}>{v?.content || ''}</Typography>
                <Divider orientation='vertical' sx={{ mx: 1 }} flexItem />
                <Typography sx={{ width: '160px' }}>
                  {v?.createdAt ? format(new Date(v?.createdAt), 'yyyy-MM-dd p') : ''}
                </Typography>
              </Stack>
              {v?.user?.userInfo?.userNo === session.userNo && (
                <Button
                  sx={{ my: 'auto' }}
                  variant='contained'
                  onClick={() => mutateDeleteComment({ comment_no: v?.commentNo })}
                >
                  삭제
                </Button>
              )}
            </Stack>
          ))}
        </Stack>
        <Stack flexDirection='row' sx={{ width: '100%' }}>
          <TextField
            size='small'
            value={text}
            label='댓글'
            variant='standard'
            fullWidth
            onChange={(e) => setText(e.target.value)}
          />
          <Button variant='contained' onClick={() => onSubmit()} sx={{ width: 140 }}>
            댓글 올리기
          </Button>
        </Stack>
      </DialogContent>
      <DialogActions>
        <LoadingButton onClick={handleClose}>닫기</LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default QAndADialog;
