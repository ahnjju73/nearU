import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AuthGuard from 'src/auth/AuthGuard';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';
import ProfileDialog from 'src/components/custom/ProfileDialog';
import { IconButton, Stack } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/router';
import StudentList from './StudentList';
import ApplicationList from './ApplicationList';
import StudentMyList from './StudentMyList';
import QAndAList from './QAndAList';
import Footer from './Footer';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  sx?: any;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, sx, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, ...sx }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

BasicTabs.getLayout = (page: React.ReactElement) => <AuthGuard>{page}</AuthGuard>;

export default function BasicTabs() {
  const router = useRouter();
  // const [value, setValue] = React.useState(0);
  const value = Number(router.query.step) || 0;
  const [openProfile, setOpenProfile] = React.useState<boolean>(false);
  const { session } = useSelector((state: RootState) => state);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    router.push({
      pathname: router.pathname,
      query: {
        step: newValue,
      },
    });
  };

  if (!session) return <></>;
  if (session.userType === 'PATIENT') {
    return (
      <>
        <Stack sx={{ width: '100%', height: '100vh' }} justifyContent='space-between'>
          <Box>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Tabs value={value} onChange={handleChange} sx={{ ml: 8 }}>
                <Tab label='도움 신청서 목록' {...a11yProps(0)} />
                <Tab label='Q&A' {...a11yProps(1)} />
              </Tabs>
              <IconButton onClick={() => setOpenProfile(true)} sx={{ mr: 6 }}>
                <AccountCircleIcon />
              </IconButton>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <ApplicationList />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} sx={{ paddingTop: 0 }}>
              <QAndAList />
            </CustomTabPanel>
          </Box>
          <Footer />
        </Stack>
        <ProfileDialog
          key={String(openProfile)}
          open={openProfile}
          onClose={() => setOpenProfile(false)}
        />
      </>
    );
  }
  return (
    <>
      <Stack sx={{ width: '100%', height: '100vh' }} justifyContent='space-between'>
        <Box>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Tabs value={value} onChange={handleChange} sx={{ ml: 8 }}>
              <Tab label='신청서 목록' {...a11yProps(0)} />
              <Tab label='내 신청서 목록' {...a11yProps(1)} />
              <Tab label='Q&A' {...a11yProps(2)} />
            </Tabs>
            <IconButton onClick={() => setOpenProfile(true)} sx={{ mr: 6 }}>
              <AccountCircleIcon />
            </IconButton>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <StudentList />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <StudentMyList />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2} sx={{ paddingTop: 0 }}>
            <QAndAList />
          </CustomTabPanel>
        </Box>
        <Footer />
      </Stack>
      <ProfileDialog
        key={String(openProfile)}
        open={openProfile}
        onClose={() => setOpenProfile(false)}
      />
    </>
  );
}
