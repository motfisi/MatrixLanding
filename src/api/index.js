import axios from 'axios';

export * from './tgBot';

export const instance = axios.create({
  baseURL: `https://api.telegram.org/bot${BOT_TOKEN}`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
