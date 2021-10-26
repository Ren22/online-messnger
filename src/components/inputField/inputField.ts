import notCompiledTemplate from './inputField.tmpl';
import './inputField.less';
import { Block } from '../../baseClasses/Block';
import { CallBack } from '../../global/types';

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
  _events: { [key: string]: CallBack }
  constructor(props: InputFieldProps) {
    super('div', props);
    this.validation = this.props.validation;
    this.isValid = this.props.isValid ?? false;
    this._events = {
      blur: this.handleBlur.bind(this),
      focus: this.handleFocus.bind(this),
    };
    this._addEventsToInputField();
  }

  private _addEventsToInputField() {
    Object.keys(this._events).forEach((eventName) => {
      this._getInputField().addEventListener(eventName, this._events[eventName]);
    });
  }

  handleBlur() {
    if (!this.isInputFieldValid()) {
      this.isValid = false;
      this.highlightInvalidInput();
    } else {
      this.isValid = true;
      this.resetHighlightedInput();
    }
  }

  handleFocus() {
    this.resetHighlightedInput();
  }

  validateInputField() {
    this._getInputField().dispatchEvent(new Event('blur'));
  }

  getValidationStatus() {
    return this.isValid;
  }

  isInputFieldValid() {
    return this.getValidationRule().test(this.getInputFieldValue());
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
    return templateHTML;
  }
}
