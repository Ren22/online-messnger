import './login.less';
import { Button } from '../../components/button/index';
import View from '../../baseClasses/View';
import notCompiledTemplate from './login.tmpl';
import { InputField } from '../../components/inputField/index';

export default class LoginPage extends View {
  login: string;
  password: string;
  button: Button;
  loginInputField: InputField;
  passwordInputField: InputField;

  constructor() {
    super();
    this.login = '';
    this.password = '';
    this.init();
  }

  init() {
    this.button = new Button({
      buttonId: 'navToChats',
      buttonText: 'Sign In',
    });
    this.loginInputField = new InputField({
      inputFieldId: 'login',
      inputFieldText: 'Login',
      inputFieldPlaceholder: 'Login',
      inpFieldStyle: 'loginInputFieldStyle',
      labelStyle: 'loginLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
    });
    this.passwordInputField = new InputField({
      inputFieldId: 'password',
      inputFieldText: 'Password',
      inputFieldPlaceholder: 'Password',
      inpFieldStyle: 'loginInputFieldStyle',
      labelStyle: 'loginLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
    });
  }
  render() {
    View.registerPartial('signInButton', this.button.render());
    View.registerPartial('loginInputField', this.loginInputField.render());
    View.registerPartial('passwordInputField', this.passwordInputField.render());
    return View.generateView(notCompiledTemplate);
  }
}
