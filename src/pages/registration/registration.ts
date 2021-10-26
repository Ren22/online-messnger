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
      buttonText: 'Complete registration',
    });
    this.loginInputField = new InputField({
      inputFieldText: 'Login',
      inputFieldPlaceholder: 'Login',
      inpFieldStyle: 'registrationInputFieldStyle',
      labelStyle: 'registrationLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
    });
    this.emailInputField = new InputField({
      inputFieldText: 'Email',
      inputFieldPlaceholder: 'Email',
      inpFieldStyle: 'registrationInputFieldStyle',
      labelStyle: 'registrationLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
    });
    this.nameInputField = new InputField({
      inputFieldText: 'Name',
      inputFieldPlaceholder: 'Name',
      inpFieldStyle: 'registrationInputFieldStyle',
      labelStyle: 'registrationLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
    });
    this.surnameInputField = new InputField({
      inputFieldText: 'Surname',
      inputFieldPlaceholder: 'Surname',
      inpFieldStyle: 'registrationInputFieldStyle',
      labelStyle: 'registrationLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
    });
    this.phoneInputField = new InputField({
      inputFieldText: 'Phone',
      inputFieldPlaceholder: 'Phone',
      inpFieldStyle: 'registrationInputFieldStyle',
      labelStyle: 'registrationLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
    });
    this.passwordInputField = new InputField({
      inputFieldText: 'Password',
      inputFieldPlaceholder: 'Password',
      inputFieldType: 'password',
      inpFieldStyle: 'registrationInputFieldStyle',
      labelStyle: 'registrationLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
    });
    this.passwordAgainInputField = new InputField({
      inputFieldText: 'Password',
      inputFieldPlaceholder: 'Password',
      inputFieldType: 'password',
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
    View.generateView(notCompiledTemplate);
    const templateHTML = View.generateView(notCompiledTemplate);
    const templateDOM = this.convertHTMLToDOM(templateHTML);
    return templateDOM;
  }
}
