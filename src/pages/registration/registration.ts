import Handlebars from 'handlebars';
import notCompiledTemplate from './registration.tmpl';
import { Button } from '../../components/button/index';
import './registration.less';
import { generateInpField } from '../../components/inputField/index';
import View from '../../baseClasses/View';

export default class RegistrationPage extends View {
  notCompiledTemplate: string;
  button: Button;

  constructor() {
    super();
    this.button = new Button({
      buttonId: 'navToChats',
      buttonText: 'Complete registration',
    });
  }

  render() {
    const readonly = false;
    const mediumMarginHorizontally = true;
    View.registerPartial('completeRegistration', this.button.render());
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
