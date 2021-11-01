import notCompiledTemplate from './chatContact.tmpl';
import './chatContact.less';
import { Block } from '../../baseClasses/Block';
import { CallBack } from '../../global/types';
import { RenderHelpers } from '../../baseClasses/RenderHelpers';
import { Chat } from '../../pages/chats/chats.controller';

const Handlebars = require('handlebars');

interface ChatContactProps extends Chat {
  index: number,
  events?: { [key: string]: CallBack },
}

export class ChatContact extends Block {
  constructor(props: ChatContactProps) {
    super('div', props);
  }

  render() {
    const rh = new RenderHelpers();
    const template = Handlebars.compile(notCompiledTemplate);
    const templateHTML = template({
      firstName: this.props.firstName,
      content: this.props.content,
      time: this.props.time,
    });
    return rh.convertHTMLToDOM(templateHTML);
  }
}
