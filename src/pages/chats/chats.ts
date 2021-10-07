import Handlebars from 'handlebars';
import { ChatList } from '../../components/chatList/index';
import notCompiledTemplate from './chats.tmpl';
import './chats.less';
import View from '../../baseClasses/View';

export default class chatsPageChatsPage extends View {
  chatList: ChatList;
  constructor() {
    super();
    this.chatList = new ChatList();
  }
  render() {
    View.registerPartial('chatsList', this.chatList.render());
    return View.generateView(notCompiledTemplate);
  }
}
