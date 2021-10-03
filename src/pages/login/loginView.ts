import Handlebars from 'handlebars';
import './login.less';
import { generateButton } from '../../components/button/index';
import { generateInpField } from '../../components/inputField/index';
import View from '../../baseClasses/View';

const notCompiledTemplate = `
<div class="container">
  <form class="loginForm">
    <div>
      <p class="form__header">Login</p>
      {{> loginInputField}}
      {{> passwordInputField}}
    </div>
    <div class="formBottom">
      {{> signInButton}}
      <p class="login__registrationText"><a id="navToRegistration">Registration</a></p>
    </div>
  </form>  
</div>
`;

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
