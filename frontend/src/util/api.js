import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://registry-puce.vercel.app'
    // baseURL: 'http://localhost:4000'
  });

