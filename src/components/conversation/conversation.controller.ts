import ChatsService from '../../services/chatsService';
import { isError } from '../../global/types';

export class ConversationController {
  chatsService: ChatsService;
  constructor() {
    this.chatsService = new ChatsService();
  }

  async getChatWSToken(chatId: number) {
    let token: string | null = null;
    try {
      const res = await this.chatsService.getChatWSToken(chatId);
      token = JSON.parse(res.responseText).token;
    } catch (error) {
      if (isError(error)) {
        throw new Error(error.message);
      }
    }
    return token;
  }
}
