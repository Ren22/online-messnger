import ChatsService from '../../services/chatsService';
import { isError, CallBack } from '../../global/types';
import UserService from '../../services/userService';
import { snakeToCamelCase } from '../../utils/common';
import { User } from '../../pages/profile/types';

export class ConversationController {
  chatsService: ChatsService;
  userService: UserService;

  constructor() {
    this.chatsService = new ChatsService();
    this.userService = new UserService();
  }

  async createWSconnection(chatId: number, userId: number, cb: CallBack) {
    let webSocket;
    try {
      const res = await this.chatsService.getChatWSToken(chatId);
      const wsToken = JSON.parse(res.responseText).token;
      if (wsToken) {
        webSocket = await this.chatsService.createWSconnection(chatId, userId, wsToken, cb);
      }
    } catch (error) {
      if (isError(error)) {
        throw new Error(error.message);
      }
    }
    return webSocket;
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
