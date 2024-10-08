import { useCookie } from 'next-cookie';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { checkSession } from 'src/apis/apifunc/sign';
import { setUserSession } from 'src/assets/utils/common_api';
import { RootState } from 'src/redux/rootReducer';
import { hasLoginFail } from 'src/redux/slices/session';
import LoadingScreen from '../components/loading-screen';
import Login from '../pages/auth/login';
// ----------------------------------------------------------------------

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const { session } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const cookie = useCookie();
  useQuery('checkSession', () => checkSession(), {
    onSuccess: (res) => setUserSession({ data: res?.data, dispatch, cookie }),
    onError: () => dispatch(hasLoginFail()),
  });

  if (session.login) return <> {children} </>;
  if (session.initialized) return <Login />;
  return <LoadingScreen />;
}
