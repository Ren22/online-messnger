import './login.less';
import { Button } from '../../components/button/index';
import { generateInpField } from '../../components/inputField/index';
import View from '../../baseClasses/View';
import notCompiledTemplate from './login.tmpl';

export default class LoginPage extends View {
  login: string;
  password: string;
  button: Button;
  constructor() {
    super();
    this.login = '';
    this.password = '';
    this.button = new Button({
      buttonId: 'navToChats',
      buttonText: 'Sign In',
    });
  }

  render() {
    const readonly = false;
    const mediumMarginHorizontally = true;

    View.registerPartial('signInButton', this.button.render());
    View.registerPartial('loginInputField', generateInpField(
      'login',
      'Login',
      'Login',
      '',
      this.login,
      'loginInputFieldStyle',
      'loginLabelStyle',
      readonly,
      mediumMarginHorizontally,
    ));
    View.registerPartial('passwordInputField',
      generateInpField(
        'password',
        'Password',
        'Password',
        'password',
        this.password,
        'loginInputFieldStyle',
        'loginLabelStyle',
        readonly,
        mediumMarginHorizontally,
      ));
    return View.generateView(notCompiledTemplate);
  }
}
