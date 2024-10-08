import { Typography, Stack, Button } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';

const Footer = () => {
  const router = useRouter();
  const { session } = useSelector((state: RootState) => state);

  return (
    <Stack flexDirection='row' justifyContent='space-between' sx={{ width: '100%', px: 4, my: 4 }}>
      <Stack flexDirection='row'>
        <img src='/images/nearUlogo.jpg' alt='' width={140} />
      </Stack>
      <Stack flexDirection='row'>
        {' '}
        {/* {[{ label: 'About Us' }, { label: 'FAQ' }, { label: 'SIGN IN' }].map((v) => ( */}
        {[
          { label: 'About Us', href: '/about-us' },
          { label: 'FAQ', href: '/faq' },
          session.login ? {} : { label: 'SIGN IN', href: '/app' },
        ].map((v: any) =>
          v.label ? (
            <Button color='primary' onClick={() => router.push(v.href)}>
              {v.label}
            </Button>
          ) : (
            <></>
          )
        )}
      </Stack>
      <Stack>
        <Typography variant='caption'>
          <span onClick={() => window.open('tel:01067491894')}>Tel. 010 6749 1894</span>
          <br />
          Address. 인천광역시 서구 경서동 834-128 청라달튼외국인학교
          <br />
          이용약관 개인정보 처리 방침 NearU 매뉴얼
        </Typography>
      </Stack>
      <Stack flexDirection='row'>
        {' '}
        {['/images/instalogo.png', '/images/kakaologo.jpg'].map((v) => (
          <img
            src={v}
            width={24}
            height={24}
            style={{ margin: 'auto 8px auto 0' }}
            alt={v}
            key={v}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Footer;
