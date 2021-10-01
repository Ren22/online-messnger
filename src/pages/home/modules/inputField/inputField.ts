import Handlebars from 'handlebars';
import inputField from './inputField.tmpl';
import './inputField.less';

const template = Handlebars.compile(inputField);

export default (
  inputFieldId: string,
  inputFieldText: string,
  inputFieldPlaceholder = '',
  inputFieldType = 'text',
  inputFieldValue = '',
  inpFieldStyle = '',
  labelStyle = '',
) => template(
  {
    inputFieldId,
    inputFieldText,
    inputFieldPlaceholder,
    inputFieldType,
    inputFieldValue,
    inpFieldStyle,
    labelStyle,
  },
);
