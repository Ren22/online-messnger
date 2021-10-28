import { ChatList } from '../../components/chatList/index';
import notCompiledTemplate from './conversation.tmpl';
import './conversation.less';
import View from '../../baseClasses/RenderHelpers';
import ChatsListController, { Chat } from '../chats/chats.controller';
import { InputField } from '../../components/inputField/index';

export default class chatsPageChatsPage extends View {
  chatList: ChatList;
  chatContacts: Chat[];
  emailInputField: InputField;
  constructor() {
    super();
    this.chatContacts = ChatsListController.getChatsData();
    this.chatList = new ChatList({ chatContacts: this.chatContacts });
    this.init();
  }

  init() {
    this.emailInputField = new InputField({
      inputFieldPlaceholder: 'Message',
      inputFieldType: 'text',
      inpFieldStyle: 'chatWindowBottom__inputField-defaultStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
    });
  }

  render() {
    View.registerPartial('messageInputField', this.emailInputField.render());
    View.registerPartial('chatsList', this.chatList.render());
    return View.generateView(notCompiledTemplate);
  }
}
