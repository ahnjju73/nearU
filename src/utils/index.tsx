import { isObject, isArray } from 'util';

import { AxiosError } from 'axios';
import { Cookie } from 'next-cookie';

import { SnackbarMessage, OptionsObject, SnackbarKey } from 'notistack';

export const isSSR = typeof window === 'undefined';

export const hasEng = (param: string) => {
  const reg = /^(?=.*[a-z])/g;
  return !reg.test(param);
};

export const hasEngNumber = (param: string) => {
  const reg = /^(?=.*[a-z])(?=.*[0-9])/g;
  return !reg.test(param);
};

export const checkCardNum = (anum: string, bnum: string, cnum: string, dnum: string) => {
  if (anum === '' || bnum === '' || cnum === '' || dnum === '')
    return '카드번호를 입력하셔야 합니다.';
  return '';
};

export const checkPassword2Digit = (param: string) => {
  if (param === '') return '비밀번호를 입력하셔야 합니다.';
  return '';
};

export const checkJumin = (param: string) => {
  if (param === '') return '생년월일을 입력하셔야 합니다.';
  if (param.length !== 6) return '생년월일 양식에 맞지 않습니다.';
  return '';
};

export const hasEngNumberEx = (param: string) => {
  const reg = /^(?=.*[a-z])(?=.*[0-9])(?=.*[$@$!%*#?&])/g;
  return !reg.test(param);
};

export const hasTextLength = (param: string) => {
  const reg = /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*?&])[a-z\d$@$!%*?&]{8,}/g;
  return !reg.test(param);
};

export const checkValidatePassword = (param: string): string => {
  const reg = /^(?=.*[a-z])(?=.*\d)[a-z\d$@$!%*#?&]{8,}$/;
  if (param === '') {
    return '비밀번호가 비어있습니다.';
  }
  if (!reg.test(param)) {
    return '영어, 숫자, 특수기호 조합으로 8자리 이상 입력해주세요.';
  }
  return '';
};

export const checkValidateDiffPassword = (param: string, origin: string): string => {
  if (param === '') {
    return '비밀번호가 비어있습니다.';
  }
  if (param !== origin) {
    return '비밀번호가 일치하지 않습니다.';
  }
  return '';
};

export const checkValidateEmail = (param: string) => {
  const reg = /^\S+@\S+\.\S+$/g;
  if (param === '') {
    return '이메일이 비어있습니다.';
  }
  if (!reg.test(param)) {
    return '이메일양식이 맞지 않습니다.';
  }
  return '';
};

export const checkName = (param: string) => {
  if (param === '') {
    return '이름이 비어있습니다.';
  }
  return '';
};

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

export const camelToSnakeCase = (str: string): string =>
  str.replace(/[A-Z]/g, (letter: any) => `_${letter.toLowerCase()}`);

export const toCamel = (s: string): string =>
  s.replace(/([-_][a-z])/gi, ($1) => $1.toUpperCase().replace('-', '').replace('_', ''));

export const camelToKey = (o: any): any => {
  if (isArray(o)) {
    return o.map((i) => camelToKey(i));
  }
  if (isObject(o)) {
    const n: any = {};
    Object.keys(o).forEach((k) => {
      n[camelToSnakeCase(k)] = camelToKey(o[k]);
    });
    return n;
  }
  return o;
};

export const keysToCamel = (o: any): any => {
  if (isArray(o)) {
    return o.map((i) => keysToCamel(i));
  }
  if (isObject(o)) {
    const n: any = {};
    Object.keys(o).forEach((k) => {
      n[toCamel(k)] = keysToCamel(o[k]);
    });
    return n;
  }
  return o;
};

export const getRandomArbitrary = (min: number, max: number) =>
  Math.round(Math.random() * (max - min) + min);

export function transMoneyFormat(param?: number | null): string {
  if (!param) return '0';
  let value: number | string = Math.floor(param);
  value = value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return value;
}

export function dateDistance(param: string | Date | undefined) {
  if (!param) return 0;
  const date1 = new Date(param);
  const date2 = new Date();
  const diffTime = date2.getTime() - date1.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export function dateCompare(param?: string | Date) {
  if (!param) return false;
  const date1 = new Date(param);
  const date2 = new Date();
  return date2.getTime() > date1.getTime();
}

export const phoneNumber = (phoneNum: string) => {
  if (!phoneNum) {
    return '';
  }
  phoneNum = phoneNum.toString();
  phoneNum = phoneNum.replace(/[^0-9]/g, '');
  const result = [];
  let restNumber = '';
  // 지역번호와 나머지 번호로 나누기
  if (phoneNum.startsWith('02')) {
    // 서울 02 지역번호
    result.push(phoneNum.substr(0, 2));
    restNumber = phoneNum.substring(2);
  } else if (phoneNum.startsWith('1')) {
    // 지역 번호가 없는 경우
    // 1xxx-yyyy
    restNumber = phoneNum;
  } else {
    // 나머지 3자리 지역번호
    // 0xx-yyyy-zzzz
    result.push(phoneNum.substr(0, 3));
    restNumber = phoneNum.substring(3);
  }

  if (restNumber.length === 7) {
    // 7자리만 남았을 때는 xxx-yyyy
    result.push(restNumber.substring(0, 3));
    result.push(restNumber.substring(3));
  } else {
    result.push(restNumber.substring(0, 4));
    result.push(restNumber.substring(4));
  }

  if (restNumber.length > 8) {
    return phoneNum.replace(/[^0-9]/g, '');
  }

  return result.filter((val) => val).join('-');
};

export const removeSession = (cookie: Cookie) => {
  cookie.set(process.env.NEXT_PUBLIC_SESSION_KEY as string, '', {
    path: '/',
  });
  window.location.reload();
};

export const truncate = (param?: string) => {
  if (!param) return '';
  if (param.length > 80) {
    return `${param.substring(0, 80)}...`;
  }
  return param;
};

export const shareTwitter = ({ sendText, sendUrl }: { sendText?: string; sendUrl: string }) => {
  window.open(`https://twitter.com/intent/tweet?text=${sendText || ''}&url=${sendUrl}`);
};

export const shareFacebook = ({ sendText, sendUrl }: { sendText?: string; sendUrl: string }) => {
  window.open(`http://www.facebook.com/sharer/sharer.php?u=${sendText || ''}&url=${sendUrl}`);
};

export const isMobile = (param: string | string[] | undefined) => {
  if (!param) return false;
  if (param === 'ios' || param === 'android') return true;
  return false;
};

export const errorAlert = ({
  enqueueSnackbar,
  error,
  basetext,
  efunc,
}: {
  enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject | undefined) => SnackbarKey;
  error: AxiosError<any>;
  basetext: string;
  efunc?: () => void;
}) => {
  if (error?.response?.data) {
    enqueueSnackbar(error?.response?.data.message, {
      variant: 'error',
    });
  } else {
    enqueueSnackbar(basetext, {
      variant: 'error',
    });
  }
  if (efunc) {
    efunc();
  }
};
