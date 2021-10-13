import './login.less';
import { generateButton } from '../../components/button/index';
import { generateInpField } from '../../components/inputField/index';
import View from '../../baseClasses/View';
import notCompiledTemplate from './login.tmpl';

export default class LoginPage extends View {
  login: string;
  password: string;
  constructor() {
    super();
    this.login = '';
    this.password = '';
  }

  render() {
    const readonly = false;
    const mediumMarginHorizontally = true;
    View.registerPartial('signInButton', generateButton('navToChats', 'Sign In'));
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
