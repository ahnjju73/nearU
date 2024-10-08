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
  Checkbox,
  FormControlLabel,
  FormGroup,
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
  addQnA,
} from 'src/apis/apifunc/sign';
import { useSelector } from 'react-redux';
import FormProvider, { RHFTextField, RHFSelect } from 'src/components/hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export interface IQAndAAddDialog extends DialogProps {
  refetch: any;
}

const QAndAAddDialog = ({ open, onClose, refetch }: IQAndAAddDialog) => {
  const handleClose = () => {
    if (!onClose) return;
    onClose({}, 'backdropClick');
  };
  const [text, setText] = useState('');
  const [contents, setContents] = useState('');
  const [anonymous, setAnonymous] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const { session } = useSelector((state: any) => state);
  const { mutate, isLoading, isError } = useMutation(addQnA, {
    onSuccess: () => {
      enqueueSnackbar('질문이 작성되었습니다.');
      refetch();
      setText('');
      setContents('');
      setAnonymous(false);
      handleClose();
    },
    onError: ({ ...error }) => {
      enqueueSnackbar(error?.response?.data?.message || '질문 작성에 문제가 발생하였습니다.', {
        variant: 'error',
      });
    },
  });

  const onSubmit = async () => {
    try {
      mutate({
        user_no: session.userNo,
        anonymous,
        title: text,
        question: contents,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth='md' fullWidth>
      <DialogTitle>Q&A 작성</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant='caption'>빠른 시일 내 답장해드리겠습니다.</Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox value={anonymous} onChange={(e) => setAnonymous(e.target.checked)} />
            }
            label='비공개 여부'
          />
        </FormGroup>
        <TextField
          sx={{ mt: 2 }}
          size='small'
          value={text}
          label='제목'
          variant='outlined'
          fullWidth
          onChange={(e) => setText(e.target.value)}
        />
        <TextField
          sx={{ mt: 2 }}
          size='small'
          value={contents}
          label='내용'
          variant='outlined'
          fullWidth
          multiline
          minRows={2}
          onChange={(e) => setContents(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <LoadingButton onClick={handleClose}>닫기</LoadingButton>
        <LoadingButton onClick={() => onSubmit()}>질문제출</LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default QAndAAddDialog;
