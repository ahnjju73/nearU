import { Button, Card, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const Complete = () => {
  const router = useRouter();
  return (
    <Stack>
      <Card sx={{ p: 4 }}>
        <Typography align='center' variant='h3' sx={{ mb: 1 }}>
          환영합니다!
        </Typography>
        <Typography align='center' variant='h3'>
          당신의 소중한 NearU 여정은 여기서 시작됩니다.
        </Typography>
      </Card>
      <Button sx={{ mt: 1 }} variant='contained' onClick={() => router.push('/')}>
        로그인 페이지로 가기
      </Button>
    </Stack>
  );
};

export default Complete;
