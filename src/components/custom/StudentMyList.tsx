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
import { useQuery } from 'react-query';
import { getMyAppliedApplications } from 'src/apis/apifunc/sign';
import { format, addHours } from 'date-fns';
import ApplicationViewDialog from 'src/components/custom/ApplicationViewDialog';
import ProfileDialog from 'src/components/custom/ProfileDialog';
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
// sections

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'Name', label: 'Name', align: 'center' },
  { id: 'Date', label: 'Date', align: 'center' },
  { id: 'Time', label: 'Time', align: 'center' },
  { id: 'Location', label: 'Location', align: 'center' },
];

// ----------------------------------------------------------------------

export default function UserListPage() {
  const { data, isLoading, error, refetch } = useQuery(
    'getMyAppliedApplications',
    () => getMyAppliedApplications(),
    {
      onSuccess: (res) => {},
      onError: () => {},
    }
  );
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
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const [temp, setTemp] = useState<any>(undefined);
  const { themeStretch } = useSettingsContext();

  const { push } = useRouter();

  const dataFiltered = (data?.data || []).sort((a: any, b: any) => {
    // 날짜를 Date 객체로 변환
    const dateA = new Date(a.application.dueDate);
    const dateB = new Date(b.application.dueDate);

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
                    .map((row: any) => (
                      <TableRow
                        hover
                        key={row.application.name}
                        onClick={() => {
                          setOpen(true);
                          setTemp({ ...row, app: row.application });
                        }}
                      >
                        <TableCell padding='checkbox'>
                          {row.application?.admin?.userInfo?.name || ''}
                        </TableCell>

                        <TableCell align='center'>
                          {format(new Date(row.application.dueDate), 'yyyy-MM-dd')}
                        </TableCell>
                        <TableCell align='center'>
                          {format(new Date(row.application.dueDate), 'p')}
                          {' ~ '}
                          {format(
                            addHours(
                              new Date(row.application.dueDate),
                              Number(row.application.durationHours)
                            ),
                            'p'
                          )}
                        </TableCell>
                        <TableCell align='center'>{row.application.location}</TableCell>
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
      <ApplicationViewDialog
        open={open}
        onClose={() => setOpen(false)}
        data={temp}
        refetch={() => refetch()}
      />
      <ProfileDialog open={openProfile} onClose={() => setOpenProfile(false)} />
    </>
  );
}

// ----------------------------------------------------------------------
