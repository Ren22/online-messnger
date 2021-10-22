/* eslint-disable camelcase */
import { Request } from '../utils/request';

type RawChat = {
  id: number,
  title: string,
  avatar: string,
  unread_count: number,
  first_name: string,
  second_name: string,
  time: string,
  content: string,
}

export default class ChatsService {
  request: Request;
  constructor() {
    this.request = new Request();
  }

  static getChats(): RawChat[] {
    return [
      {
        id: 123,
        title: 'my-chat',
        avatar: '/123/avatar1.jpg',
        unread_count: 15,
        first_name: 'Petya',
        second_name: 'Pupkin',
        time: '14:22',
        content: 'this is message content',
      },
    ];
  }
}
