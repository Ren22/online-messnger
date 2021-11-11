import ChatsService from '../../services/chatsService';
import { snakeToCamelCase } from '../../utils/common';
import { isError } from '../../global/types';
import { Chat, RawChat } from './types';

export default class ChatsListController {
  chatsService: ChatsService;

  constructor() {
    this.chatsService = new ChatsService();
  }

  async getChats(): Promise<Chat[]> {
    let rawChats: RawChat[] = [];
    try {
      rawChats = await this.chatsService.getChats();
    } catch (error) {
      // todo: create a component that will be popped up when an error occurs
      if (isError(error)) {
        throw new Error(error.message);
      }
    }
    return rawChats.map(snakeToCamelCase) as Chat[];
  }
}
