import { instance } from '.';

export const tgBotApi = {
  sendMessage: (params) => {
    return instance.get('/sendMessage', { params });
  },
};
