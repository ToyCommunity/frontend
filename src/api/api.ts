import axios from 'axios';

const api = typeof window === 'undefined'
  ? axios.create({
    baseURL: process.env?.NEXT_PUBLIC_BASE_URL || '',
  })
  : axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || '',
  });

export default api;
