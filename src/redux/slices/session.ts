import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { UserStatusTypes, UserStatusTypesCode } from 'src/@types/user';

export interface ISessionState {
  initialized: boolean;
  login: boolean;
  email: string;
  sessionKey: string;
  userId: string;
  userStatusType: UserStatusTypes;
  userStatusTypeCode: UserStatusTypesCode;
  username: string;
  userType: string;
}

export const initialState: ISessionState = {
  initialized: false,
  login: false,
  email: '',
  sessionKey: '',
  userId: '',
  userStatusType: UserStatusTypes.DELETED,
  userStatusTypeCode: UserStatusTypesCode.DELETED,
  username: '',
  userType: '',
};

export const session = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSession(_state, action: PayloadAction<ISessionState>) {
      return action.payload;
    },
    hasLoginFail(_state, _action: PayloadAction<void>) {
      return { ...initialState, initialized: true };
    },
    doLoginOut(_state, _action: PayloadAction<ISessionState | void>) {
      return { ...initialState, initialized: true };
    },
  },
});

export const { setSession, hasLoginFail, doLoginOut } = session.actions;
export default session.reducer;
