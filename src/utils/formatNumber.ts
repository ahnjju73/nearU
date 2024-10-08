import numeral from 'numeral';

// ----------------------------------------------------------------------

type InputValue = string | number | null;

export function fNumber(number: InputValue) {
  return numeral(number).format();
}

export function fCurrency(number: InputValue) {
  const format = number ? numeral(number).format('$0,0.00') : '';

  return result(format, '.00');
}

export function fPercent(number: InputValue) {
  const format = number ? numeral(Number(number) / 100).format('0.0%') : '';

  return result(format, '.0');
}

export function fShortenNumber(number: InputValue) {
  const format = number ? numeral(number).format('0.00a') : '';

  return result(format, '.00');
}

export function fData(number: InputValue) {
  const format = number ? numeral(number).format('0.0 b') : '';

  return result(format, '.0');
}

function result(format: string, key = '.00') {
  const isInteger = format.includes(key);

  return isInteger ? format.replace(key, '') : format;
}

export function fPhone(value: string | null | undefined) {
  if (!value) return '';
  // Remove all non-numeric characters
  const numericValue = value.replace(/[^0-9]/g, '');

  // Format the phone number with hyphens
  if (numericValue.length < 4) {
    return numericValue;
  }
  if (numericValue.length < 7) {
    return `${numericValue.slice(0, 3)}-${numericValue.slice(3)}`;
  }
  if (numericValue.length < 11) {
    return `${numericValue.slice(0, 3)}-${numericValue.slice(3, 6)}-${numericValue.slice(6)}`;
  }
  return `${numericValue.slice(0, 3)}-${numericValue.slice(3, 7)}-${numericValue.slice(7, 11)}`;
}
