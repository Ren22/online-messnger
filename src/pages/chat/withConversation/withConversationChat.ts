import Handlebars from 'handlebars';
import { chatList } from '../modules/chatList/index';
import chat from './withConversationChat.tmpl';
import './withConversationChat.less';
import { generateInpField } from '../../../components/inputField/index';

Handlebars.registerPartial('chatsList', chatList());
Handlebars.registerPartial('messageInputField',
  generateInpField(
    'message',
    '',
    'Message',
    'message',
    '',
    'chatWindowBottom__inputField-defaultStyle',
  ));

const template = Handlebars.compile(chat);

export default () => template({});
