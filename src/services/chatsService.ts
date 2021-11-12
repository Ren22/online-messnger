/* eslint-disable camelcase */
import { Request } from '../utils/request';

export default class ChatsService {
  request: Request;
  baseUrl: string;
  constructor() {
    this.request = new Request();
    this.baseUrl = 'https://ya-praktikum.tech/api/v2';
  }

  getChats() {
    return this.request.get(`${this.baseUrl}/chats`, { withCredentials: true });
  }

  createChat(title: string) {
    return this.request.post(`${this.baseUrl}/chats`,
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
        data: {title: title},
      });
  }

  removeChat(chatId: number) {
    return this.request.delete(`${this.baseUrl}/chats`,
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
        data: {chatId: chatId},
      })
  }
}
