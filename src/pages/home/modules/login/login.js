import Handlebars from 'handlebars';
import login from './login.tmpl';
import './login.less'
import { generateButton } from '../../../../components/button/index'
import { generateInpField } from '../inputField/index'

Handlebars.registerPartial('signInButton', 
  generateButton('navToChats', 'Sign In'));
Handlebars.registerPartial('loginInputField', 
  generateInpField('login', 'Login', 'Login'));
Handlebars.registerPartial('passwordInputField', 
  generateInpField('password', 'Password', 'Password', 'password'));

const template = Handlebars.compile(login);

export default () => template();
