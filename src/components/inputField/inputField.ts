import notCompiledTemplate from './inputField.tmpl';
import './inputField.less';
import { Block } from '../../baseClasses/Block';
import { CallBack } from '../../global/types';
import { RenderHelpers } from '../../baseClasses/RenderHelpers';

const Handlebars = require('handlebars');

type InputFieldProps = {
  inputFieldText?: string,
  inputFieldPlaceholder?: string,
  inputFieldType?: string,
  inputFieldValue?: string,
  inpFieldStyle?: string,
  labelStyle?: string,
  readOnly?: boolean,
  mediumMarginHorizontally?: boolean,
  vbox?: boolean,
  justifyContentSpaceBetween?: boolean,
  validation?: { regex: RegExp, validationMessage: string },
  isValid?: false
}

export class InputField extends Block {
  validation: { regex: RegExp, validationMessage: string };
  id: string;
  isValid: boolean;
  value: string;
  constructor(props: InputFieldProps) {
    super('div', props);
    this.validation = this.props.validation;
    this.isValid = this.props.isValid ?? false;
  }

  componentDidMount() {
    this._addEventsToInputField({
      blur: this.handleBlur.bind(this),
      focus: this.handleFocus.bind(this),
    });
  }

  private _addEventsToInputField(events: { [key: string]: CallBack }) {
    Object.keys(events).forEach((eventName) => {
      this.getElement().addEventListener(eventName, events[eventName], true);
    });
  }

  handleBlur() {
    const inpFieldVal = this.getInputFieldValue();
    if (!this.isInputFieldValid(inpFieldVal)) {
      this.isValid = false;
      this.setProps({
        isValid: false,
        inputFieldValue: inpFieldVal,
      });
      this.highlightInvalidInput();
    } else {
      this.isValid = true;
      this.setProps({
        isValid: true,
        inputFieldValue: inpFieldVal,
      });
      this.resetHighlightedInput();
    }
  }

  handleFocus() {
    this.resetHighlightedInput();
  }

  validateInputField() {
    this._getInputField().dispatchEvent(new Event('blur'));
  }

  getIsInputFieldValid() {
    return this.isValid;
  }

  isInputFieldValid(inpFieldValue: string) {
    if (!this.validation) {
      return true;
    }
    return this.validation.regex.test(inpFieldValue);
  }

  getInputFieldValue() {
    return (this._getInputField() as HTMLInputElement).value;
  }

  getValidationRule() {
    return this.validation.regex;
  }

  private _getInputField() {
    return (this.getElement().querySelector('.inputField') as HTMLElement);
  }

  highlightInvalidInput() {
    this._getInputField().classList.add('invalidInputField');
    (this.getElement().querySelector('.error-message') as HTMLElement).innerText = this.validation.validationMessage;
  }

  resetHighlightedInput() {
    this._getInputField().classList.remove('invalidInputField');
    (this.getElement().querySelector('.error-message') as HTMLElement).innerText = '';
  }

  render() {
    const rh = new RenderHelpers();
    const template = Handlebars.compile(notCompiledTemplate);
    const templateHTML = template({
      inputFieldText: this.props.inputFieldText ?? '',
      inputFieldPlaceholder: this.props.inputFieldPlaceholder ?? '',
      inputFieldType: this.props.inputFieldType ?? 'text',
      inputFieldValue: this.props.inputFieldValue ?? '',
      inpFieldStyle: this.props.inpFieldStyle ?? '',
      labelStyle: this.props.labelStyle ?? '',
      readOnly: this.props.readOnly ?? false,
      mediumMarginHorizontally: this.props.mediumMarginHorizontally ?? false,
      vbox: this.props.vbox ?? true,
      justifyContentSpaceBetween: this.props.justifyContentSpaceBetween ?? false,
      isValid: this.props.isValid,
      validationFailedMessage: this.validation?.validationMessage ?? '',
    });
    return rh.convertHTMLToDOM(templateHTML);
  }
}
