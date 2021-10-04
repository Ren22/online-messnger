import Handlebars from 'handlebars';
import notCompiledTemplate from './registration.tmpl';
import './registration.less';
import { generateButton } from '../../components/button/index';
import { generateInpField } from '../../components/inputField/index';
import View from '../../baseClasses/View';

export default class RegistrationPage extends View {
  notCompiledTemplate: string;

  static render() {
    const readonly = false;
    const mediumMarginHorizontally = true;
    View.registerPartial('completeRegistration',
      generateButton('navToChats', 'Complete registration'));
    View.registerPartial('loginInputFieldReg',
      generateInpField(
        'login',
        'Login',
        'Login',
        '',
        '',
        'registrationInputFieldStyle',
        'registrationLabelStyle',
        readonly,
        mediumMarginHorizontally,
      ));
    View.registerPartial('emailInputFieldReg',
      generateInpField(
        'email',
        'Email',
        'Email',
        '',
        '',
        'registrationInputFieldStyle',
        'registrationLabelStyle',
        readonly,
        mediumMarginHorizontally,
      ));
    View.registerPartial('nameInputFieldReg',
      generateInpField(
        'name',
        'Name',
        'Name',
        '',
        '',
        'registrationInputFieldStyle',
        'registrationLabelStyle',
        readonly,
        mediumMarginHorizontally,
      ));
    View.registerPartial('surnameInputFieldReg',
      generateInpField(
        'surname',
        'Surname',
        'Surname',
        '',
        '',
        'registrationInputFieldStyle',
        'registrationLabelStyle',
        readonly,
        mediumMarginHorizontally,
      ));
    View.registerPartial('phoneInputFieldReg',
      generateInpField(
        'phone',
        'Phone',
        'Phone',
        '',
        '',
        'registrationInputFieldStyle',
        'registrationLabelStyle',
        readonly,
        mediumMarginHorizontally,
      ));
    View.registerPartial('passwordInputFieldReg',
      generateInpField(
        'password',
        'Password',
        'Password',
        'password',
        '',
        'registrationInputFieldStyle',
        'registrationLabelStyle',
        readonly,
        mediumMarginHorizontally,
      ));
    View.registerPartial('passwordAgainInputFieldReg',
      generateInpField(
        'passwordAgain',
        'Password (again)',
        'Password (again)',
        'password',
        '',
        'registrationInputFieldStyle',
        'registrationLabelStyle',
        readonly,
        mediumMarginHorizontally,
      ));
    return View.generateView(notCompiledTemplate);
  }
}
