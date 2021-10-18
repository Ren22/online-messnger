import Handlebars from 'handlebars';
import notCompiledTemplate from './chatList.tmpl';
import './chatList.less';
import { Block } from '../../baseClasses/Block';
import { SearchField } from '../searchField/index';

export class ChatList extends Block {
  searchField: SearchField;

  constructor(props: Record <string, any>) {
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
