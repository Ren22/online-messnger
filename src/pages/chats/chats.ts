import { ChatList } from '../../components/chatList/index';
import notCompiledTemplate from './chats.tmpl';
import './chats.less';
import { RenderHelpers } from '../../baseClasses/RenderHelpers';
import { Block } from '../../baseClasses/Block';
import EventBus from '../../baseClasses/EventBus';
import { Conversation } from '../../components/conversation/index';
import { Chat } from './types';
import { ChatsController } from './chats.controller';
import { ChatContact } from '../../components/chatContact/index';

export class ChatsPage extends Block {
  chatList: ChatList;
  chatContacts: Chat[];
  controller: ChatsController;
  localEventBus: EventBus;
  conversation: Conversation;
  selectedChat: Chat

  constructor() {
    super('div', {}, true);
  }

  chatIsSelected(...args: any[]) {
    const selectedChat = args[0][0] as ChatContact;
    this.chatList.setProps({
      selectedChat,
    });
  }

  async chatIsCreatedOrRemoved() {
    const updatedChatContacts = await this.controller.getChats();
    this.chatList.setProps({
      chatContacts: updatedChatContacts,
    });
  }

  async componentDidMount() {
    this.controller = new ChatsController();
    this.chatContacts = await this.controller.getChats();
    this.conversation = new Conversation();
    this.localEventBus = new EventBus();

    this.localEventBus.on('chatIsSelected', this.chatIsSelected.bind(this));
    this.localEventBus.on('chatIsCreated', this.chatIsCreatedOrRemoved.bind(this));
    this.localEventBus.on('chatIsRemoved', this.chatIsCreatedOrRemoved.bind(this));

    this.chatList = new ChatList({
      chatContacts: this.chatContacts,
      localEventBus: this.localEventBus,
    });
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
