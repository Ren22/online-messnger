import ChatsService from '../../services/chatsService';
import { snakeToCamelCase } from '../../utils/common';

export type Chat = {
  id: number,
  title: string,
  avatar: string,
  unreadCount: number,
  firstName: string,
  secondName: string,
  time: string,
  content: string,
}

export default class ChatsListController {
  chatsService: ChatsService;

  constructor() {
    this.chatsService = new ChatsService();
  }

  static getChatsData() {
    return (ChatsService.getChats().map(snakeToCamelCase) as unknown as Chat[]);
  }
}
