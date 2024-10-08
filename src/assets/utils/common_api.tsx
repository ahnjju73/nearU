import { hasLoginFail, ISessionState, setSession } from 'src/redux/slices/session';

import { Cookie } from 'next-cookie';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';

export const setUserSession = ({
  data,
  dispatch,
  cookie,
}: {
  data: any;
  dispatch: Dispatch<AnyAction>;
  cookie: Cookie;
}) => {
  if (!data) {
    dispatch(hasLoginFail());
    return;
  }
  const sessionParams: ISessionState = {
    initialized: true,
    login: true,
    ...data,
  };
  dispatch(setSession(sessionParams));

  if (data?.sessionKey) {
    cookie.set(process.env.NEXT_PUBLIC_SESSION_KEY as string, data?.sessionKey, {
      path: '/',
    });
  }
};
