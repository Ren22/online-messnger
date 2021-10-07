import Handlebars from 'handlebars';
import notCompiledTemplate from './chatList.tmpl';
import './chatList.less';
import { generateSearchField } from '../searchField/index';
import View from '../../baseClasses/View';
import ChatsListController from './chatList.controller';

type Chat = {
  id: number,
  title: string,
  avatar: string,
  unreadCount: number,
  firstName: string,
  secondName: string,
  time: string,
  content: string,
  // lastMessage: {
  //   user: {
  //     firstName: string,
  //     secondName: string,
  //     avatar: string,
  //     email: string,
  //     login: string,
  //     phone: string,
  //   },
  //   time: string,
  //   content: string,
  // },
}

export default class ChatList extends View {
  controller: ChatsListController;
  chatContacts: Chat[];

  constructor() {
    super();
    this.controller = new ChatsListController();
    this.chatContacts = ChatsListController.getChatsData();
  }

  render() {
    View.registerPartial('searchField', generateSearchField());
    return View.generateView(notCompiledTemplate, { chatContacts: this.chatContacts });
  }
}
