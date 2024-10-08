// @mui
import { Stack, Typography, Link, Step, StepLabel, Stepper, styled } from '@mui/material';
// layouts
import { useState } from 'react';
// routes
import { PATH_AUTH } from '../../routes/paths';
//
// import AuthWithSocial from './AuthWithSocial';
import AuthRegisterForm from './AuthRegisterForm';
import TermForm from './TermForm';
import UserType from './UserType';
import Complete from './Complete';

export const StyledRoot = styled('main')(() => ({
  height: '100%',
  display: 'flex',
  position: 'relative',
}));

export const StyledContent = styled('div')(({ theme }) => ({
  width: 800,
  margin: 'auto',
  // display: 'flex',
  minHeight: '100vh',
  justifyContent: 'center',
  padding: theme.spacing(15, 2),
  [theme.breakpoints.up('md')]: {
    flexShrink: 0,
    // padding: theme.spacing(30, 8, 0, 8),
    padding: theme.spacing(30, 2, 0, 2),
  },
}));

// ----------------------------------------------------------------------

export default function Register() {
  const [step, setStep] = useState(0);
  const [type, setType] = useState<'volunteer' | 'patient' | undefined>(undefined);

  return (
    <StyledRoot>
      <StyledContent>
        <Stepper
          activeStep={step}
          alternativeLabel
          sx={{
            mb: 4,
            mx: 0,
            '& svg': {
              fontSize: '4rem',
            },
            '& .MuiStepConnector-line': {
              display: 'none',
            },
          }}
        >
          {Array(4)
            .fill('')
            .map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
        </Stepper>
        {(() => {
          switch (step) {
            case 0:
              return <TermForm setStep={setStep} />;
            case 1:
              return <UserType setStep={setStep} type={type} setType={setType} />;
            case 2:
              return <AuthRegisterForm type={type} setStep={setStep} />;
            case 3:
              return <Complete />;
            default:
              return <></>;
          }
        })()}
      </StyledContent>
    </StyledRoot>
  );
}
