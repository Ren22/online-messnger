import { ChatList } from '../../components/chatList/index';
import notCompiledTemplate from './chats.tmpl';
import './chats.less';
import { Block } from '../../baseClasses/Block';
import EventBus from '../../baseClasses/EventBus';
import { Conversation } from '../../components/conversation/index';
import { Chat } from './types';
import { ChatsController } from './chats.controller';
import { ChatContact } from '../../components/chatContact/index';
import { Link } from '../../components/link/index';

export class ChatsPage extends Block {
  chatList: ChatList;
  chatContacts: Chat[];
  controller: ChatsController;
  localEventBus: EventBus;
  conversation: Conversation;
  selectedChat: Chat;
  linkToRemoveChat: Link;

  constructor() {
    super('div', {}, true);
  }

  chatIsSelected(...args: any[]) {
    const selectedChat = args[0][0] as ChatContact;
    this.chatList.setProps({
      selectedChat,
    });
  }

  async chatIsCreated() {
    const updatedChatContacts = await this.controller.getChats();
    this.chatList.setProps({
      chatContacts: updatedChatContacts,
    });
  }

  async chatIsRemoved() {
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
    // this.localEventBus.on('chatIsCreated', this.chatIsCreated.bind(this));
    // this.localEventBus.on('chatIsRemoved', this.chatIsRemoved.bind(this));

    this.chatList = new ChatList({
      chatContacts: this.chatContacts,
      localEventBus: this.localEventBus,
    });
  }

  render() {
    this.rh.registerPartial('chatsList', this.chatList.renderAsHTMLString());
    this.rh.registerPartial('chat', this.conversation.renderAsHTMLString());
    const templateHTML = this.rh.generateView(notCompiledTemplate,
      { isChatSelected: this.chatList.isChatSelected });
    return this.rh.replaceElementsInHTMLTemplate(templateHTML,
      [this.chatList, this.conversation],
    );
  }
}
