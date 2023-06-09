import axios from 'axios';

export interface ErrorDetail {
  code: string;
  message: string;
}

export interface ErrorResponse {
  result: string,
  detail: ErrorDetail,
}

const api = typeof window === 'undefined'
  ? axios.create({
    baseURL: process.env?.NEXT_PUBLIC_BASE_URL || '',
  })
  : axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || '',
  });

export default api;
