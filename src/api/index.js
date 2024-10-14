import axios from 'axios';

export * from './tgBot';

export const instance = axios.create({
  baseURL:
    'https://api.telegram.org/bot8115136494:AAFZ2hgJPUopprwWI1FZBEYqda2DMefUvD4',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
