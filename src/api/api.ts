import axios from 'axios';

const api = typeof window === 'undefined'
  ? axios.create({
    baseURL: process.env?.NEXTAUTH_URL || '',
  })
  : axios.create({
    baseURL: process.env.NEXTAUTH_URL || '',
  });

export default api;
