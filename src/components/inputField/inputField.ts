import notRenderedTemplate from './inputField.tmpl';
import './inputField.less';
import { Block } from '../../baseClasses/Block';

const Handlebars = require('handlebars');

type InputFieldProps = {
  inputFieldId: string,
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
  validationRegex?: RegExp[]
}

export class InputField extends Block {
  constructor(props: InputFieldProps) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(notRenderedTemplate);
    return template({
      inputFieldId: this.props.inputFieldId,
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
    });
  }
}
