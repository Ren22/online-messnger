import notCompiledTemplate from './chatContact.tmpl';
import './chatContact.less';
import { Block } from '../../baseClasses/Block';
import { CallBack } from '../../global/types';
import { Chat } from '../../pages/chats/types';

// todo: centraliz handlebars import from Block.ts
const Handlebars = require('handlebars');

interface ChatContactProps extends Chat {
  isHighlighted: boolean;
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
  lastMsgData: LastMsgData;
  lastMsgTime: string;
  props: ChatContactProps;

  constructor(props: ChatContactProps) {
    super('div', props);
  }

  getChatId() {
    return this.props.id;
  }

  componentDidMount() {
    this.lastMsgTime = new Date(this.lastMsgData?.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  render() {
    const template = Handlebars.compile(notCompiledTemplate);
    const templateHTML = template({
      firstName: this.props.lastMessage?.user.firstName,
      secondName: this.props.lastMessage?.user.secondName,
      content: this.props.lastMessage?.content,
      time: this.lastMsgTime,
      isHighlighted: this.props.isHighlighted,
    });
    return this.rh.convertHTMLToDOM(templateHTML);
  }
}
