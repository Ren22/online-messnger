import notCompiledTemplate from './conversation.tmpl';
import './conversation.less';
import { InputField } from '../inputField/index';
import { Block } from '../../baseClasses/Block';
import { RenderHelpers } from '../../baseClasses/RenderHelpers';
import { noEmptyStringRule } from '../../global/regex';
import { Button } from '../button/index';
import { Form } from '../../global/types';
import { getFormData } from '../../utils/common';
import { ConversationController } from './conversation.controller';
import EventBus from '../../baseClasses/EventBus';

type ConversationProps = {
  userId?: number,
  chatId?: number,
  localEventBus: EventBus
}

const WSS_BASEURL = 'wss://ya-praktikum.tech/ws/chats';

export class Conversation extends Block {
  messageInputField: InputField;
  rh: RenderHelpers;
  submitMessageButton: Button;
  props: ConversationProps;
  controller: ConversationController;
  socket: WebSocket;

  constructor(props: ConversationProps) {
    super('div', props);
  }

  componentDidMount() {
    this.messageInputField = new InputField({
      inputFieldPlaceholder: 'Message',
      inputFieldType: 'text',
      inputFieldInternalName: 'Message',
      inpFieldStyle: 'form-conversation__inputfield_style_default',
      mediumMarginHorizontally: true,
      validation: noEmptyStringRule,
      isLabelEnabled: false,
    });
    this.submitMessageButton = new Button({
      buttonStyle: 'button_style_round-arrow-right',
      events: {
        click: this.onClickSubmitMessage.bind(this),
      },
    });
    this.controller = new ConversationController();
  }

  onClickSubmitMessage() {
    const { conversationForm } = document.forms as Form;
    getFormData(conversationForm);
    this.messageInputField.validateInputField();
    const isValidationPassed = this.messageInputField.getIsInputFieldValid();
    if (isValidationPassed) {
      this.socket.send(JSON.stringify({
        content: this.messageInputField.getInputFieldValue(),
        type: 'message',
      }));
      this.props.localEventBus.emit('onNewMessage');
    }
  }

  async initializeSocketConnection() {
    if (this.props.chatId && this.props.userId) {
      const wsToken = await this.controller.getChatWSToken(this.props.chatId);
      if (!wsToken) {
        throw new Error('no WS token!');
      }
      this.socket = new WebSocket(`${WSS_BASEURL}/${this.props.userId}/${this.props.chatId}/${wsToken}`);
      this.socket.addEventListener('open', () => {
        console.log('Соединение установлено');
      });
      this.socket.addEventListener('message', (event) => {
        console.log('Получены данные', event.data);
      });
      this.socket.addEventListener('close', (event) => {
        if (event.wasClean) {
          console.log('Соединение закрыто чисто');
        } else {
          console.log('Обрыв соединения');
        }
        console.log(`Код: ${event.code} | Причина: ${event.reason}`);
      });
    }
  }

  async componentDidUpdate() {
    await this.initializeSocketConnection();
  }

  render() {
    this.rh.registerPartial('messageInputField', this.messageInputField.renderAsHTMLString());
    this.rh.registerPartial('submitMessageButton', this.submitMessageButton.renderAsHTMLString());
    const templateHTML = this.rh.generateView(notCompiledTemplate);
    return this.rh.replaceElementsInHTMLTemplate(templateHTML,
      [this.messageInputField, this.submitMessageButton],
    );
  }
}
