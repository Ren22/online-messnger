import Handlebars from 'handlebars';
import notRenderedTemplate from './inputField.tmpl';
import './inputField.less';
import { Block } from '../../baseClasses/Block';

export class InputField extends Block {
  constructor(props: Record <string, any>) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(notRenderedTemplate);
    return template({
      inputFieldId: this.props.inputFieldId,
      inputFieldText: this.props.inputFieldText,
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
