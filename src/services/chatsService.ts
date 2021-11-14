/* eslint-disable no-console */
/* eslint-disable camelcase */
import { Request } from '../utils/request';
import { CallBack } from '../global/types';

export default class ChatsService {
  request: Request;
  baseUrl: string;
  wssBaseUrl: string;
  constructor() {
    this.request = new Request();
    this.baseUrl = 'https://ya-praktikum.tech/api/v2';
    this.wssBaseUrl = 'wss://ya-praktikum.tech/ws/chats';
  }

  getChats() {
    return this.request.get(`${this.baseUrl}/chats`);
  }

  createChat(title: string) {
    return this.request.post(`${this.baseUrl}/chats`,
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
        data: { title },
      });
  }

  removeChat(chatId: number) {
    return this.request.delete(`${this.baseUrl}/chats`,
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
        data: { chatId },
      });
  }

  getChatWSToken(chatId: number) {
    return this.request.post(`${this.baseUrl}/chats/token/${chatId}`,
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      });
  }

  createWSconnection(chatId: number, userId: number, wsToken: string, cb: CallBack):
    Promise<WebSocket> {
    return new Promise((resolve, reject) => {
      const server = new WebSocket(`${this.wssBaseUrl}/${userId}/${chatId}/${wsToken}`);
      server.onopen = () => {
        console.log('Соединение установлено');
        resolve(server);
      };
      server.onmessage = cb;
      server.onerror = (error) => reject(error);
      server.onclose = (event) => {
        if (event.wasClean) {
          console.log('Соединение закрыто чисто');
        } else {
          console.log('Обрыв соединения');
        }
        console.log(`Код: ${event.code} | Причина: ${event.reason}`);
      };
    });
  }
}
