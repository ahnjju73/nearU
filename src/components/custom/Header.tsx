import { AppBar, Toolbar, Button } from '@mui/material';
import router from 'next/router';
import React from 'react';

const Header = () => (
  <AppBar position='static'>
    <Toolbar sx={{ justifyContent: 'flex-end', backgroundColor: '#fff' }}>
      {[
        { label: 'About Us', href: '/about-us' },
        { label: 'FAQ', href: '/faq' },
        { label: 'SIGN IN', href: '/app' },
      ].map((v) => (
        <Button color='primary' onClick={() => router.push(v.href)}>
          {v.label}
        </Button>
      ))}
    </Toolbar>
  </AppBar>
);

export default Header;
