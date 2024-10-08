import apiInstance from 'src/apis/utils/apiInstance';
import { camelToKey } from 'src/utils';

export const api = {
  get: <T>(url: string, params?: object) =>
    apiInstance.get<T>(url, {
      ...camelToKey(params),
    }),
  post: <T>(url: string, data: any) => apiInstance.post<T>(url, camelToKey(data), {}),
  put: <T>(url: string, data: any) => apiInstance.put<T>(url, camelToKey(data), {}),
  patch: <T>(url: string, data: any) => apiInstance.patch<T>(url, camelToKey(data), {}),
  delete: <T>(url: string, data: any) =>
    apiInstance.delete<T>(url, { params: camelToKey({ ...data }) }),
};
