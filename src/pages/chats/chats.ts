import { ChatList } from '../../components/chatList/index';
import notCompiledTemplate from './chats.tmpl';
import './chats.less';
import { RenderHelpers } from '../../baseClasses/RenderHelpers';
import ChatsListController, { Chat } from './chats.controller';
import { Block } from '../../baseClasses/Block';
import EventBus from '../../baseClasses/EventBus';
import { Conversation } from '../../components/conversation/index';

export class ChatsPage extends Block {
  chatList: ChatList;
  chatContacts: Chat[];
  constructor() {
    super('div', {}, true);
  }
  localEventBus: EventBus;
  conversation: Conversation;

  renderAfterChatSelection() {
    this.eventBus().emit('flow:render');
  }

  componentDidMount() {
    this.chatContacts = ChatsListController.getChatsData();
    this.localEventBus = new EventBus();
    this.localEventBus.on('chatIsSelected', this.renderAfterChatSelection.bind(this));
    this.chatList = new ChatList({
      chatContacts: this.chatContacts,
      localEventBus: this.localEventBus,
    });
    this.conversation = new Conversation();
  }

  render() {
    const rh = new RenderHelpers();
    rh.registerPartial('chatsList', this.chatList.renderAsHTMLString());
    rh.registerPartial('chat', this.conversation.renderAsHTMLString());
    rh.generateView(notCompiledTemplate);
    const templateHTML = rh.generateView(notCompiledTemplate,
      { isChatSelected: this.chatList.isChatSelected });
    return rh.replaceElementsInHTMLTemplate(templateHTML,
      [this.chatList, this.conversation],
    );
  }
}
