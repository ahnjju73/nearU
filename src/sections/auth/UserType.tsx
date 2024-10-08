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
  Card,
  Divider,
  CardActions,
  CardContent,
  CardHeader,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// auth
import { PATH_AUTH } from 'src/routes/paths';
import { spacing } from '@mui/system';
import { useSnackbar } from 'notistack';
import { useAuthContext } from '../../auth/useAuthContext';
// components
import Iconify from '../../components/iconify';
import FormProvider, { RHFTextField } from '../../components/hook-form';

// ----------------------------------------------------------------------

interface IUserType {
  setStep: Dispatch<SetStateAction<number>>;
  type: 'volunteer' | 'patient' | undefined;
  setType: Dispatch<SetStateAction<'volunteer' | 'patient' | undefined>>;
}

export default function UserType({ setStep, type, setType }: IUserType) {
  const nextPage = (param: 'volunteer' | 'patient') => {
    setType(param);
    setStep(2);
  };

  return (
    <Stack sx={{ mx: 2 }} flexDirection='row'>
      <Card sx={{ mr: 1 }}>
        <CardHeader title='이용객' />
        <Divider sx={{ my: 1 }} />
        <CardContent>
          <Typography sx={{ mb: 1 }}>이용 방법과 상세 설명:</Typography>
          <ul style={{ marginLeft: 14, marginBottom: 22 }}>
            {[
              '병원 동행 서비스와 관련된 모든 도움을 받으실 수 있습니다.',
              '서비스 필요시, 신청을 하시면 됩니다.',
              // '즉시 찾기, 예약 둘 다 가능합니다.',
              // '필터링을 거친 후, 최적의 봉사자가 페어링 될 것 입니다.',
              '봉사자의 봉사시간 인증을 해주시면 됩니다.',
              
            ].map((v: string) => (
              <li key={v} style={{ fontSize: 14 }}>
                {v}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardActions>
          <Button variant='contained' fullWidth onClick={() => nextPage('patient')}>
            시작하기!
          </Button>
        </CardActions>
      </Card>
      <Card>
        <CardHeader title='봉사자' />
        <Divider sx={{ my: 1 }} />
        <CardContent>
          <Typography sx={{ mb: 1 }}>이용 방법과 상세 설명:</Typography>
          <ul style={{ marginLeft: 14 }}>
            {[
              '이용객에게 필요한 서비스를 제공합니다.',
              '편하신 시간에 가능한 세션을 신청 하시면 됩니다.',
              // '필터링을 거친 후, 최적의 이용객 제안이 표시 됩니다.',
              '봉사자와 적극적인 소통이 필요합니다.',
              '봉사 시간은 1365 포털로 최종 적립 됩니다.',
            ].map((v: string) => (
              <li key={v} style={{ fontSize: 14 }}>
                {v}
              </li>
            ))}
          </ul>
        </CardContent>

        <CardActions>
          <Button variant='contained' fullWidth onClick={() => nextPage('volunteer')}>
            시작하기!
          </Button>
        </CardActions>
      </Card>
    </Stack>
  );
}
