import ChatsService from '../../services/chatsService';
import { isError } from '../../global/types';
import { snakeToCamelCase } from '../../utils/common';
import { Chat, RawChat } from '../../pages/chats/types';

export class ChatListController {
  chatsService: ChatsService;
  constructor() {
    this.chatsService = new ChatsService();
  }

  async getChats(): Promise<Chat[]> {
    let rawChats: RawChat[] = [];
    try {
      const res = await this.chatsService.getChats();
      rawChats = JSON.parse(res.response);
    } catch (error) {
      // todo: create a component that will be popped up when an error occurs
      if (isError(error)) {
        throw new Error(error.message);
      }
    }
    return rawChats.map(snakeToCamelCase) as Chat[];
  }

  async createChat(title: string) {
    try {
      await this.chatsService.createChat(title);
    } catch (error) {
      if (isError(error)) {
        throw new Error(error.message);
      }
    }
  }

  async removeChat(chatId: number) {
    try {
      await this.chatsService.removeChat(chatId);
    } catch (error) {
      if (isError(error)) {
        throw new Error(error.message);
      }
    }
  }
}
