/* eslint-disable camelcase */
import { Request } from '../utils/request';
import { RawChat } from '../pages/chats/types';

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
}
