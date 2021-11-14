import ChatsService from '../../services/chatsService';
import { snakeToCamelCase } from '../../utils/common';
import { isError } from '../../global/types';
import { Chat, RawChat } from './types';
import UserService from '../../services/userService';
import { User } from '../profile/types';

export class ChatsController {
  chatsService: ChatsService;
  userService: UserService;

  constructor() {
    this.chatsService = new ChatsService();
    this.userService = new UserService();
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

  async getUserInfo() {
    let user = {};
    try {
      const res = await this.userService.getUserInfo();
      user = JSON.parse(res.response);
    } catch (error) {
      if (isError(error)) {
        throw new Error(error.message);
      }
    }
    return (snakeToCamelCase(user) as User);
  }
}
