import notCompiledTemplate from './chatList.tmpl';
import './chatList.less';
import { Block } from '../../baseClasses/Block';
import { SearchField } from '../searchField/index';
import { Chat } from '../../pages/chats/chats.controller';

const Handlebars = require('handlebars');

type ChatListProps = {
  chatContacts: Chat[];
}

export class ChatList extends Block {
  searchField: SearchField;

  constructor(props: ChatListProps) {
    super('div', props);
    this.init();
  }

  init() {
    this.searchField = new SearchField();
  }

  render() {
    const template = Handlebars.compile(notCompiledTemplate);
    Handlebars.registerPartial('searchField', this.searchField.render());
    return template({
      chatContacts: this.props.chatContacts,
    });
  }
}
