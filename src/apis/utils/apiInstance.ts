import axios, { AxiosError } from 'axios';
import { keysToCamel } from 'src/utils';

export const getCookieValue = (key: string): string => {
  if (typeof window === 'undefined') return '';
  const cookieKey = `${key}=`;
  let result = '';
  const cookieArr = document.cookie.split(';');

  cookieArr.map((cookie: string, _i: number) => {
    if (cookie[0] === ' ') {
      cookie = cookie.substring(1);
    }

    if (cookie.indexOf(cookieKey) === 0) {
      result = cookie.slice(cookieKey.length, cookie.length);
    }
    return cookie;
  });
  return result;
};

const axiosApiInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_DOMAIN}`,
});

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    (config as any).headers = {
      ...config.headers,
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      [process.env.NEXT_PUBLIC_SESSION_KEY as string]: getCookieValue(
        process.env.NEXT_PUBLIC_SESSION_KEY as string
      ),
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => keysToCamel(response),
  async (error: AxiosError) => {
    const originalRequest = error.config;
    // if (error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;
    //   const token = getCookieValue(
    //     NEXT_PUBLIC_SESSION_KEY as string
    //   );
    //   const access_token = await refreshAccessToken(token);
    //   if(userInfo){
    //     originalRequest.headers['Authorization'] = 'Bearer ' + access_token;
    //     userInfo.accessToken = access_token;
    //     window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
    //   }
    //   return axios(originalRequest);
    // }

    // if (error.response?.status === 401) {
    //   dispatch(
    //     requestWaitedApi({
    //       title: '네트워크 문제입니다.',
    //       func: undefined,
    //     })
    //   );
    //   return error;
    // }
    if (!(originalRequest as any)._retry) {
      (originalRequest as any)._retry = true;
      if (originalRequest) {
        // eslint-disable-next-line consistent-return
        return axios(originalRequest);
      }
    }
    // eslint-disable-next-line consistent-return
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
