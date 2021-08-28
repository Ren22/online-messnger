import Handlebars from 'handlebars';
import login from './login.tmpl';
import './login.less'
import generateButton from '../../../../components/button/button'
import generateLoginInpField from '../../../../components/inputField/inputField'

Handlebars.registerPartial('signInButton', 
  generateButton('Sign In'));
Handlebars.registerPartial('loginInputField', 
  generateLoginInpField('login', 'Login', 'Login'));
Handlebars.registerPartial('passwordInputField', 
  generateLoginInpField('password', 'Password', 'Password', 'password'));

const compiled = Handlebars.compile(login);

export default compiled();
