import React, { useEffect, useState } from 'react';

import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { LoadingButton } from '@mui/lab';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { format } from 'date-fns';
import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';
import {
  addApplication,
  updateApplication,
  cancelRegister,
  registerApp,
} from 'src/apis/apifunc/sign';
import { useSelector } from 'react-redux';
import FormProvider, { RHFTextField, RHFSelect } from 'src/components/hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export interface IPatientDialogAdded extends DialogProps {
  data: any;
  refetch: any;
}
// "conditions" : String (어떤 도움이 필요한지 특이사항같은거 적는란)
// "d_day" : Stirng (yyyy-mm-dd p:SS format) 24시간이후에만 픽할수있으면 좋음
// "duration_hours" : String
// "location" : string

const RegisterSchema = Yup.object().shape({
  conditions: Yup.string().required('방문사유가 비어있습니다.'),
  d_day: Yup.string().required('비밀번호가 비어있습니다.'),
  duration_hours: Yup.string().required('비밀번호가 비어있습니다.'),
  location: Yup.string().required('만나시는 장소가 비어있습니다.'),
});

type FormValuesProps = {
  conditions: string;
  dDay: Date;
  dday: Date;
  durationHours: string;
  location: string;
};

const defaultValues = {
  conditions: '',
  dDay: new Date(),
  dday: new Date(),
  durationHours: '1',
  location: '',
};

const PatientDialogAdded = ({ open, onClose, data, refetch }: IPatientDialogAdded) => {
  const { enqueueSnackbar } = useSnackbar();
  const { session } = useSelector((state: any) => state);
  const { mutate, isLoading, isError } = useMutation(data ? updateApplication : addApplication, {
    onSuccess: () => {
      enqueueSnackbar(data ? '도움신청서가 수정되었습니다.' : '도움신청서가 추가되었습니다.');
      refetch();
      if (!data) {
        if (onClose) {
          onClose({}, 'backdropClick');
        }
      }
    },
    onError: ({ ...error }) => {
      enqueueSnackbar(
        error?.response?.data?.message || '도움신청서 생성에 문제가 발생하였습니다.',
        { variant: 'error' }
      );
    },
  });
  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (!data) return;
    setValue('dday', data?.dday);
    setValue('dDay', data?.dday);
    setValue('conditions', data?.conditions);
    setValue('durationHours', data?.durationHours);
    setValue('location', data?.location);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleClose = () => {
    if (!onClose) return;
    onClose({}, 'backdropClick');
  };

  const onSubmit = async () => {
    const param = getValues();
    try {
      mutate({
        applicationNo: data?.applicationNo || undefined,
        conditions: param.conditions,
        dDay: format(new Date(param.dDay), 'yyyy-MM-dd p:ss'),
        durationHours: Number(param.durationHours),
        location: param.location,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth>
      <FormProvider methods={methods}>
        <DialogTitle>{data ? '예약정보' : '만나시는 시간과 장소를 입력해주세요.'}</DialogTitle>
        <DialogContent>
          <Stack>
            <RHFTextField
              sx={{ mt: 2 }}
              variant='outlined'
              type='date'
              name='dDay'
              label='예약 날짜'
            />
            <RHFSelect sx={{ mt: 2 }} name='durationHours' label='소요시간'>
              {['1', '2', '3', '4', '5'].map((v) => (
                <MenuItem value={v} key={v.toString()}>{`${v}hour`}</MenuItem>
              ))}
            </RHFSelect>
            {/* </FormControl> */}
            <RHFTextField sx={{ mt: 2 }} variant='outlined' name='location' label='만나시는 장소' />
            <RHFTextField
              sx={{ mt: 2 }}
              variant='outlined'
              name='conditions'
              label='병원의 이름과 방문사유를 적어주세요!'
              multiline
              minRows={3}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <LoadingButton onClick={handleClose}>닫기</LoadingButton>
          <LoadingButton onClick={() => onSubmit()}>{data ? '수정' : '추가'}</LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
};

export default PatientDialogAdded;
