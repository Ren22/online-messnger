import notCompiledTemplate from './registration.tmpl';
import { Button } from '../../components/button/index';
import './registration.less';
import { InputField } from '../../components/inputField/index';
import {
  loginRule, emailRule, nameRule, surnameRule, phoneRule, passwordRule,
} from '../../global/regex';
import { getFormData } from '../../utils/common';
import { Form } from '../../global/types';
import { navTo } from '../../utils/navigator';
import { Link } from '../../components/link/link';
import { RenderHelpers } from '../../baseClasses/RenderHelpers';
import { Block } from '../../baseClasses/Block';

export class RegistrationPage extends Block {
  notCompiledTemplate: string;
  button: Button;
  loginInputField: InputField;
  emailInputField: InputField;
  nameInputField: InputField;
  surnameInputField: InputField;
  phoneInputField: InputField;
  passwordInputField: InputField;
  passwordAgainInputField: InputField;
  isLoggedIn: boolean;
  linkToSignIn: Link;

  constructor() {
    super();
    this.isLoggedIn = false;
  }

  componentDidMount() {
    this.button = new Button({
      buttonText: 'Complete registration',
      events: {
        click: this.onClickCompleteRegistration.bind(this),
      },
    });
    this.loginInputField = new InputField({
      inputFieldText: 'Login',
      inputFieldPlaceholder: 'Login',
      inpFieldStyle: 'registrationInputFieldStyle',
      labelStyle: 'registrationLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
      validation: loginRule,
    });
    this.emailInputField = new InputField({
      inputFieldText: 'Email',
      inputFieldPlaceholder: 'Email',
      inpFieldStyle: 'registrationInputFieldStyle',
      labelStyle: 'registrationLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
      validation: emailRule,
    });
    this.nameInputField = new InputField({
      inputFieldText: 'Name',
      inputFieldPlaceholder: 'Name',
      inpFieldStyle: 'registrationInputFieldStyle',
      labelStyle: 'registrationLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
      validation: nameRule,
    });
    this.surnameInputField = new InputField({
      inputFieldText: 'Surname',
      inputFieldPlaceholder: 'Surname',
      inpFieldStyle: 'registrationInputFieldStyle',
      labelStyle: 'registrationLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
      validation: surnameRule,
    });
    this.phoneInputField = new InputField({
      inputFieldText: 'Phone',
      inputFieldPlaceholder: 'Phone',
      inpFieldStyle: 'registrationInputFieldStyle',
      labelStyle: 'registrationLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
      validation: phoneRule,
    });
    this.passwordInputField = new InputField({
      inputFieldText: 'Password',
      inputFieldPlaceholder: 'Password',
      inputFieldType: 'password',
      inpFieldStyle: 'registrationInputFieldStyle',
      labelStyle: 'registrationLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
      validation: passwordRule,
    });
    this.passwordAgainInputField = new InputField({
      inputFieldText: 'Password',
      inputFieldPlaceholder: 'Password',
      inputFieldType: 'password',
      inpFieldStyle: 'registrationInputFieldStyle',
      labelStyle: 'registrationLabelStyle',
      readOnly: false,
      mediumMarginHorizontally: true,
      validation: passwordRule,
    });
    this.linkToSignIn = new Link({
      linkText: 'Sign In',
      linkStyle: 'link-signin',
      events: {
        click: this.onClickLinkToSignIn.bind(this),
      },
    });
  }

  getAllInputFields() {
    return [
      this.loginInputField,
      this.emailInputField,
      this.nameInputField,
      this.surnameInputField,
      this.phoneInputField,
      this.passwordInputField,
      this.passwordAgainInputField,
    ];
  }

  onClickCompleteRegistration() {
    const { registrationForm } = document.forms as Form;
    getFormData(registrationForm);
    this.getAllInputFields().forEach((inpField) => {
      inpField.validateInputField();
    });
    const isValidationPassed = this.getAllInputFields()
      .map((inpField) => inpField.isInputFieldValid()).every((isValidField) => isValidField);
    if (isValidationPassed || this.isLoggedIn) {
      navTo('chatsPage');
    }
  }

  onClickLinkToSignIn() {
    navTo('loginPage');
  }

  render() {
    const rh = new RenderHelpers();
    rh.registerPartial('completeRegistration', this.button.renderAsHTMLString());
    rh.registerPartial('loginInputFieldReg', this.loginInputField.renderAsHTMLString());
    rh.registerPartial('emailInputFieldReg', this.emailInputField.renderAsHTMLString());
    rh.registerPartial('nameInputFieldReg', this.nameInputField.renderAsHTMLString());
    rh.registerPartial('surnameInputFieldReg', this.surnameInputField.renderAsHTMLString());
    rh.registerPartial('phoneInputFieldReg', this.phoneInputField.renderAsHTMLString());
    rh.registerPartial('passwordInputFieldReg', this.passwordInputField.renderAsHTMLString());
    rh.registerPartial('passwordAgainInputFieldReg', this.passwordAgainInputField.renderAsHTMLString());
    rh.registerPartial('linkToSignIn', this.linkToSignIn.renderAsHTMLString());
    const templateHTML = rh.generateView(notCompiledTemplate);
    return rh.replaceElementsInHTMLTemplate(templateHTML,
      [this.button, this.linkToSignIn, ...this.getAllInputFields()],
    );
  }
}
