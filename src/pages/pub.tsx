import {
  AppBar,
  Button,
  Toolbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemButton
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const StudHome = () => {
  const [open, setOpen] = useState(false);
  const { session } = useSelector((state: any) => state);
  const router = useRouter();

  useEffect(() => {
    if (!session.login) return;
    router.push('/app');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <>
      {/* Main */}
      <Stack
        justifyContent='center'
        pt={4}
        sx={{
          backgroundColor: '#EFF7F7'
        }}
      >
        <Stack
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'
          sx={{
            width: 1360,
            margin: '0 auto',
            py: 2,
            px: 4,
            borderRadius: 2,
            backgroundColor: '#fff'
          }}
        >
          <Typography component='h1' color='#000' fontSize={20} fontWeight={700} fontFamily='Montserrat'>
            NearU (Logo)
          </Typography>
          <Stack
            component='nav'
            flexDirection='row'
            alignItems='center'
            justifyContent='flex-end'
          >
            <List
              sx={{
                p: 0,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <ListItem sx={{ p: 0, width: 'auto' }}>
                <ListItemButton
                  sx={{
                    borderRadius: 1,
                    height: 48,
                    px: 4,
                    color: '#55BDB3',
                    fontFamily: 'Montserrat',
                    fontSize: 16,
                    fontWeight: 600,
                    lineHeight: 1,
                  }}
                >
                  Home
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ p: 0, width: 'auto' }}>
                <ListItemButton
                  sx={{
                    borderRadius: 1,
                    height: 48,
                    px: 4,
                    color: '#000',
                    fontFamily: 'Montserrat',
                    fontSize: 16,
                    fontWeight: 600,
                    lineHeight: 1,
                  }}
                >
                  About Us
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ p: 0, width: 'auto' }}>
                <ListItemButton
                  sx={{
                    borderRadius: 1,
                    height: 48,
                    px: 4,
                    color: '#000',
                    fontFamily: 'Montserrat',
                    fontSize: 16,
                    fontWeight: 600,
                    lineHeight: 1,
                  }}
                >
                  FAQ
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ p: 0, width: 'auto' }}>
                <ListItemButton
                  sx={{
                    borderRadius: 1,
                    height: 48,
                    px: 4,
                    backgroundColor: '#55BDB3',
                    color: '#fff',
                    fontFamily: 'Montserrat',
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 1,
                    '&:hover': {
                      backgroundColor: '#35ada2',
                      color: '#fff',
                    }
                  }}
                >
                  Sign Up
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ p: 0, width: 'auto' }}>
                <ListItemButton
                  sx={{
                    borderRadius: 1,
                    height: 52,
                    px: 3,
                    border: '2px solid #55BDB3',
                    color: '#55BDB3',
                    fontFamily: 'Montserrat',
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 1,
                  }}
                >
                  Login
                </ListItemButton>
              </ListItem>
            </List>
          </Stack>
        </Stack>
        <Stack
          pt={14}
          pb={20}
          flexDirection='row'
          justifyContent='space-between'
          sx={{
            width: 1280,
            margin: '0 auto',
          }}
        >
          <Stack pt={8} pb={5}>
            <Typography component='div' color='#55BDB3' fontSize={48} fontWeight={700} fontFamily='Montserrat'>
              NearU (Logo)
            </Typography>
            <Typography mt={1} component='div' color='#000' fontSize={32} fontWeight={500}>
              가족의 손길
            </Typography>
            <Typography mt={1.25} component='div' color='#000' fontSize={16} fontWeight={400}>
              무료 보호자 동행 서비스
            </Typography>
            <Button
              onClick={() => setOpen(true)}
              sx={{
                mr: 'auto',
                mt: 'auto',
                px: 6,
                height: 48,
                backgroundColor: '#0F2435',
                color: '#fff',
                fontSize: 17,
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: '#55BDB3',
                  color: '#fff',
                }
              }}
            >
              서비스 소개
            </Button>
          </Stack>
          <Box sx={{ flex: 1, display: 'flex' }}>
            <iframe
              style={{ width: '100%', height: 420, maxWidth: 800, marginLeft: 'auto' }}
              src='https://www.youtube.com/embed/11cta61wi0g?si=l8Dhoz_zxEd3vM_w'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              // allowfullscreen
            />
          </Box>
        </Stack>
      </Stack>

      {/* Our Services */}
      <Stack
        justifyContent='center'
        sx={{
          backgroundColor: '#fff'
        }}
      >
        <Stack
          pl={4}
          pr={28}
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'
          sx={{
            width: 878,
            height: 80,
            margin: '-40px auto 0',
            borderRadius: 2,
            backgroundColor: '#fff',
            boxShadow: '0px 8px 48px 0px rgba(0, 24, 60, 0.08)'
          }}
        >
          <Typography component='div' color='#C4C4C4' fontSize={14} fontWeight={500} fontFamily='Montserrat'>
            Powered by :
          </Typography>
          <img src='/images/cds.png' alt='' width={420} />
        </Stack>
        <Stack gap={4} mt={8}>
          <Typography component='h2' color='#000' fontSize={30} fontWeight={700} textAlign='center' fontFamily='Montserrat'>
            Our Services
          </Typography>
          <Typography component='p' color='#000' fontSize={16} fontWeight={400} textAlign='center'>
            NearU는 무료 보호자 병원 동행 서비스이며, 현재 고등학생들의 자원봉사로 운영되고 있는 플랫폼입니다.
          </Typography>
        </Stack>
        <Box
          sx={{
            width: 40,
            margin: '30px auto 60px'
          }}
        >
          <img src='/images/arrow.png' alt='' width='100%' />
        </Box>
        <Stack gap={4}>
          <Typography component='h2' color='#000' fontSize={30} fontWeight={700} textAlign='center' fontFamily='Montserrat'>
            Reasons To Use NearU
          </Typography>
          <Typography component='p' color='#000' fontSize={16} fontWeight={400} textAlign='center'>
            NearU는 다양한 장점을 함께 제공합니다.
          </Typography>
        </Stack>
        <Box
          pt={13}
          pb={24}
          display='grid'
          rowGap={4}
          columnGap={4}
          gridTemplateColumns='repeat(3, 1fr)'
          sx={{
            width: 1200,
            margin: '0 auto',
          }}
        >
          <Stack
            flexDirection='row'
            alignItems='center'
            justifyContent='center'
            gap={2}
            sx={{
              height: 100,
              borderRadius: 2,
              backgroundColor: '#ECF3FE'
            }}
          >
            <img src='/images/icon-service-01.png' alt='' width={32} />
            <Typography component='div' color='#000' fontSize={21} fontWeight={700} fontFamily='Montserrat'>
              Free Cost
            </Typography>
          </Stack>
          <Stack
            flexDirection='row'
            alignItems='center'
            justifyContent='center'
            gap={2}
            sx={{
              height: 100,
              borderRadius: 2,
              backgroundColor: '#FEF8E6'
            }}
          >
            <img src='/images/icon-service-02.png' alt='' width={32} />
            <Typography component='div' color='#000' fontSize={21} fontWeight={700} fontFamily='Montserrat'>
              Multi-Language
            </Typography>
          </Stack>
          <Stack
            flexDirection='row'
            alignItems='center'
            justifyContent='center'
            gap={2}
            sx={{
              height: 100,
              borderRadius: 2,
              backgroundColor: '#FDF4F0'
            }}
          >
            <img src='/images/icon-service-03.png' alt='' width={32} />
            <Typography component='div' color='#000' fontSize={21} fontWeight={700} fontFamily='Montserrat'>
              Quality Assured
            </Typography>
          </Stack>
          <Stack
            flexDirection='row'
            alignItems='center'
            justifyContent='center'
            gap={2}
            sx={{
              height: 100,
              borderRadius: 2,
              backgroundColor: '#E7FAF3'
            }}
          >
            <img src='/images/icon-service-04.png' alt='' width={32} />
            <Typography component='div' color='#000' fontSize={21} fontWeight={700} fontFamily='Montserrat'>
              Flexible Revision
            </Typography>
          </Stack>
          <Stack
            flexDirection='row'
            alignItems='center'
            justifyContent='center'
            gap={2}
            sx={{
              height: 100,
              borderRadius: 2,
              backgroundColor: '#F1F1FB'
            }}
          >
            <img src='/images/icon-service-05.png' alt='' width={32} />
            <Typography component='div' color='#000' fontSize={21} fontWeight={700} fontFamily='Montserrat'>
              Volunteer Hours
            </Typography>
          </Stack>
          <Stack
            flexDirection='row'
            alignItems='center'
            justifyContent='center'
            gap={2}
            sx={{
              height: 100,
              borderRadius: 2,
              backgroundColor: '#ECF3FE'
            }}
          >
            <img src='/images/icon-service-06.png' alt='' width={32} />
            <Typography component='div' color='#000' fontSize={21} fontWeight={700} fontFamily='Montserrat'>
              24/7 Support
            </Typography>
          </Stack>
        </Box>
      </Stack>

      {/* Our Mission */}
      <Stack
        justifyContent='center'
        py={13.5}
        sx={{
          backgroundColor: '#EEF7F7'
        }}
      >
        <Stack
          justifyContent='center'
        >
          <Typography component='h2' color='#000' fontSize={30} fontWeight={700} textAlign='center' fontFamily='Montserrat'>
            Our Mission
          </Typography>
          <Typography mt={3} component='p' color='#000' fontSize={44} fontWeight={700} textAlign='center' letterSpacing='-0.03em'>
            무료로, 간결하게.
          </Typography>
          <Box
            sx={{
              width: 960,
              height: 2,
              margin: '40px auto',
              background: 'url(/images/dash-horizontal.png) repeat-x',
              backgroundSize: '14px 2px'
            }}
          />
          <Stack
            flexDirection='row'
            justifyContent='center'
            gap={15}
          >
            <Stack alignItems='flex-start' gap={1}>
              <Typography component='div' color='#000' fontSize={48} fontWeight={800} textAlign='center' fontFamily='Montserrat'>
                350 days+
              </Typography>
              <Typography component='div' color='#000' fontSize={20} fontWeight={500} textAlign='center'>
                개발 기간
              </Typography>
            </Stack>
            <Stack alignItems='flex-start' gap={1}>
              <Typography component='div' color='#000' fontSize={48} fontWeight={800} textAlign='center' fontFamily='Montserrat'>
                2+
              </Typography>
              <Typography component='div' color='#000' fontSize={19} fontWeight={500} textAlign='center' fontFamily='Montserrat'>
                Connected Hospitals
              </Typography>
            </Stack>
            <Stack alignItems='flex-start' gap={1}>
              <Typography component='div' color='#000' fontSize={48} fontWeight={800} textAlign='center' fontFamily='Montserrat'>
                250+
              </Typography>
              <Typography component='div' color='#000' fontSize={19} fontWeight={500} textAlign='center' fontFamily='Montserrat'>
                Pool of Volunteers
              </Typography>
            </Stack>
          </Stack>
          </Stack>
      </Stack>

      {/* Step */}
      <Stack
        justifyContent='center'
        pt={18}
        pb={24}
        sx={{
          backgroundColor: '#fff'
        }}
      >
        <Stack
          gap={12}
          sx={{
            width: 1200,
            margin: '0 auto',
            background: 'url(/images/dash-vertical.png) repeat-y 91% 0',
            backgroundSize: '4px 20px'
          }}
        >
          <Stack
            flexDirection='row'
            alignItems='flex-start'
            justifyContent='space-between'
          >
            <Stack>
              <Typography component='h3' color='#000' fontSize={34} fontWeight={700} lineHeight={1.24}>
                1.<br />
                가입하기 - Sign Up
              </Typography>
              <Stack mt={4.5} gap={2}>
                <Stack flexDirection='row' alignItems='center' gap={5}>
                  <img src='/images/icon-check.png' alt='' width={24} />
                  <Typography component='p' color='#000' fontSize={16} fontWeight={500} fontFamily='Montserrat'>
                    Make an account through sign up page.
                  </Typography>
                </Stack>
                <Stack flexDirection='row' alignItems='center' gap={5}>
                  <img src='/images/icon-check.png' alt='' width={24} />
                  <Typography component='p' color='#000' fontSize={16} fontWeight={500} fontFamily='Montserrat'>
                    Double check all the informations are correct!
                  </Typography>
                </Stack>
                <Typography pl={8} component='p' color='#000' fontSize={16} fontWeight={500} fontFamily='Montserrat'>
                  Volunteers are required to sign-up with a dalton email.
                </Typography>
              </Stack>
            </Stack>
            <Box pt={5} sx={{ backgroundColor: '#fff' }}>
              <Stack
                alignItems='center'
                justifyContent='center'
                pb={1.25}
                gap={0.25}
                sx={{
                  width: 220,
                  height: 154,
                  borderRadius: 2,
                  backgroundColor: '#C1FFFF',
                  boxShadow: '0 40px 60px 0 rgba(0, 16, 45, 0.1)'
                }}
              >
                <img src='/images/icon-step-01.png' alt='' width={72} />
                <Typography component='p' color='#000' fontSize={21} fontWeight={600} fontFamily='Montserrat'>
                  Sign Up
                </Typography>
              </Stack>
            </Box>
          </Stack>
          <Stack
            flexDirection='row'
            alignItems='flex-start'
            justifyContent='space-between'
          >
            <Stack>
              <Typography component='h3' color='#000' fontSize={34} fontWeight={700} lineHeight={1.24}>
                2.<br />
                이용 시작 - Register
              </Typography>
              <Stack mt={4.5} gap={2}>
                <Stack flexDirection='row' alignItems='center' gap={5}>
                  <img src='/images/icon-check.png' alt='' width={24} />
                  <Typography component='p' color='#000' fontSize={16} fontWeight={500} fontFamily='Montserrat'>
                    On the main page, select an event you can volunteer.
                  </Typography>
                </Stack>
                <Stack flexDirection='row' alignItems='center' gap={5}>
                  <img src='/images/icon-check.png' alt='' width={24} />
                  <Typography component='p' color='#000' fontSize={16} fontWeight={500} fontFamily='Montserrat'>
                    On the main page, register a new event you need volunteer for.
                  </Typography>
                </Stack>
                <Typography pl={8} component='p' color='#000' fontSize={16} fontWeight={500} fontFamily='Montserrat'>
                  The registration can only be canceled one day before the D-Day.
                </Typography>
              </Stack>
            </Stack>
            <Box pt={5}>
              <Stack
                alignItems='center'
                justifyContent='center'
                pb={1.25}
                gap={0.25}
                sx={{
                  width: 220,
                  height: 154,
                  borderRadius: 2,
                  backgroundColor: '#BEBEFF',
                  boxShadow: '0 40px 60px 0 rgba(0, 16, 45, 0.1)'
                }}
              >
                <img src='/images/icon-step-02.png' alt='' width={72} />
                <Typography component='p' color='#000' fontSize={21} fontWeight={600} fontFamily='Montserrat'>
                  Register
                </Typography>
              </Stack>
            </Box>
          </Stack>
          <Stack
            flexDirection='row'
            alignItems='flex-start'
            justifyContent='space-between'
          >
            <Stack>
              <Typography component='h3' color='#000' fontSize={34} fontWeight={700} lineHeight={1.24}>
                3.<br />
                매칭 - Matching
              </Typography>
              <Stack mt={4.5} gap={2}>
                <Stack flexDirection='row' alignItems='center' gap={5}>
                  <img src='/images/icon-check.png' alt='' width={24} />
                  <Typography component='p' color='#000' fontSize={16} fontWeight={500} fontFamily='Montserrat'>
                    Volunteer will select a patient to be matched.
                  </Typography>
                </Stack>
                <Stack flexDirection='row' alignItems='center' gap={5}>
                  <img src='/images/icon-check.png' alt='' width={24} />
                  <Typography component='p' color='#000' fontSize={16} fontWeight={500} fontFamily='Montserrat'>
                    Only one volunteer can be matched per registration.
                  </Typography>
                </Stack>
                <Typography pl={8} component='p' color='#000' fontSize={16} fontWeight={500} fontFamily='Montserrat'>
                  The service includes going to the hospital and coming back.
                </Typography>
              </Stack>
            </Stack>
            <Box pt={5}>
              <Stack
                alignItems='center'
                justifyContent='center'
                pb={1.25}
                gap={0.25}
                sx={{
                  width: 220,
                  height: 154,
                  borderRadius: 2,
                  backgroundColor: '#BBD5FF',
                  boxShadow: '0 40px 60px 0 rgba(0, 16, 45, 0.1)'
                }}
              >
                <img src='/images/icon-step-03.png' alt='' width={72} />
                <Typography component='p' color='#000' fontSize={21} fontWeight={600} fontFamily='Montserrat'>
                  Matching
                </Typography>
              </Stack>
            </Box>
          </Stack>
          <Stack
            flexDirection='row'
            alignItems='flex-start'
            justifyContent='space-between'
          >
            <Stack>
              <Typography component='h3' color='#000' fontSize={34} fontWeight={700} lineHeight={1.24}>
                4.<br />
                서비스 (봉사자) - Service
              </Typography>
              <Stack mt={4.5} gap={2}>
                <Stack flexDirection='row' alignItems='center' gap={5}>
                  <img src='/images/icon-check.png' alt='' width={24} />
                  <Typography component='p' color='#000' fontSize={16} fontWeight={500} fontFamily='Montserrat'>
                    Aid the patient to the hospital on the date.
                  </Typography>
                </Stack>
                <Stack flexDirection='row' alignItems='center' gap={5}>
                  <img src='/images/icon-check.png' alt='' width={24} />
                  <Typography component='p' color='#000' fontSize={16} fontWeight={500} fontFamily='Montserrat'>
                    Communicate with the hospital, doctor, and pharmacy (if needed)
                  </Typography>
                </Stack>
                <Typography pl={8} component='p' color='#000' fontSize={16} fontWeight={500} fontFamily='Montserrat'>
                  Additional tasks may include waiting time checker, registration, etc.
                </Typography>
                <Typography pl={8} component='p' color='#000' fontSize={16} fontWeight={500} fontFamily='Montserrat' sx={{ textDecoration: 'underline' }}>
                  Ensure safety, transparency, and clarity.
                </Typography>
              </Stack>
            </Stack>
            <Box pt={5}>
              <Stack
                alignItems='center'
                justifyContent='center'
                pb={1.25}
                gap={0.25}
                sx={{
                  width: 220,
                  height: 154,
                  borderRadius: 2,
                  backgroundColor: '#B7FFE4',
                  boxShadow: '0 40px 60px 0 rgba(0, 16, 45, 0.1)'
                }}
              >
                <img src='/images/icon-step-04.png' alt='' width={72} />
                <Typography component='p' color='#000' fontSize={21} fontWeight={600} fontFamily='Montserrat' letterSpacing='-0.05em'>
                  Service Procedures
                </Typography>
              </Stack>
            </Box>
          </Stack>
          <Stack
            flexDirection='row'
            alignItems='flex-start'
            justifyContent='space-between'
          >
            <Stack>
              <Typography component='h3' color='#000' fontSize={34} fontWeight={700} lineHeight={1.24}>
                5.<br />
                봉사 시간 - Hours
              </Typography>
              <Stack mt={4.5} gap={2}>
                <Stack flexDirection='row' alignItems='center' gap={5}>
                  <img src='/images/icon-check.png' alt='' width={24} />
                  <Typography component='p' color='#000' fontSize={16} fontWeight={500} fontFamily='Montserrat'>
                    Volunteers will be given volunteer hours accordingly.
                  </Typography>
                </Stack>
                <Stack flexDirection='row' alignItems='center' gap={5}>
                  <img src='/images/icon-check.png' alt='' width={24} />
                  <Typography component='p' color='#000' fontSize={16} fontWeight={500} fontFamily='Montserrat'>
                    Hours can only be given after the approval of the patient.
                  </Typography>
                </Stack>
                <Stack pl={8} flexDirection='row' alignItems='center' gap={5}>
                  <Typography component='p' color='#000' fontSize={16} fontWeight={500} fontFamily='Montserrat'>
                    Hours are tracked on a separate system, saved to student’s<br /> records through school office.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Box alignSelf='stretch' mt={5} sx={{ backgroundColor: '#fff' }}>
              <Stack
                alignItems='center'
                justifyContent='center'
                pb={1.25}
                gap={0.25}
                sx={{
                  width: 220,
                  height: 154,
                  borderRadius: 2,
                  backgroundColor: '#FCBFA3',
                  boxShadow: '0 40px 60px 0 rgba(0, 16, 45, 0.1)'
                }}
              >
                <img src='/images/icon-step-05.png' alt='' width={72} />
                <Typography component='p' color='#000' fontSize={21} fontWeight={600} fontFamily='Montserrat' letterSpacing='-0.03em'>
                  Volunteer Hours
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Stack>

      {/* Our Reviews */}
      <Stack
        justifyContent='center'
        pt={12.5}
        pb={8}
        sx={{
          backgroundColor: '#EFF7F7'
        }}
      >
        <Stack
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'
          sx={{
            width: 1200,
            margin: '0 auto',
          }}
        >
          <Stack gap={4} mb={10.5}>
            <Typography component='h2' color='#000' fontSize={30} fontWeight={700} fontFamily='Montserrat'>
              Our Reviews
            </Typography>
            <Typography component='p' color='#000' fontSize={16} fontWeight={500} fontFamily='Montserrat'>
              Let’s take a look at how few others felt!
            </Typography>
          </Stack>
          <Stack gap={6}>
            <Stack
              p={4}
              gap={2.5}
              sx={{
                width: 586,
                height: 242,
                borderRadius: 2,
                backgroundColor: '#fff',
                boxShadow: '0px 8px 48px 0px rgba(0, 24, 60, 0.08)'
              }}
            >
              <Stack
                flexDirection='row'
                alignItems='flex-start'
                justifyContent='space-between'
              >
                <Stack
                  flexDirection='row'
                  alignItems='center'
                  gap={2}
                >
                  <img src='/images/profile.png' alt='' width={56} />
                  <Stack>
                    <Typography component='div' color='#000' fontSize={14} fontWeight={600} fontFamily='Montserrat'>
                      Junsun Sim
                    </Typography>
                    <Typography component='div' color='#D9D9D9' fontSize={14} fontWeight={600} fontFamily='Montserrat'>
                      Senior @ CDS
                    </Typography>
                  </Stack>
                </Stack>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 1,
                    backgroundColor: '#fff',
                    boxShadow: '0 12px 32px 0 rgba(0, 16, 45, 0.12)',
                    overflow: 'hidden'
                  }}
                >
                  <img src='/images/icon-chat.png' alt='' width={44} />
                </Box>
              </Stack>
              <Typography component='p' color='#000' fontSize={15} fontWeight={500} fontFamily='Montserrat'>
                It was my first time doing this, so I was initaiily scared. However, I realized the well organized system made the system so easy to use. When I met with elderly patients, I felt proud to support them in a meaningful way.
              </Typography>
            </Stack>
            <Stack
              p={4}
              gap={2.5}
              sx={{
                width: 586,
                height: 242,
                borderRadius: 2,
                backgroundColor: '#fff',
                boxShadow: '0px 8px 48px 0px rgba(0, 24, 60, 0.08)'
              }}
            >
              <Stack
                flexDirection='row'
                alignItems='flex-start'
                justifyContent='space-between'
              >
                <Stack
                  flexDirection='row'
                  alignItems='center'
                  gap={2}
                >
                  <img src='/images/profile.png' alt='' width={56} />
                  <Stack>
                    <Typography component='div' color='#000' fontSize={14} fontWeight={600} fontFamily='Montserrat'>
                      Yunji Noh
                    </Typography>
                    <Typography component='div' color='#D9D9D9' fontSize={14} fontWeight={600} fontFamily='Montserrat'>
                      Senior @ CDS
                    </Typography>
                  </Stack>
                </Stack>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 1,
                    backgroundColor: '#fff',
                    boxShadow: '0 12px 32px 0 rgba(0, 16, 45, 0.12)',
                    overflow: 'hidden'
                  }}
                >
                  <img src='/images/icon-chat.png' alt='' width={44} />
                </Box>
              </Stack>
              <Typography component='p' color='#000' fontSize={15} fontWeight={500} fontFamily='Montserrat'>
                I hope to continue to use NearU even after I graduate. I think it is a great platform to support our community. I like the idea that it targets specific problems in the ongoing society.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {/* FAQ */}
      <Stack
        justifyContent='center'
        pt={16}
        pb={18}
        sx={{
          backgroundColor: '#fff'
        }}
      >
        <Stack
          flexDirection='row'
          alignItems='center'
          justifyContent='center'
          gap={1.5}
        >
          <Typography component='h2' color='#000' fontSize={30} fontWeight={500} textAlign='center' fontFamily='Montserrat'>
            Need Help?
          </Typography>
          <Typography component='h2' color='#000' fontSize={30} fontWeight={700} textAlign='center' fontFamily='Montserrat'>
            Read FAQs
          </Typography>
        </Stack>
        <Stack
          sx={{
            width: 900,
            margin: '80px auto 0',
            gap: 3.5,
            '.MuiAccordion-root': {
              borderRadius: 1.75,
              border: `solid 1px #DEDEDE`,
              overflow: 'hidden',
              backgroundColor: '#fff',
              '&::before': {
                display: 'none'
              },
              '&.Mui-expanded': {
                margin: 0,
                border: 0,
                boxShadow: '0px 8px 48px 0px rgba(0, 24, 60, 0.08)',
                '.MuiSvgIcon-root': {
                  color: '#57BDB3'
                }
              },
              '.MuiSvgIcon-root': {
                fontSize: 28,
              },
              '.MuiAccordionSummary-root': {
                p: 3.25,
                pr: 2.5,
                '&.Mui-expanded': {
                  pb: 2,
                },
                '.MuiAccordionSummary-content': {
                  m: 0,
                  '.MuiTypography-root': {
                    color: '#000',
                    fontSize: 20,
                    fontWeight: 700,
                  },
                },
              },
              '.MuiCollapse-root': {
                '.MuiAccordionDetails-root': {
                  p: 3.25,
                  pt: 0,
                  '.MuiTypography-root': {
                    color: '#888580',
                    fontSize: 18,
                  },
                }
              }
            }
          }}
        >
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
                <Typography>{v.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{v.contents}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Stack>

      {/* Footer */}
      <Stack
        sx={{
          py: 11,
          backgroundColor: '#0F2435'
        }}
      >
        <Stack
          flexDirection='row'
          alignItems='flex-start'
          justifyContent='space-between'
          sx={{
            width: 1360,
            margin: '0 auto',
          }}
        >
          <Stack>
            <Typography component='h3' color='#fff' fontSize={18} fontWeight={700} fontFamily='Montserrat'>
              NearU (Logo)
            </Typography>
            <Typography mt={2.5} component='div' color='#fff' fontSize={16} fontWeight={400}>
              가족의 손길.
            </Typography>
            <Stack
              mt={6}
              pt={4}
              pr={9}
              gap={2}
              sx={{
                borderTop: '1px solid #45525C'
              }}
            >
              <Typography pl={4} component='div' color='#fff' fontSize={15} fontWeight={400} fontFamily='Montserrat'>
                contact.nearu@gmail.com
              </Typography>
              <Stack flexDirection='row' alignItems='center' gap={1.5}>
                <img src='/images/bul-tel.png' alt='' width={20} />
                <Typography pt={0.5} component='div' color='#fff' fontSize={15} fontWeight={400} fontFamily='Montserrat'>
                  +82 010 6749 1894
                </Typography>
              </Stack>
              <Typography pl={4} component='div' color='#fff' fontSize={15} fontWeight={400} fontFamily='Montserrat'>
                인천광역시 서구 경서동<br />
                834-128 청라달튼외국인학교
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography component='h3' color='#fff' fontSize={18} fontWeight={700} fontFamily='Montserrat'>
              USEFUL LINKS
            </Typography>
            <Stack mt={2.5} ml={-1.5} gap={1}>
              <Button
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  height: 40,
                  gap: 1,
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 500,
                  fontFamily: 'Montserrat',
                  '&:hover': {
                    backgroundColor: 'transparent'
                  }
                }}
                onClick={()=> router.push('/about-us')}
              >
                <img src='/images/bul-arrow.png' alt='' width={20} />
                About Us
              </Button>
              <Button
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  height: 40,
                  gap: 1,
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 500,
                  fontFamily: 'Montserrat',
                  '&:hover': {
                    backgroundColor: 'transparent'
                  }
                }}
                onClick={()=> router.push('/faq')}
              >
                <img src='/images/bul-arrow.png' alt='' width={20} />
                FAQ
              </Button>
              <Button
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  height: 40,
                  gap: 1,
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 500,
                  fontFamily: 'Montserrat',
                  '&:hover': {
                    backgroundColor: 'transparent'
                  }
                }}
                onClick={()=> router.push('/app')}
              >
                <img src='/images/bul-arrow.png' alt='' width={20} />
                Sign In
              </Button>
            </Stack>
          </Stack>
          <Stack>
            <Typography component='h3' color='#fff' fontSize={18} fontWeight={700} fontFamily='Montserrat'>
              FOLLOW US
            </Typography>
            <Stack
              mt={6}
              flexDirection='row'
              alignItems='center'
              gap={2}
            >
              <Box
                sx={{
                  cursor: 'pointer',
                  width: 40,
                  height: 40,
                  borderRadius: 0.75,
                  overflow: 'hidden'
                }}
              >
                <img src='/images/instalogo.png' alt='instagram' width="100%" />
              </Box>
              <Box
                sx={{
                  cursor: 'pointer',
                  width: 40,
                  height: 40,
                  borderRadius: 0.75,
                  overflow: 'hidden'
                }}
              >
                <img src='/images/kakaologo.jpg' alt='Kakao' width="100%" />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          backgroundColor: '#0C1C2A'
        }}
      >
        <Stack
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'
          sx={{
            width: 1360,
            height: 92,
            margin: '0 auto',
          }}
        >
          <Typography component='div' color='#ccc' fontSize={15} fontWeight={500} fontFamily='Montserrat'>
            Copyrights © 2023 All Rights Reserved
          </Typography>
          <Stack
            flexDirection='row'
            alignItems='center'
            justifyContent='flex-end'
            gap={3}
          >
            <Typography component='div' color='#ccc' fontSize={15} fontWeight={500} fontFamily='Montserrat'>
              Terms of Usage and Conditions
            </Typography>
            <Typography component='div' color='#ccc' fontSize={15} fontWeight={500} fontFamily='Montserrat'>
              |
            </Typography>
            <Typography component='div' color='#ccc' fontSize={15} fontWeight={500} fontFamily='Montserrat'>
              Privacy Policy
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default StudHome;
