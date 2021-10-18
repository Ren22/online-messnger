import Handlebars from 'handlebars';
import notCompiledTemplate from './chatList.tmpl';
import './chatList.less';
import { generateSearchField } from '../searchField/index';
import { Block } from '../../baseClasses/Block';

export class ChatList extends Block {
  constructor(props: Record <string, any>) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(notCompiledTemplate);
    Handlebars.registerPartial('searchField', generateSearchField());
    return template({
      chatContacts: this.props.chatContacts,
    });
  }
}
