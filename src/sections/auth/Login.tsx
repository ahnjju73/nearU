// next
import NextLink from 'next/link';
// @mui
import { Alert, Tooltip, Stack, Typography, Link, Box } from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// layouts
import LoginLayout from '../../layouts/login';
// routes
import { PATH_AUTH } from '../../routes/paths';
//
import AuthLoginForm from './AuthLoginForm';
import AuthWithSocial from './AuthWithSocial';

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <LoginLayout>
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant='h4'>로그인</Typography>

        <Stack direction='row' spacing={0.5}>
          <Typography variant='body2'>아직 계정이 없으신가요?</Typography>

          <Link component={NextLink} href={PATH_AUTH.register} variant='subtitle2'>
            계정 만들기
          </Link>
        </Stack>
      </Stack>
      {/* 
      <Alert severity="info" sx={{ mb: 3 }}>
        Use email : <strong>demo@minimals.cc</strong> / password :<strong> demo1234</strong>
      </Alert> */}

      <AuthLoginForm />
      {/* <AuthWithSocial /> */}
    </LoginLayout>
  );
}
