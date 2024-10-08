// @mui
import { Typography, Stack } from '@mui/material';
import { useRouter } from 'next/router';
// components
// import Logo from '../../components/logo';
import Image from '../../components/image';
//
import { StyledRoot, StyledSectionBg, StyledSection, StyledContent } from './styles';

// ----------------------------------------------------------------------

type Props = {
  title?: string | JSX.Element | Array<JSX.Element>;
  illustration?: string;
  children: React.ReactNode;
};

export default function LoginLayout({ children, illustration, title }: Props) {
  const router = useRouter();
  return (
    <StyledRoot>
      <Stack flexDirection="row" sx={{position: 'fixed', top: 0, left: 20, py: 4, px: 2, zIndex: 20}}>
      <Typography component='h3'fontSize={26} fontWeight={700} fontFamily='Montserrat' color='#55BDB3' sx={{cursor: 'pointer'}} onClick={()=> router.push('/')}>
              NearU
            </Typography>
      </Stack>
      {/* <Logo
        sx={{
          zIndex: 9,
          position: 'absolute',
          mt: { xs: 1.5, md: 5 },
          ml: { xs: 2, md: 5 },
        }}
      /> */}

      <StyledSection>
        <Typography variant='h3' sx={{ mb: 10, maxWidth: 480, textAlign: 'center' }}>
          {title || 'NearU에 오신걸 환영합니다.'}
        </Typography>

        <Image
          disabledEffect
          visibleByDefault
          alt='auth'
          src={illustration || '/images/nearUlogo.jpg'}
          sx={{ maxWidth: 720 }}
        />

        {/* <StyledSectionBg /> */}
      </StyledSection>

      <StyledContent>
        <Stack sx={{ width: 1 }}> {children} </Stack>
      </StyledContent>
    </StyledRoot>
  );
}
