import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Card,
  Avatar
} from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { style } from '@mui/system';
import Footer from './Footer';
import Header from './Header';

const StudHome = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <Stack sx={{ minHeight: '100vh' }} justifyContent='space-between'>
      <Box>
        <Header />
        <Stack
          style={{
            width: '100vw',
            maxWidth: 1200,
            margin: '0 auto 0 auto',
            marginTop: '100px',
            marginBottom: '40px',
            justifyContent: 'space-between',
          }}
        >
          <Stack sx={{ mx: 4 }}>
            <h1>NearU</h1>

            <p>NearU, 아직은 많이 생소 하시죠?</p>

            <p>
              NearU는 무료 보호자 병원 동행 서비스이며, 현재 고등학생들의 자원봉사로 운영되고 있는
              플랫폼입니다. 두명의 고등학생이 공식적으로 고령화 사회에 접어든 대한민국 사회의 문제를
              인식하고, 병원 동행 매칭 서비스 플랫폼을 제공함으로써, 세대간의 격차를 줄일 수 있는
              기회를 창출하고자 만들었습니다. 더불어, 이를 통해 이용객들은 봉사 시간을 적립하실 수
              있다는 매우 큰 장점이 존재합니다.
            </p>

            <div style={{ fontWeight: 'bold' }}>
              <h2>문의 / 연락처:</h2>
              <p>
                NearU | <a href='mailto:contact.nearu@gmail.com'>contact.nearu@gmail.com</a>
              </p>
            </div>

            <h2>개발자 소개</h2>
            <Stack flexDirection="row">
            {[
              {
                name: '김동은',
                engName: 'Dongeun Kim',
                age: 18,
                email: 'de7danielkim@gmail.com',
                avatar: '/images/동은.png',
                phone: '01067491894',
              },{
                name: '박승빈',
                engName: 'Seungbihn Park',
                age: 18,
                email: 'seungbihn@gmail.com',
                avatar: '/images/승빈.png',
              },
            ].map(v =>
              <Card sx={{m: 2, p: 2, width: 320}} key={v.name}>
              <Stack flexDirection="row">
                <Avatar src={v.avatar} sx={{mr: 2, width: 64, height: 64}}/>
                <Stack>
                  <Typography sx={{fontSize: 20,fontWeight: 'bold'}}>{v.name}</Typography>
                  <Typography color='gray' sx={{mb: 1}}>{v.engName} / {v.age}</Typography>
                  <Stack flexDirection="row">
                    <a href={`mailto:${v.email}`} style={{marginRight: 8}}><IconButton sx={{background: '#ff9800'}}><EmailIcon sx={{color: '#b26a00'}}/></IconButton></a>
                    {v.phone&&<a href={`tel:${v.phone}`}><IconButton sx={{background: '#8bc34a'}}><CallIcon sx={{color: '#618833'}}/></IconButton></a>}
                  </Stack>
                </Stack>
              </Stack>
            </Card>
            )}
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Footer />
    </Stack>
  );
};

export default StudHome;
