import { useState } from 'react';
import * as Yup from 'yup';
// next
import NextLink from 'next/link';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, Alert, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
// auth
// components
import { useCookie } from 'next-cookie';
import { useMutation, useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { checkSession, loginUser } from 'src/apis/apifunc/sign';
import { setUserSession } from 'src/assets/utils/common_api';
import sha256 from 'sha256';
import { useSnackbar } from 'notistack';
import FormProvider, { RHFTextField } from '../../components/hook-form';
import Iconify from '../../components/iconify';
import { useAuthContext } from '../../auth/useAuthContext';
import { PATH_AUTH } from '../../routes/paths';

// ----------------------------------------------------------------------

type FormValuesProps = {
  userId: string;
  password: string;
  afterSubmit?: string;
};

export default function AuthLoginForm() {
  const cookie = useCookie();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { refetch } = useQuery('checkSession', () => checkSession(), {
    onSuccess: (res) => setUserSession({ data: res?.data, dispatch, cookie }),
    onError: () => {},
  });
  const { mutate, isLoading, isError } = useMutation(loginUser, {
    onSuccess: (res) => {
      refetch();
      setUserSession({ data: res?.data, dispatch, cookie });
    },
    onError: () => {
      reset();
      enqueueSnackbar('계정정보가 잘못되었습니다.', { variant: 'error' });
    },
  });
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    userId: Yup.string().required('아이디가 비어 있습니다.'),
    password: Yup.string().required('비밀번호가 비어 있습니다.'),
  });

  const defaultValues = {
    userId: '',
    password: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    if (!mutate) return;
    mutate({ userId: data.userId, password: sha256(data.password) });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity='error'>{errors.afterSubmit.message}</Alert>}

        <RHFTextField name='userId' label='ID' />

        <RHFTextField
          name='password'
          label='Password'
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
      </Stack>

      <Stack alignItems='flex-end' sx={{ my: 2 }}>
        {/* <Link
          component={NextLink}
          href={PATH_AUTH.resetPassword}
          variant="body2"
          color="inherit"
          underline="always"
        >
          Forgot password?
        </Link> */}
      </Stack>

      <LoadingButton
        fullWidth
        color='inherit'
        size='large'
        type='submit'
        variant='contained'
        loading={isSubmitSuccessful || isSubmitting}
        sx={{
          bgcolor: 'text.primary',
          color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
          '&:hover': {
            bgcolor: 'text.primary',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
          },
        }}
      >
        로그인
      </LoadingButton>
    </FormProvider>
  );
}
