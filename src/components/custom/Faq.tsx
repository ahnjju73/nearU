import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Stack,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from './Header';
import Footer from './Footer';

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
            <h1>Frequently Asked Questions</h1>
            <Divider sx={{ m: 0 }} />
            <h1>다섯 가지, 가장 많이 받는 질문.</h1>
            {[
              {
                title: '1. 자꾸 등장하는 이용객과 봉사자, 이 용어들이 정확히 무슨 뜻인가요?',
                contents: (
                  <>
                    저희 NearU 서비스는 이용객과 봉사자 두개의 유형으로 나뉘어져있습니다. 계정을
                    가입하실 때도 이점을 고려해주셔야 합니다. 이용객은 주로 노인 분들, 또는 병원을
                    방문하시는데 저희 서비스를 통해 도움이 필요하신 분들을 뜻하며, 봉사자는 주로
                    학생 분들, 또는 저희 플랫폼을 이용해 봉사시간을 얻고자 하시는 분들을 일컫는
                    용어입니다.
                  </>
                ),
              },
              {
                title: '2. 봉사 시간은 어떻게 적립이 되나요?',
                contents: (
                  <>
                    병원과 체계적인 시스템을 구성해 놓았기 때문에, 병원 측에서 주는 공식 인증에 따라
                    1365 플랫폼을 통해 공식 봉사 시간이 부여될 예정입니다. 즉, 1365 계정 생성은
                    필수입니다! 간혹가다 문제가 발생했을 시, 저희 쪽에서도 기록을 돌려보면 최종 봉사
                    시간을 알 수 있음으로, 그런 특별한 경우에는 저희에게 연락을 주시면 문제를 즉시
                    해결해드리겠습니다.
                  </>
                ),
              },
              {
                title: '3. 모든 병원 다 갈 수 있나요?',
                contents: (
                  <>
                    앞으로의 비전은 그렇습니다. 그러나, 아직은 저희가 개발단계/시운행 중에 있음으로,
                    청라 내에 몇몇 소규모 병원만 함께 따로 시스템을 구축해놓은 상황입니다. 현재
                    시점으로 봉사를 하실 수 있는 병원은: ____ 이나, 앞으로 더욱 더 추가 될
                    예정입니다. 추가가 될 때마다 공지를 드릴 예정입니다.
                  </>
                ),
              },
              {
                title: '4. 환자/이용객 예약을 그 당일날 취소하면 어떻게 되나요?',
                contents: (
                  <>
                    우선 예약 당일 날에는 취소가 불가능하게 설정이 되어있습니다. 그렇기에 취소가
                    당일 취소가 되실 일은 없지만, 노쇼가 발생할 수는 있습니다. 이런 경우, 저희에게
                    알려주시면 같이 대응방법을 찾아보고할 수 있게 준비하겠습니다.
                  </>
                ),
              },
              {
                title: '5. 이용객과 봉사자는 어떻게 연락해요?',
                contents: (
                  <>
                    안타깝게도 아직 저희 NearU 서비스는 채팅 기능을 제공하고 있지 않습니다. 다만,
                    예약 신청을 수락하시게 된다면, 예약을 하신 분의 성함과 전화번호와 같은 정보들이
                    공유가 될 예정입니다. 이점을 이용해, 봉사자가 먼저 이용객에게 전화, 메시지, 또는
                    카톡으로 연락을 시작해주시면 됩니다.
                  </>
                ),
              },
            ].map((v) => (
              <Accordion key={v.title}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant='h6'>{v.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{v.contents}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Stack>
      </Box>
      <Footer />
    </Stack>
  );
};

export default StudHome;
