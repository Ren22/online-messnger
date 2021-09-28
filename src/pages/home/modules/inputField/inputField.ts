import inputField from './inputField.tmpl';
import Handlebars from 'handlebars';
import './inputField.less'

const template = Handlebars.compile(inputField);

export default (
  inputFieldId: string,
  inputFieldText: string,
  inputFieldPlaceholder='', 
  inputFieldType='text',
  inputFieldValue = ''
) => template(
  { 
    inputFieldId: inputFieldId,
    inputFieldText: inputFieldText,
    inputFieldPlaceholder: inputFieldPlaceholder,
    inputFieldType: inputFieldType,
    inputFieldValue: inputFieldValue
  }
)