import Handlebars from 'handlebars';
import registration from './registration.tmpl';
import './registration.less';
import { generateButton } from '../../../../components/button/index';
import { generateInpField } from '../inputField/index';

Handlebars.registerPartial('completeRegistration',
  generateButton('navToChats', 'Complete registration'));
Handlebars.registerPartial('loginInputFieldReg',
  generateInpField(
    'login',
    'Login',
    'Login',
    '',
    '',
    'registrationInputFieldStyle',
    'registrationLabelStyle',
  ));
Handlebars.registerPartial('emailInputFieldReg',
  generateInpField(
    'email',
    'Email',
    'Email',
    '',
    '',
    'registrationInputFieldStyle',
    'registrationLabelStyle',
  ));
Handlebars.registerPartial('nameInputFieldReg',
  generateInpField(
    'name',
    'Name',
    'Name',
    '',
    '',
    'registrationInputFieldStyle',
    'registrationLabelStyle',
  ));
Handlebars.registerPartial('surnameInputFieldReg',
  generateInpField(
    'surname',
    'Surname',
    'Surname',
    '',
    '',
    'registrationInputFieldStyle',
    'registrationLabelStyle',
  ));
Handlebars.registerPartial('phoneInputFieldReg',
  generateInpField(
    'phone',
    'Phone',
    'Phone',
    '',
    '',
    'registrationInputFieldStyle',
    'registrationLabelStyle',
  ));
Handlebars.registerPartial('passwordInputFieldReg',
  generateInpField(
    'password',
    'Password',
    'Password',
    'password',
    '',
    'registrationInputFieldStyle',
    'registrationLabelStyle',
  ));
Handlebars.registerPartial('passwordAgainInputFieldReg',
  generateInpField(
    'passwordAgain',
    'Password (again)',
    'Password (again)',
    'password',
    '',
    'registrationInputFieldStyle',
    'registrationLabelStyle',
  ));

const template = Handlebars.compile(registration);

export default () => template({});
