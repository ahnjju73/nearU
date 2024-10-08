import { paramCase } from 'change-case';
import { useState } from 'react';
// next
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// @mui
import {
  Tab,
  Tabs,
  Card,
  Table,
  Button,
  Tooltip,
  Divider,
  TableBody,
  Container,
  IconButton,
  TableContainer,
  TableCell,
  TableRow,
  Stack,
  ButtonGroup
} from '@mui/material';
// routes
import { useMutation, useQuery } from 'react-query';
import { getMyApplication, deleteApplication } from 'src/apis/apifunc/sign';
import { format, addHours } from 'date-fns';
import PatientDialog from 'src/components/custom/PatientDialog';

import { PATH_DASHBOARD } from 'src/routes/paths';
// @types
import { IUserAccountGeneral } from 'src/@types/user';
// _mock_
import { _userList } from 'src/_mock/arrays';
// layouts
import DashboardLayout from 'src/layouts/dashboard';
// components
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import ConfirmDialog from 'src/components/confirm-dialog';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useSettingsContext } from 'src/components/settings';
import {
  useTable,
  getComparator,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from 'src/components/table';
import { useSnackbar } from 'notistack';
// sections

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: '예약 날짜', label: '예약 날짜', align: 'center' },
  { id: '소요시간', label: '소요시간', align: 'center' },
  { id: '만나시는 장소', label: '장소', align: 'center' },
  { id: '방문사유', label: '방문사유', align: 'center' },
  { id: '상태', label: '상태', align: 'center' },
  { id: '', label: '', align: 'center' },
];

// ----------------------------------------------------------------------

export default function UserListPage() {
  const { enqueueSnackbar } = useSnackbar();
  const { data, isLoading, refetch } = useQuery('getMyApplication', () => getMyApplication(), {
    onSuccess: (res) => {},
    onError: () => {},
  });
  const {
    mutate,
    isLoading: mutateLoading,
    isError,
  } = useMutation(deleteApplication, {
    onSuccess: () => {
      refetch();
      enqueueSnackbar('도움 신청서가 삭제되었습니다.');
    },
    onError: ({ ...error }: any) => {
      enqueueSnackbar(
        error?.response?.data?.message || '도움 신청서가 삭제에 문제가 발생하였습니다.',
        { variant: 'error' }
      );
    },
  });
  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    //
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable();
  const [open, setOpen] = useState<boolean>(false);
  const [temp, setTemp] = useState<any>(undefined);
  const [dueDateSwitch, setDueDateSwitch] = useState<boolean>(false);
  const [matched, setMatched] = useState<'0' | '1' | '2'>('0');
  const { themeStretch } = useSettingsContext();

  const { push } = useRouter();
  const today = new Date();
  today.setHours(0, 0, 0, 0); // 오늘 날짜의 시작 시간으로 설정

  const dataFiltered = (data?.data || [])
    .filter((item: any) => {
      const itemDate = item?.app?.dueDate ? new Date(item.app.dueDate) : new Date();
      if(dueDateSwitch) return itemDate < today;
      return itemDate >= today;
    })
    .filter((item: any) => {
      if(matched === '1') return item?.status;
      if(matched === '2') return !item?.status;
      return true;
    })
    .sort((a: any, b: any) => {
      // 날짜를 Date 객체로 변환
      const dateA = new Date(a?.app?.dueDate);
      const dateB = new Date(b?.app?.dueDate);

      // 내림차순 정렬
      return Number(dateB) - Number(dateA);
    });
  const denseHeight = dense ? 52 : 72;
  const isNotFound = data?.data?.length === 0;

  return (
    <>
      <Head>
        <title> NearU</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'lg'} sx={{ mt: 6 }}>
        <CustomBreadcrumbs
          heading={<img src='/images/nearUlogo.jpg' alt='' width={140} />}
          links={[]}
          action={
            <Button
              variant='contained'
              onClick={() => {
                setOpen(true);
                setTemp(undefined);
              }}
            >
              도움 신청서 생성
            </Button>
          }
        />

        <Card>
          <Divider />
          <Stack sx={{my: 1, mx: 1}} flexDirection='row'>
          <Button variant='contained' color={dueDateSwitch ? 'primary' : 'inherit'} sx={{mr: 1}} onClick={()=> setDueDateSwitch(prev => !prev)}>{dueDateSwitch ? '유효 신청서 보기' : '지난 신청서 보기'}</Button>
          <ButtonGroup>
            {[
              {
                value: '0',
                title: '전체',
              },
              {
                value: '1',
                title: '매칭',
              },
              {
                value: '2',
                title: '매칭전',
              }
            ].map(v => 
              <Button variant='contained' onClick={() => setMatched(v.value as any)}  color={matched === v.value ? 'primary' : 'inherit'}>{v.title}</Button>
              )}
          </ButtonGroup>
          </Stack>
          <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
            <Scrollbar>
              <Table size={dense ? 'small' : 'medium'} sx={{ minWidth: 800 }}>
                <TableHeadCustom
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={dataFiltered.length}
                />

                <TableBody>
                  {dataFiltered
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row: any) => (
                      <TableRow
                        hover
                        key={row.name}
                        onClick={() => {
                          setOpen(true);
                          setTemp(row);
                        }}
                      >
                        <TableCell align='center'>
                          {row?.dday ? format(new Date(row.dday), 'yyyy-MM-dd') : ''}
                        </TableCell>
                        <TableCell align='center'>{row?.durationHours || ''}</TableCell>
                        <TableCell align='center'>{row?.location || ''}</TableCell>
                        <TableCell align='center'>{row?.conditions || ''}</TableCell>
                        <TableCell align='center'>
                          {row?.status ? 'Matched!' : 'Not Matched.'}
                        </TableCell>
                        <TableCell align='center' padding='checkbox'>
                          <Button
                            color='error'
                            onClick={(e) => {
                              // eslint-disable-next-line no-restricted-globals
                              e.stopPropagation();
                              // eslint-disable-next-line no-restricted-globals
                              if (confirm('선택하신 신청서를 삭제하시겠습니까?')) {
                                mutate({
                                  application_no: row?.applicationNo,
                                });
                              }
                            }}
                          >
                            삭제
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}

                  {/* <TableEmptyRows
                    height={denseHeight}
                    emptyRows={5}
                  /> */}
                  <TableNoData isNotFound={isNotFound} />
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>
          <TablePaginationCustom
            count={dataFiltered.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={onChangePage}
            onRowsPerPageChange={onChangeRowsPerPage}
            //
            dense={dense}
            onChangeDense={onChangeDense}
          />
        </Card>
      </Container>
      <PatientDialog
        key={String(open)}
        open={open}
        onClose={() => setOpen(false)}
        data={temp}
        refetch={() => refetch()}
      />
    </>
  );
}

// ----------------------------------------------------------------------
