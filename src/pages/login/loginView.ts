import './login.less';
import { generateButton } from '../../components/button/index';
import { generateInpField } from '../../components/inputField/index';
import View from '../../baseClasses/View';
import notCompiledTemplate from './login.tmpl';

export default class LoginView extends View {
  static getView() {
    super.registerPartial('signInButton', generateButton('navToChats', 'Sign In'));
    super.registerPartial('loginInputField', generateInpField(
      'login',
      'Login',
      'Login',
      '',
      '',
      'loginInputFieldStyle',
      'loginLabelStyle',
    ));
    super.registerPartial('passwordInputField',
      generateInpField(
        'password',
        'Password',
        'Password',
        'password',
        '',
        'loginInputFieldStyle',
        'loginLabelStyle',
      ));
    return super.generateView(notCompiledTemplate);
  }
}
