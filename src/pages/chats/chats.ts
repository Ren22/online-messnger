import { ChatList } from '../../components/chatList/index';
import notCompiledTemplate from './chats.tmpl';
import './chats.less';
import { RenderHelpers } from '../../baseClasses/RenderHelpers';
import ChatsListController from './chats.controller';
import { Block } from '../../baseClasses/Block';
import EventBus from '../../baseClasses/EventBus';
import { Conversation } from '../../components/conversation/index';
import { Chat } from './types';

export class ChatsPage extends Block {
  chatList: ChatList;
  chatContacts: Chat[];
  controller: ChatsListController;
  constructor() {
    super('div', {}, true);
  }
  localEventBus: EventBus;
  conversation: Conversation;

  renderAfterChatSelection() {
    this.eventBus().emit('flow:render');
  }

  async componentDidMount() {
    this.controller = new ChatsListController();
    this.chatContacts = await this.controller.getChats();
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
    const templateHTML = rh.generateView(notCompiledTemplate,
      { isChatSelected: this.chatList.isChatSelected });
    return rh.replaceElementsInHTMLTemplate(templateHTML,
      [this.chatList, this.conversation],
    );
  }
}
