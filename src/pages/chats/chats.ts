import { ChatList } from '../../components/chatList/index';
import notCompiledTemplate from './chats.tmpl';
import './chats.less';
import { RenderHelpers } from '../../baseClasses/RenderHelpers';
import ChatsListController, { Chat } from './chats.controller';
import { Block } from '../../baseClasses/Block';

export class ChatsPage extends Block {
  chatList: ChatList;
  chatContacts: Chat[];
  constructor() {
    super('div');
  }

  componentDidMount() {
    this.chatContacts = ChatsListController.getChatsData();
    this.chatList = new ChatList({ chatContacts: this.chatContacts });
  }

  render() {
    const rh = new RenderHelpers();
    rh.registerPartial('chatsList', this.chatList.renderAsHTMLString());
    rh.generateView(notCompiledTemplate);
    const templateHTML = rh.generateView(notCompiledTemplate);
    return rh.replaceElementsInHTMLTemplate(templateHTML,
      [this.chatList],
    );
  }
}
