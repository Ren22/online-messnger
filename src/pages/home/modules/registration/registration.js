import Handlebars from 'handlebars';
import registration from './registration.tmpl';
import './registration.less'
import generateButton from '../../../../components/button/button'
import generateInpField from '../../../../components/inputField/inputField'

Handlebars.registerPartial('completeRegistration',
  generateButton('Complete registration'));
Handlebars.registerPartial('loginInputField',
  generateInpField('login', 'Login', 'Login'));
Handlebars.registerPartial('emailInputField', 
  generateInpField('email', 'Email', 'Email'));
Handlebars.registerPartial('nameInputField', 
  generateInpField('name', 'Name', 'Name'));  
Handlebars.registerPartial('surnameInputField', 
  generateInpField('surname', 'Surname', 'Surname'));
Handlebars.registerPartial('phoneInputField', 
  generateInpField('phone', 'Phone', 'Phone'));  
Handlebars.registerPartial('passwordInputField', 
  generateInpField('password', 'Password', 'Password', 'password'));
Handlebars.registerPartial('passwordAgainInputField', 
  generateInpField('passwordAgain', 'Password (again)', 'Password (again)', 'password'));
  
const compiled = Handlebars.compile(registration);

export default compiled({ firstname: 'John', lastname: 'Doe' });
