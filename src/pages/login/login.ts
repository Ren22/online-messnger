import './login.less';
import { Button } from '../../components/button/index';
import View from '../../baseClasses/View';
import notCompiledTemplate from './login.tmpl';
import { InputField } from '../../components/inputField/index';
import { loginRule, passwordRule } from '../../global/regex';
import { navTo } from '../../utils/navigator';
import { Link } from '../../components/link/index';
import { GenericObject } from '../../global/types';

interface LoginForm extends HTMLCollectionOf<HTMLFormElement>{
  loginForm: HTMLFormElement,
}

export default class LoginPage extends View {
  login: string;
  password: string;
  button: Button;
  loginInputField: InputField;
  passwordInputField: InputField;
  isLoggedIn: boolean;
  linkToRegistration: Link;

  constructor() {
    super();
    this.login = '';
    this.password = '';
    this.isLoggedIn = false;
    this.init();
  }

  init() {
    this.button = new Button({
      buttonText: 'Sign In',
      events: {
        click: this.onClickSignIn.bind(this),
      },
    });
    this.loginInputField = new InputField({
      inputFieldText: 'Login',
      inputFieldPlaceholder: 'Login',
      inpFieldStyle: 'loginInputFieldStyle',
      labelStyle: 'loginLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
      validation: loginRule,
    });
    this.passwordInputField = new InputField({
      inputFieldText: 'Password',
      inputFieldPlaceholder: 'Password',
      inputFieldType: 'password',
      inpFieldStyle: 'loginInputFieldStyle',
      labelStyle: 'loginLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
      validation: passwordRule,
    });
    this.linkToRegistration = new Link({
      linkText: 'Registration',
      linkStyle: 'login__registrationText',
      events: {
        click: this.onClickLinkToRegistration.bind(this),
      },
    });
  }

  getFormData() {
    const { loginForm } = document.forms as LoginForm;
    const loginFormData: FormData = new FormData(loginForm);
    const toShow = [...loginFormData.entries()].reduce((prev: GenericObject, [k, v]) => {
      prev[k] = v;
      return prev;
    }, {});
    // eslint-disable-next-line no-console
    console.log(toShow);
  }

  onClickSignIn() {
    this.getFormData();
    this.loginInputField.validateInputField();
    this.passwordInputField.validateInputField();
    const isValidationPassed = this.loginInputField.isInputFieldValid()
      && this.passwordInputField.isInputFieldValid();
    if (isValidationPassed || this.isLoggedIn) {
      navTo('chatsPage');
    }
  }

  onClickLinkToRegistration() {
    navTo('registrationPage');
  }

  render() {
    View.registerPartial('signInButton', this.button.renderAsHTMLString());
    View.registerPartial('loginInputField', this.loginInputField.renderAsHTMLString());
    View.registerPartial('passwordInputField', this.passwordInputField.renderAsHTMLString());
    View.registerPartial('linkToRegistration', this.linkToRegistration.renderAsHTMLString());
    const templateHTML = View.generateView(notCompiledTemplate);
    return this.replaceElementsInHTMLTemplate(templateHTML,
      [this.button, this.loginInputField, this.passwordInputField, this.linkToRegistration],
    );
  }
}
