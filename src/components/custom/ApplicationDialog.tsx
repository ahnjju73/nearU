import React from 'react';

import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import { Stack, TextField } from '@mui/material';
import { format } from 'date-fns';
import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';
import { cancelRegister, registerApp } from 'src/apis/apifunc/sign';
import { useSelector } from 'react-redux';

export interface IApplicationDialog extends DialogProps {
  data: any;
  refetch: any;
}

const ApplicationDialog = ({ open, onClose, data, refetch }: IApplicationDialog) => {
  const { enqueueSnackbar } = useSnackbar();
  const { session } = useSelector((state: any) => state);

  const handleClose = () => {
    if (!onClose) return;
    onClose({}, 'backdropClick');
  };
  const refresh = () => {
    refetch();
  };
  const {
    mutate: registerMutate,
    isLoading: isRegisterLoading,
    isError: isRegisterError,
  } = useMutation(registerApp, {
    onSuccess: (res) => {
      refresh();
      handleClose();
      enqueueSnackbar('봉사신청을 수락하였습니다.');
    },
    onError: ({ ...error }) => {
      enqueueSnackbar(error?.response?.data?.message || '봉사신청에 수락에 실패하였습니다.', {
        variant: 'error',
      });
    },
  });

  const {
    mutate: cancelMutate,
    isLoading: isCancelLoading,
    isError: isCancelError,
  } = useMutation(cancelRegister, {
    onSuccess: (res) => {
      refresh();
      handleClose();
      enqueueSnackbar('봉사신청 취소하였습니다.');
    },
    onError: ({ ...error }) => {
      enqueueSnackbar(error?.response?.data?.message || '봉사신청 취소에 실패하였습니다.', {
        variant: 'error',
      });
    },
  });

  return (
    <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth>
      <DialogTitle>예약정보</DialogTitle>
      <DialogContent>
        <Stack>
          {[
            {
              label: '신청자 성함',
              value: data?.name,
            },
            {
              label: '예약 날짜',
              value: data?.app?.dueDate ? format(new Date(data.app.dueDate), 'yyyy-MM-dd') : '',
            },
            {
              label: '소요 시간',
              value: `${data?.app?.durationHours} hour`,
            },
            {
              label: '만나는 장소',
              value: data?.app?.location,
            },
            {
              label: '병원 / 구체적인 정보',
              value: data?.app?.conditions,
            },
            {
              label: '병원 / 구체적인 정보',
              value: data?.app?.status ? 'Matched!' : 'Not Matched.',
            },
          ].map((v) => (
            <TextField
              sx={{ mt: 2 }}
              variant='outlined'
              key={v.label}
              value={v.value}
              label={v.label}
            />
          ))}
        </Stack>
      </DialogContent>
      <DialogActions>
        {(() => {
          if (data?.app?.status)
            return (
              <Button
                onClick={() => {
                  cancelMutate({ applicationNo: data?.app?.applicationNo, userNo: session.userNo });
                }}
              >
                취소
              </Button>
            );
          return (
            <Button
              onClick={() =>
                registerMutate({
                  application_no: data?.app?.applicationNo,
                  userNo: session.userNo,
                })
              }
              autoFocus
            >
              수락
            </Button>
          );
        })()}
      </DialogActions>
    </Dialog>
  );
};

export default ApplicationDialog;
