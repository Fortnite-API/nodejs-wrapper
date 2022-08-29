/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import { URLSearchParams } from 'url';

export const serializeParams = (params: any) => {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      for (const singleValue of value) searchParams.append(key, singleValue);
    } else {
      searchParams.append(key, (value as any));
    }
  }

  return searchParams.toString();
};
