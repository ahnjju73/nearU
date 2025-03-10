// @mui
import { useTheme } from '@mui/material/styles';
import { Stack, LinearProgress } from '@mui/material';
// @types
import { IMailListState, IMailLabel } from '../../../../@types/mail';
// utils
import { bgBlur } from '../../../../utils/cssStyles';
// components
import Scrollbar from '../../../../components/scrollbar';
import EmptyContent from '../../../../components/empty-content';
//
import MailItem from './MailItem';

// ----------------------------------------------------------------------

type Props = {
  dense: boolean;
  isEmpty: boolean;
  isLoading: boolean;
  labels: IMailLabel[];
  mails: IMailListState;
  onSelectMail: (id: string) => void;
  onDeselectMail: (id: string) => void;
  selectedMails: (id: string) => boolean;
};

export default function MailList({
  mails,
  dense,
  labels,
  isEmpty,
  isLoading,
  onSelectMail,
  selectedMails,
  onDeselectMail,
}: Props) {
  const theme = useTheme();

  const { allIds, byId } = mails;

  return (
    <Stack sx={{ position: 'relative', height: `calc(100% - 80px)` }}>
      {isLoading && (
        <Stack
          alignItems='center'
          justifyContent='center'
          sx={{
            top: 0,
            left: 0,
            width: 1,
            height: 1,
            zIndex: 9,
            position: 'absolute',
            ...bgBlur({ color: theme.palette.background.paper }),
          }}
        >
          <LinearProgress color='inherit' sx={{ width: 1, maxWidth: 320 }} />
        </Stack>
      )}

      {isEmpty && !isLoading ? (
        <EmptyContent
          title='There is no conversation'
          img='/assets/illustrations/illustration_empty_mail.svg'
        />
      ) : (
        <Scrollbar sx={{ height: 1 }}>
          <Stack sx={{ minWidth: { md: 960 } }}>
            {allIds.map((mailId) => (
              <MailItem
                key={mailId}
                dense={dense}
                mail={byId[mailId]}
                selected={selectedMails(mailId)}
                onSelect={() => onSelectMail(mailId)}
                onDeselect={() => onDeselectMail(mailId)}
                getLabel={(labelId: string) => labels.filter((label) => label.id === labelId)[0]}
              />
            ))}
          </Stack>
        </Scrollbar>
      )}
    </Stack>
  );
}
