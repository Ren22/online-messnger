import Handlebars from 'handlebars';
import profile from './profile.tmpl';
import './profile.less';
import { generateInpField } from './modules/inputField/index.js'

Handlebars.registerPartial('emailInputFieldProfile',
  generateInpField('email', 'Email', '', 'text', 'pochta@yandex.ru'));
Handlebars.registerPartial('loginInputFieldProfile',
  generateInpField('login', 'Login', '', 'text', 'ivanivanov'));
Handlebars.registerPartial('nameInputFieldProfile',
  generateInpField('name', 'Name', '', 'text', 'Ivan'));
Handlebars.registerPartial('surnameInputFieldProfile',
  generateInpField('surname', 'Surname', '', 'text', 'Ivanov'));
Handlebars.registerPartial('visibleNameInputFieldProfile',
  generateInpField('visibleName', 'Visible Name', '', 'text', 'Ivan'));
Handlebars.registerPartial('phoneInputFieldProfile',
  generateInpField('phone', 'Phone', '', 'text', '+7 (909) 967 30 30'));

const template = Handlebars.compile(profile);

export default () => template();