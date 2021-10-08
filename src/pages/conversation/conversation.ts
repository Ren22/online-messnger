import Handlebars from 'handlebars';
import { ChatList } from '../../components/chatList/index';
import notCompiledTemplate from './conversation.tmpl';
import './conversation.less';
import { generateInpField } from '../../components/inputField/index';
import View from '../../baseClasses/View';
import ChatsListController from '../chats/chats.controller';

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

View.registerPartial('messageInputField',
  generateInpField(
    'message',
    '',
    'Message',
    'message',
    '',
    'chatWindowBottom__inputField-defaultStyle',
    '',
    false,
    true,
  ));

export default class chatsPageChatsPage extends View {
  chatList: ChatList;
  chatContacts: Chat[];
  constructor() {
    super();
    this.chatContacts = ChatsListController.getChatsData();
    this.chatList = new ChatList(this.chatContacts);
  }
  render() {
    View.registerPartial('messageInputField',
      generateInpField(
        'message',
        '',
        'Message',
        'message',
        '',
        'chatWindowBottom__inputField-defaultStyle',
        '',
        false,
        true,
      ));
    View.registerPartial('chatsList', this.chatList.render());
    return View.generateView(notCompiledTemplate);
  }
}
