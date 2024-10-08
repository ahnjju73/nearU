import { Dispatch, SetStateAction, useState } from 'react';
import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import {
  Stack,
  IconButton,
  InputAdornment,
  Alert,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Checkbox,
  FormGroup,
  Link,
  Typography,
  Button,
} from '@mui/material';
import { useRouter } from 'next/router';
import { LoadingButton } from '@mui/lab';
// auth
import { PATH_AUTH } from 'src/routes/paths';
import { spacing } from '@mui/system';
import { useSnackbar } from 'notistack';
import PrivacyPolicy from 'src/components/custom/Privacy-Policy';
import TermsAndConditions from 'src/components/custom/Terms-and-Conditions';
import { useAuthContext } from '../../auth/useAuthContext';
// components
import Iconify from '../../components/iconify';
import FormProvider, { RHFTextField } from '../../components/hook-form';
// ----------------------------------------------------------------------

interface ITermForm {
  setStep: Dispatch<SetStateAction<number>>;
}

export default function TermForm({ setStep }: ITermForm) {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [term, setTerm] = useState({
    all: false,
    private: false,
  });

  const nextPage = () => {
    if (!term.all) {
      enqueueSnackbar('이용 약관이 선택되지 않았습니다.', { variant: 'error' });
      return;
    }
    if (!term.private) {
      enqueueSnackbar('개인정보 처리 방침이 선택되지 않았습니다.', { variant: 'error' });
      return;
    }
    setStep(1);
  };

  return (
    <>
    <Stack flexDirection="row" sx={{position: 'fixed', top: 0, left: 20, py: 4, px: 2, zIndex: 20}}>
      <Typography component='h3'fontSize={26} fontWeight={700} fontFamily='Montserrat' color='#55BDB3' sx={{cursor: 'pointer'}} onClick={()=> router.push('/')}>
              NearU
            </Typography>
      </Stack>
      <Stack sx={{ mx: 2 }}>
        <Stack spacing={2} sx={{ mb: 2, position: 'relative' }}>
          <Typography variant='h4'>준비 되셨나요?</Typography>

          <Stack direction='row' spacing={0.5}>
            <Typography variant='body2'>먼저, NearU의 계정을 만들어 보아요.</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2.5} sx={{ mb: 1 }}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={term.all}
                  onChange={(e) => setTerm((prev) => ({ ...prev, all: e.target.checked }))}
                />
              }
              label={
                <Stack flexDirection='row'>
                  <Typography sx={{ my: 'auto' }}>이용 약관</Typography>
                  <Button onClick={() => setOpen2(true)}>읽어보기</Button>
                </Stack>
              }
            />
            <FormControlLabel
              control={<Checkbox checked={term.private} />}
              onChange={(e: any) => setTerm((prev) => ({ ...prev, private: e.target.checked }))}
              label={
                <Stack flexDirection='row'>
                  <Typography sx={{ my: 'auto' }}>개인정보 처리 방침</Typography>
                  <Button onClick={() => setOpen1(true)}>읽어보기</Button>
                </Stack>
              }
            />
          </FormGroup>
        </Stack>
        <Button variant='contained' onClick={() => nextPage()}>
          Next
        </Button>
      </Stack>
      <PrivacyPolicy open={open1} onClose={() => setOpen1(false)} />
      <TermsAndConditions open={open2} onClose={() => setOpen2(false)} />
    </>
  );
}
