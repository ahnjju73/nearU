// next
import NextLink from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, Alert, Link, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// auth
import { PATH_AUTH } from 'src/routes/paths';
import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';
import { addUser } from 'src/apis/apifunc/sign';
import sha256 from 'sha256';
import { useAuthContext } from '../../auth/useAuthContext';
// components
import Iconify from '../../components/iconify';
import FormProvider, { RHFTextField, RHFRadioGroup } from '../../components/hook-form';

// ----------------------------------------------------------------------

const GENDER_OPTION = [
  { label: '남성', value: '남성' },
  { label: '여성', value: '여성' },
];

type FormValuesProps = {
  type: string;
  userId: string;
  address: string;
  name: string;
  gender: string;
  conditions: string;
  email: string;
  purpose: string;
  phoneNum: string;
  presentation: string;
  experience: string;
  password: string;
};

export interface IAuthRegisterForm {
  type: 'volunteer' | 'patient' | undefined;
  setStep: Dispatch<SetStateAction<number>>;
}

export default function AuthRegisterForm({ type, setStep }: IAuthRegisterForm) {
  const { enqueueSnackbar } = useSnackbar();
  const { mutate, isLoading, isError } = useMutation(addUser, {
    onSuccess: () => {
      setStep(3);
    },
    onError: ({ ...error }) => {
      enqueueSnackbar(error?.response?.data?.message || '계정 생성에 문제가 발생하였습니다.', {
        variant: 'error',
      });
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    // type: Yup.string().required('성별이 비어있습니다.'),
    userId: Yup.string().required('아이디가 비어있습니다.'),
    address: Yup.string().required('주소가 비어있습니다.'),
    name: Yup.string().required('이름이 비어있습니다.'),
    gender: Yup.string().required('성별이 비어있습니다.'),
    // "conditions" : Yup.string().required('성별이 비어있습니다.'),
    email: type === 'volunteer' ? Yup.string()
      .required('이메일이 비어있습니다.')
      .email('이메일 양식이 맞지 않습니다.')
      .test('domain', '이메일은 daltonschool.kr로 끝나야 합니다.', (value) =>
        value.includes('daltonschool.kr')
      ) : Yup.string()
      .required('이메일이 비어있습니다.')
      .email('이메일 양식이 맞지 않습니다.'),
    phoneNum: Yup.string().required('전화번호가 비어있습니다.'),
    conditions: Yup.string().required('비상연락처가 비어있습니다.'),
    // "presentation" : Yup.string().required('성별이 비어있습니다.'),
    // "experience" : Yup.string().required('성별이 비어있습니다.'),
    password: Yup.string().required('비밀번호가 비어있습니다.'),
  });

  const defaultValues = {
    userId: '',
    // type: '',
    address: '',
    name: '',
    gender: '',
    conditions: '',
    email: '',
    purpose: '',
    presentation: '',
    experience: '',
    password: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;
  console.log('errors errors', errors);
  const onSubmit = async (data: FormValuesProps) => {
    try {
      mutate({
        name: data.name,
        email: data.email,
        user_id: data.userId,
        password: sha256(data.password),
        phone_num: data.phoneNum,
        address: data.address,
        presentation: data.presentation,
        conditions: data.conditions,
        type: type as any,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Stack spacing={2} sx={{ mb: 2, position: 'relative' }}>
        <Stack>
          <Typography variant='h4'>이제 계정을 만들어주세요!</Typography>
          <Typography variant='body2'>*입력된 정보가 맞는지 꼭 확인해주세요!*</Typography>
        </Stack>
      </Stack>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2.5}>
          <RHFTextField name='name' label='성함' />
          <Stack spacing={1}>
            <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
              성별
            </Typography>
            <RHFRadioGroup row spacing={4} name='gender' options={GENDER_OPTION} />
          </Stack>

          <RHFTextField name='email' label='이메일 주소' />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <RHFTextField name='userId' label='아이디' />
            {/* <LoadingButton variant='contained'>
          아이디 중복 확인
        </LoadingButton>   */}
          </Stack>

          <RHFTextField
            name='password'
            label='비밀번호'
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge='end'>
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <RHFTextField name='phoneNum' label='전화번호' />
          <RHFTextField name='address' label='주소' />
          <RHFTextField name='conditions' label='특별 사항/비상 연락처' />
          <RHFTextField name='presentation' label='자기소개' multiline minRows={3} />
          <LoadingButton
            fullWidth
            color='inherit'
            size='large'
            type='submit'
            variant='contained'
            // loading={isSubmitting || isSubmitSuccessful}
            loading={isSubmitting}
            sx={{
              bgcolor: 'text.primary',
              color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
              '&:hover': {
                bgcolor: 'text.primary',
                color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
              },
            }}
          >
            다음으로
          </LoadingButton>
        </Stack>
      </FormProvider>
    </>
  );
}
