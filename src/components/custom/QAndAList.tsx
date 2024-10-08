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
} from '@mui/material';
// routes
import { useMutation, useQuery } from 'react-query';
import { getQaAll, deleteApplication } from 'src/apis/apifunc/sign';
import { format, addHours } from 'date-fns';
import QAndADialog from 'src/components/custom/QAndADialog';
import QAndAAddDialog from 'src/components/custom/QAndAAddDialog';
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
  { id: 'Number', label: 'Number', align: 'center' },
  { id: 'Title', label: 'Title', align: 'center' },
  { id: '작성자', label: '작성자', align: 'center' },
  { id: 'Published At', label: 'Published At', align: 'center' },
];

// ----------------------------------------------------------------------

export default function UserListPage() {
  const { enqueueSnackbar } = useSnackbar();
  const { data, isLoading, refetch } = useQuery('getQaAll', () => getQaAll(), {
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
  const [addOpen, setAddOpen] = useState<boolean>(false);
  const [temp, setTemp] = useState<any>(undefined);
  const { themeStretch } = useSettingsContext();

  const { push } = useRouter();

  const dataFiltered = data?.data || [];
  const denseHeight = dense ? 52 : 72;
  const isNotFound = data?.data?.length === 0;
  console.log('row row', dataFiltered);
  return (
    <>
      <Head>
        <title> NearU</title>
      </Head>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        {/* <img
          src='/images/canva.jpg'
          alt=''
          style={{ width: '100vh', maxWidth: 640, margin: '0 auto 0 auto' }}
        /> */}
        <CustomBreadcrumbs
          heading={<img src='/images/nearUlogo.jpg' alt='' width={140} />}
          links={[]}
          action={
            <Button
              variant='contained'
              onClick={() => {
                setAddOpen(true);
                setTemp(undefined);
              }}
            >
              Q&A 추가
            </Button>
          }
        />

        <Card>
          <Divider />
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
                    .map((row: any, i: number) => (
                      <TableRow
                        hover
                        key={row.name}
                        onClick={() => {
                          setOpen(true);
                          setTemp(row);
                        }}
                      >
                        <TableCell align='center'>
                          {(i + 1 + page * rowsPerPage).toString()}
                        </TableCell>
                        <TableCell align='center'>{row?.question?.title || ''}</TableCell>
                        <TableCell align='center'>
                          {row?.question?.anonymous ? 'anonymous' : row?.name}
                        </TableCell>
                        <TableCell align='center'>
                          {row?.question?.createdDt
                            ? format(new Date(row?.question?.createdDt), 'yyyy-MM-dd p')
                            : ''}
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
      <QAndADialog
        key={String(open)}
        open={open}
        onClose={() => setOpen(false)}
        data={temp}
        refetch={() => refetch()}
      />
      <QAndAAddDialog
        key={String(addOpen)}
        open={addOpen}
        onClose={() => setAddOpen(false)}
        refetch={() => refetch()}
      />
    </>
  );
}

// ----------------------------------------------------------------------
