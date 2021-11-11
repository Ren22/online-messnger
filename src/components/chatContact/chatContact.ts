import notCompiledTemplate from './chatContact.tmpl';
import './chatContact.less';
import { Block } from '../../baseClasses/Block';
import { CallBack } from '../../global/types';
import { RenderHelpers } from '../../baseClasses/RenderHelpers';
import { Chat } from '../../pages/chats/types';

const Handlebars = require('handlebars');

interface ChatContactProps extends Chat {
  index: number,
  events?: { [key: string]: CallBack },
}

type LastMsgData = {
  user: {
      firstName: string;
      secondName: string;
      avatar: string;
      email: string;
      login: string;
      phone: string;
  };
  time: Date;
  content: string;
}

export class ChatContact extends Block {
  // Chatontact is a component to which data is feed from the chatList
  index: number;
  lastMsgData: LastMsgData;
  constructor(props: ChatContactProps) {
    super('div', props);
  }

  getIndex() {
    return this.getIndex;
  }

  componentDidMount() {
    this.index = this.props.index;
    this.lastMsgData = this.props.lastMessage;
  }

  render() {
    const rh = new RenderHelpers();
    const template = Handlebars.compile(notCompiledTemplate);

    const templateHTML = template({
      firstName: this.lastMsgData.user.firstName,
      secondName: this.lastMsgData.user.secondName,
      content: this.lastMsgData.content,
      time: new Date(this.lastMsgData.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });
    return rh.convertHTMLToDOM(templateHTML);
  }
}
