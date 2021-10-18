import Handlebars from 'handlebars';
import notCompiledTemplate from './registration.tmpl';
import { Button } from '../../components/button/index';
import './registration.less';
import View from '../../baseClasses/View';
import { InputField } from '../../components/inputField/index';

export default class RegistrationPage extends View {
  notCompiledTemplate: string;
  button: Button;
  loginInputField: InputField;
  emailInputField: InputField;
  nameInputField: InputField;
  surnameInputField: InputField;
  phoneInputField: InputField;
  passwordInputField: InputField;
  passwordAgainInputField: InputField;

  constructor() {
    super();
    this.init();
  }

  init() {
    this.button = new Button({
      buttonId: 'navToChats',
      buttonText: 'Complete registration',
    });
    this.loginInputField = new InputField({
      inputFieldId: 'login',
      inputFieldText: 'Login',
      inputFieldPlaceholder: 'Login',
      inpFieldStyle: 'registrationInputFieldStyle',
      labelStyle: 'registrationLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
    });
    this.emailInputField = new InputField({
      inputFieldId: 'email',
      inputFieldText: 'Email',
      inputFieldPlaceholder: 'Email',
      inpFieldStyle: 'registrationInputFieldStyle',
      labelStyle: 'registrationLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
    });
    this.nameInputField = new InputField({
      inputFieldId: 'name',
      inputFieldText: 'Name',
      inputFieldPlaceholder: 'Name',
      inpFieldStyle: 'registrationInputFieldStyle',
      labelStyle: 'registrationLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
    });
    this.surnameInputField = new InputField({
      inputFieldId: 'surname',
      inputFieldText: 'Surname',
      inputFieldPlaceholder: 'Surname',
      inpFieldStyle: 'registrationInputFieldStyle',
      labelStyle: 'registrationLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
    });
    this.phoneInputField = new InputField({
      inputFieldId: 'phone',
      inputFieldText: 'Phone',
      inputFieldPlaceholder: 'Phone',
      inpFieldStyle: 'registrationInputFieldStyle',
      labelStyle: 'registrationLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
    });
    this.passwordInputField = new InputField({
      inputFieldId: 'password',
      inputFieldText: 'Password',
      inputFieldPlaceholder: 'Password',
      inpFieldStyle: 'registrationInputFieldStyle',
      labelStyle: 'registrationLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
    });
    this.passwordAgainInputField = new InputField({
      inputFieldId: 'password',
      inputFieldText: 'Password',
      inputFieldPlaceholder: 'Password',
      inpFieldStyle: 'registrationInputFieldStyle',
      labelStyle: 'registrationLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
    });
  }

  render() {
    View.registerPartial('completeRegistration', this.button.render());
    View.registerPartial('loginInputFieldReg', this.loginInputField.render());
    View.registerPartial('emailInputFieldReg', this.emailInputField.render());
    View.registerPartial('nameInputFieldReg', this.nameInputField.render());
    View.registerPartial('surnameInputFieldReg', this.surnameInputField.render());
    View.registerPartial('phoneInputFieldReg', this.phoneInputField.render());
    View.registerPartial('passwordInputFieldReg', this.passwordInputField.render());
    View.registerPartial('passwordAgainInputFieldReg', this.passwordAgainInputField.render());
    return View.generateView(notCompiledTemplate);
  }
}
