import ChatsService from "../../services/chatsService";
import {isError} from "../../global/types";

export class ChatListController {
  chatService: ChatsService;
  constructor() {
    this.chatService = new ChatsService();
  }

  async createChat(title: string) {
    try {
      await this.chatService.createChat(title);
    } catch (error) {
      if (isError(error)) {
        throw new Error(error.message);
      }
    }
  }

  async removeChat(chatId: number) {
    try {
      await this.chatService.removeChat(chatId);
    } catch (error) {
      if (isError(error)) {
        throw new Error(error.message);
      }
    }
  }
}
