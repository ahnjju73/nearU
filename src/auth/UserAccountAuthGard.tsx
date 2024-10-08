// components/AuthGuard.jsx

import { useState } from 'react';
import * as Yup from 'yup';
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  InputAdornment,
  IconButton,
  Stack,
} from '@mui/material';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { useCookie } from 'next-cookie';
import { useDispatch } from 'react-redux';
import Iconify from 'src/components/iconify';
import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// ----------------------------------------------------------------------

type AuthGuardProps = {
  children: React.ReactNode;
};

type FormValuesProps = {
  email: string;
  password: string;
  afterSubmit?: string;
};

const defaultValues = {
  email: '',
  password: '',
};

const LoginSchema = Yup.object().shape({
  password: Yup.string().required('비밀번호가 비어있습니다.'),
});

export default function UserAccountAuthGard({ children }: AuthGuardProps) {
  const [password, setPassword] = useState('');

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const cookie = useCookie();

  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      console.log('data: ', data);
      setIsAuthenticated(true);
      console.log('isAuthenticated: ', isAuthenticated);
    } catch (error) {
      console.error(error);
    }
  };

  console.log('isAuthenticated: ', isAuthenticated);

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          p: 10,
        }}
      >
        <Stack
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 1,
          }}
          spacing={3}
        >
          <Typography variant='h6'>
            개인정보 열람 / 변경을 위해 비밀번호 인증이 필요합니다.
          </Typography>
          <Stack direction='row' justifyContent='center' alignItems='center' spacing={3}>
            <RHFTextField
              name='password'
              label='비밀번호 확인'
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
              sx={{
                width: 400,
              }}
            />
            <Box>
              <LoadingButton
                fullWidth
                color='inherit'
                size='large'
                type='submit'
                variant='contained'
                loading={isSubmitting}
                sx={{
                  bgcolor: 'text.primary',
                  color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                  '&:hover': {
                    bgcolor: 'text.primary',
                    color: (theme) =>
                      theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
                  },
                }}
              >
                확인
              </LoadingButton>
            </Box>
          </Stack>
        </Stack>
      </Card>
    </FormProvider>
  );
}
