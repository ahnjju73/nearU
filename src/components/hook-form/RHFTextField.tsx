// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField, TextFieldProps } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string;
};

export default function RHFTextField({ name, helperText, ...other }: Props) {
  const { control } = useFormContext();

  if (other.type === 'date') {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <DateTimePicker
            label={other.label}
            value={field.value ? new Date(field.value) : ''}
            onChange={(newValue: any) => {
              field.onChange(newValue);
            }}
            inputFormat='yyyy-MM-dd p'
            disabled={other.disabled}
            renderInput={(params: any) => (
              <TextField
                {...params}
                fullWidth
                error={!!error}
                helperText={error?.message}
                label={other.label}
                sx={{ ...other.sx }}
              />
            )}
          />
        )}
      />
    );
  }
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={typeof field.value === 'number' && field.value === 0 ? '' : field.value || ''}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        />
      )}
    />
  );
}
