import React, { useEffect, useState } from 'react';

import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { LoadingButton } from '@mui/lab';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { format } from 'date-fns';
import { useSnackbar } from 'notistack';
import { useMutation, useQuery } from 'react-query';
import {
  addApplication,
  updateProfile,
  cancelRegister,
  registerApp,
  getProfile,
} from 'src/apis/apifunc/sign';
import { useSelector } from 'react-redux';
import FormProvider, { RHFTextField, RHFSelect } from 'src/components/hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useCookie } from 'next-cookie';

export interface IProfileDialog extends DialogProps {}
// "conditions" : String (어떤 도움이 필요한지 특이사항같은거 적는란)
// "d_day" : Stirng (yyyy-mm-dd p:SS format) 24시간이후에만 픽할수있으면 좋음
// "duration_hours" : String
// "location" : string

const RegisterSchema = Yup.object().shape({
  // conditions: Yup.string().required('방문사유가 비어있습니다.'),
  // d_day: Yup.string().required('비밀번호가 비어있습니다.'),
  // duration_hours: Yup.string().required('비밀번호가 비어있습니다.'),
  // location: Yup.string().required('만나시는 장소가 비어있습니다.'),
});

type FormValuesProps = {
  userId: string;
  password: any;
  type: string;
  address: string;
  name: string;
  gender: any;
  email: string;
  phoneNum: string;
  emergencyNum: any;
  presentation: string;
  condition: any;
  experience: any;
  purpose: any;
  emailNotification: boolean;
  msgNotification: boolean;
  phoneNotification: boolean;
  rating: number;
};

const ProfileDialog = ({ open, onClose }: IProfileDialog) => {
  const cookie = useCookie();
  const { enqueueSnackbar } = useSnackbar();
  const { session } = useSelector((state: any) => state);
  const { data, isLoading, refetch } = useQuery('getProfile', () => getProfile(), {
    onSuccess: (res) => {},
    onError: () => {},
  });
  const {
    mutate,
    isLoading: mutateLoading,
    isError,
  } = useMutation(updateProfile, {
    onSuccess: () => {
      enqueueSnackbar('프로필이 수정되었습니다.');
      refetch();
    },
    onError: ({ ...error }: any) => {
      enqueueSnackbar(error?.response?.data?.message || '프로필 수정에 문제가 발생하였습니다.', {
        variant: 'error',
      });
    },
  });
  const defaultValues = {
    userId: data?.data?.userId || '',
    password: data?.data?.password || '',
    type: data?.data?.type || '',
    address: data?.data?.address || '',
    name: data?.data?.name || '',
    gender: data?.data?.gender || '',
    email: data?.data?.email || '',
    phoneNum: data?.data?.phoneNum || '',
    emergencyNum: data?.data?.emergencyNum || '',
    presentation: data?.data?.presentation || '',
    condition: data?.data?.condition || '',
    experience: data?.data?.experience || '',
    purpose: data?.data?.purpose || '',
    emailNotification: data?.data?.emailNotification || '',
    msgNotification: data?.data?.msgNotification || '',
    phoneNotification: data?.data?.phoneNotification || '',
    rating: data?.data?.rating || '',
  };
  const methods = useForm<FormValuesProps>({
    // resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (!data) return;
    reset(defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleClose = () => {
    if (!onClose) return;
    const v = getValues();
    if (
      data?.data.name !== v.name ||
      data?.data.email !== v.email ||
      data?.data.phoneNum !== v.phoneNum ||
      data?.data.emergencyNum !== v.emergencyNum ||
      data?.data.presentation !== v.presentation
    ) {
      // eslint-disable-next-line no-restricted-globals
      if (confirm('변경 사항이 있는데 닫으시겠습니까?')) {
        onClose({}, 'backdropClick');
      }
    }
    onClose({}, 'backdropClick');
  };

  const onSubmit = async (param: any) => {
    try {
      mutate(param);
    } catch (error) {
      console.error(error);
    }
  };
  console.log('data data', data);
  return (
    <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>
          이용객님의 ({data?.data.type === 'volunteer' ? '봉사자' : '이용객'})
        </DialogTitle>
        <DialogContent>
          <Stack>
            <RHFTextField sx={{ mt: 2 }} variant='outlined' name='name' label='name' />
            {/* <RHFTextField sx={{ mt: 2 }} variant='outlined' name='rating' label='rating' /> */}
            <RHFTextField sx={{ mt: 2 }} variant='outlined' name='email' label='email' />
            <RHFTextField sx={{ mt: 2 }} variant='outlined' name='phoneNum' label='연락처' />
            <RHFTextField
              sx={{ mt: 2 }}
              variant='outlined'
              name='emergencyNum'
              label='비상 연락처'
            />
            <RHFTextField
              sx={{ mt: 2 }}
              variant='outlined'
              name='presentation'
              label='봉사 다짐'
              multiline
            />
            <Button
              variant='contained'
              sx={{ mt: 2 }}
              onClick={async () => {
                await cookie.remove(process.env.NEXT_PUBLIC_SESSION_KEY as string);
                // eslint-disable-next-line no-restricted-globals
                location.reload();
              }}
            >
              로그아웃
            </Button>
          </Stack>
        </DialogContent>
        <DialogActions>
          <LoadingButton onClick={handleClose}>닫기</LoadingButton>
          <LoadingButton loading={mutateLoading} type='submit'>
            수정
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
};

export default ProfileDialog;
