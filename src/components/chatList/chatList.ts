import notCompiledTemplate from './chatList.tmpl';
import './chatList.less';
import { Block } from '../../baseClasses/Block';
import { SearchField } from '../searchField/index';
import { Link } from '../link/index';
import { RenderHelpers } from '../../baseClasses/RenderHelpers';
import { ChatContact } from '../chatContact/index';
import EventBus from '../../baseClasses/EventBus';
import { Router } from '../../utils/router';
import { Chat } from '../../pages/chats/types';
import {ChatListController} from "./chatList.controller";

const Handlebars = require('handlebars');

type ChatListProps = {
  chatContacts: Chat[];
  localEventBus: EventBus;
}

export class ChatList extends Block {
  searchField: SearchField;
  linkToProfile: Link;
  chatContacts: ChatContact[];
  rh: RenderHelpers;
  isChatSelected: boolean;
  selectedChat: number | null;
  localEventBus: EventBus;
  router: Router;
  linkToCreateNewChat: Link;
  linkToRemoveChat: Link;
  controller: ChatListController;

  constructor(props: ChatListProps) {
    super('div', props);
    this.isChatSelected = false;
    this.selectedChat = null;
    this.localEventBus = this.props.localEventBus;
    this.router = new Router();
    this.controller = new ChatListController();
  }

  componentDidMount() {
    this.searchField = new SearchField();
    this.linkToProfile = new Link({
      linkText: 'Profile',
      linkStyle: 'chatlist__link_profile',
      events: {
        click: this.onClickLinkToProfile.bind(this),
      },
    });
    this.linkToCreateNewChat = new Link({
      linkText: 'New chat',
      linkStyle: 'chatlist__link_new-chat',
      events: {
        click: this.onClickLinkToCreateChat.bind(this),
      },
    });
    this.linkToRemoveChat = new Link({
      linkText: 'Remove chat',
      linkStyle: 'chatlist__link_remove-chat',
      events: {
        click: this.onClickLinkToProfile.bind(this),
      },
    });
    this.rh = new RenderHelpers();
    this.chatContacts = this.buildChatContacts();
  }

  onClickLinkToProfile() {
    this.router.go('/settings');
  }

  async onClickLinkToCreateChat() {
    // todo: introduce a pop up component for new chat's name
    await this.controller.createChat('randomName');
    this.router.go('/messenger');
  }

  onClickChatContact() {
    this.isChatSelected = true;
    this.localEventBus.emit('chatIsSelected');
  }

  buildChatContacts() {
    const chatContacts: ChatContact[] = [];
    this.props.chatContacts.forEach((chat: Chat, index: number) => {
      const chatContact = new ChatContact({
        ...chat,
        index,
        events: {
          click: this.onClickChatContact.bind(this),
        },
      });
      chatContacts.push(chatContact);
    });
    return chatContacts;
  }

  render() {
    Handlebars.registerPartial('searchField', this.searchField.renderAsHTMLString());
    Handlebars.registerPartial('linkToProfile', this.linkToProfile.renderAsHTMLString());
    Handlebars.registerPartial('linkToCreateNewChat', this.linkToCreateNewChat.renderAsHTMLString());
    Handlebars.registerPartial('linkToRemoveChat', this.linkToRemoveChat.renderAsHTMLString());
    Handlebars.registerPartial('chatContacts', this.chatContacts
      .map((chatContact: ChatContact) => chatContact.renderAsHTMLString())
      .join());
    const template = Handlebars.compile(notCompiledTemplate);
    const templateHTML = template({ chatContacts: this.props.chatContacts });
    return this.rh.replaceElementsInHTMLTemplate(templateHTML,
      [this.searchField, this.linkToProfile, ...this.chatContacts, this.linkToCreateNewChat, this.linkToRemoveChat],
    );
  }
}
