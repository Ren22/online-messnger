import notCompiledTemplate from './conversation.tmpl';
import './conversation.less';
import { InputField } from '../inputField/index';
import { Block } from '../../baseClasses/Block';
import { RenderHelpers } from '../../baseClasses/RenderHelpers';
import { noEmptyStringRule } from '../../global/regex';
import { Button } from '../button/index';
import { Form } from '../../global/types';
import { getFormData } from '../../utils/common';

export class Conversation extends Block {
  messageInputField: InputField;
  rh: RenderHelpers;
  submitMessageButton: Button;
  constructor() {
    super('div');
  }

  componentDidMount() {
    this.messageInputField = new InputField({
      inputFieldPlaceholder: 'Message',
      inputFieldType: 'text',
      inputFieldText: 'Message',
      inpFieldStyle: 'chatWindowBottom__inputField-defaultStyle',
      mediumMarginHorizontally: true,
      validation: noEmptyStringRule,
      isLabelEnabled: false,
    });
    this.submitMessageButton = new Button({
      buttonStyle: 'roundButtonArrowRight',
      events: {
        click: this.onClickSubmitMessage.bind(this),
      },
    });
    this.rh = new RenderHelpers();
  }

  onClickSubmitMessage() {
    const { conversationForm } = document.forms as Form;
    getFormData(conversationForm);
    this.messageInputField.validateInputField();
    const isValidationPassed = this.messageInputField.getIsInputFieldValid();
    if (isValidationPassed) {
      // eslint-disable-next-line no-alert
      alert('This functionality is not implemented yet!');
    }
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
