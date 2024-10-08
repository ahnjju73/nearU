import { QueryFunctionContext } from 'react-query';
import { apiRoutes } from '../routes';
import { api } from '../utils/api';
import { useFetch } from '../utils/reactQuery';
import { pathToUrl } from '../utils/router';

export interface JobInterface {
  id?: number;
  name: string;
  appointmentId?: number;
}

export interface INextToken {
  nextToken?: string | undefined;
}

export const checkSession = () => api.get<any>(apiRoutes.checkSession, {});

export const loginUser = (param: { userId: string; password: string }) =>
  api.put<any>(apiRoutes.login, param);

export const addUser = (param: any) => api.post<any>(apiRoutes.join, param);

export const registerApp = (param: any) => api.post<any>(apiRoutes.register, param);

export const addQnAComment = (param: any) =>
  api.post<any>(`${apiRoutes.comment}?qa_no=${param?.qa_no}`, param);

export const addQnA = (param: any) => api.post<any>(apiRoutes.qa, param);

export const cancelRegister = (param: any) =>
  api.delete<any>(
    `${apiRoutes.cancel}?application_no=${param.applicationNo}&user_no=${param.userNo}`,
    { param }
  );

export const getApplication = () => api.get<any>(apiRoutes.applications, undefined);

export const addApplication = (param: any) => api.post<any>(apiRoutes.application, param);

export const updateApplication = (param: any) => api.put<any>(apiRoutes.application, param);

export const getMyApplication = () => api.get<any>(apiRoutes.myApplications, undefined);

export const getQaAll = () => api.get<any>(apiRoutes.qaAll, undefined);

export const getMyAppliedApplications = () =>
  api.get<any>(apiRoutes.myAppliedApplications, undefined);

export const deleteApplication = (param: any) => api.delete<any>(apiRoutes.application, param);

export const deleteQnA = (param: any) => api.delete<any>(apiRoutes.qa, param);

export const deleteQnAComment = (param: any) => api.delete<any>(apiRoutes.comment, param);

export const getProfile = () => api.get<any>(apiRoutes.profile, undefined);

export const updateProfile = (param: any) => api.put<any>(apiRoutes.profile, param);

export const getQAndADetail = (
  param: QueryFunctionContext<
    (
      | string
      | {
          qa_no?: number;
        }
    )[],
    any
  >
) => {
  const params = param?.queryKey?.at(-1);
  return api.get<any>(apiRoutes.qa, { params });
};
