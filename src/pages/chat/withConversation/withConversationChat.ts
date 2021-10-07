import Handlebars from 'handlebars';
import { ChatList } from '../../../components/chatList/index';
import chat from './withConversationChat.tmpl';
import './withConversationChat.less';
import { generateInpField } from '../../../components/inputField/index';

const chatList = new ChatList();
// Handlebars.registerPartial('chatContacts', ChatList.render());
Handlebars.registerPartial('messageInputField',
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

const template = Handlebars.compile(chat);

export default () => template({});
