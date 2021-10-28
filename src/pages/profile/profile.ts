import './profile.less';
import { RenderHelpers } from '../../baseClasses/RenderHelpers';
import EventBus from '../../baseClasses/EventBus';
import ProfileController from './profile.controller';
import notCompiledTemplate from './profile.tmpl';
import { InputField } from '../../components/inputField/index';
import { Block } from '../../baseClasses/Block';
import { Text } from '../../components/text/index';
import { emailRule, loginRule, nameRule, phoneRule } from '../../global/regex';
import { Form } from '../../global/types';
import { getFormData } from '../../utils/common';
import { navTo } from '../../utils/navigator';

type User = {
  id: number,
  firstName: string,
  secondName: string,
  displayName: string,
  login: string,
  email: string,
  phone: string,
  avatar: string,
}
export class ProfilePage extends Block {
  user: User;
  bus: EventBus;
  controller: ProfileController;
  emailInputField: InputField;
  loginInputField: InputField;
  nameInputField: InputField;
  surnameInputField: InputField;
  visibleNameInputField: InputField;
  phoneInputField: InputField;
  changeUserSettingsText: Text;
  changePasswordText: Text;
  logoutText: Text;

  constructor() {
    super('div');
  }

  componentDidMount() {
    this.controller = new ProfileController();
    this.user = this.controller.getProfileData();
    this.emailInputField = new InputField({
      inputFieldText: 'Email',
      inputFieldPlaceholder: '',
      inputFieldType: 'text',
      inputFieldValue: this.user.email,
      inpFieldStyle: 'profileInputField',
      labelStyle: 'profileInputFieldLabel',
      mediumMarginHorizontally: false,
      vbox: false,
      justifyContentSpaceBetween: true,
      validation: emailRule,
    });

    this.loginInputField = new InputField({
      inputFieldText: 'Login',
      inputFieldPlaceholder: '',
      inputFieldType: 'text',
      inputFieldValue: this.user.login,
      inpFieldStyle: 'profileInputField',
      labelStyle: 'profileInputFieldLabel',
      mediumMarginHorizontally: false,
      vbox: false,
      justifyContentSpaceBetween: true,
      validation: loginRule,
    });

    this.nameInputField = new InputField({
      inputFieldText: 'Name',
      inputFieldPlaceholder: '',
      inputFieldType: 'text',
      inputFieldValue: this.user.firstName,
      inpFieldStyle: 'profileInputField',
      labelStyle: 'profileInputFieldLabel',
      mediumMarginHorizontally: false,
      vbox: false,
      justifyContentSpaceBetween: true,
      validation: nameRule,
    });

    this.surnameInputField = new InputField({
      inputFieldText: 'Surname',
      inputFieldPlaceholder: '',
      inputFieldType: 'text',
      inputFieldValue: this.user.secondName,
      inpFieldStyle: 'profileInputField',
      labelStyle: 'profileInputFieldLabel',
      mediumMarginHorizontally: false,
      vbox: false,
      justifyContentSpaceBetween: true,
      validation: nameRule,
    });

    this.visibleNameInputField = new InputField({
      inputFieldText: 'Visible Name',
      inputFieldPlaceholder: '',
      inputFieldType: 'text',
      inputFieldValue: this.user.displayName,
      inpFieldStyle: 'profileInputField',
      labelStyle: 'profileInputFieldLabel',
      mediumMarginHorizontally: false,
      vbox: false,
      justifyContentSpaceBetween: true,
      validation: nameRule,
    });

    this.phoneInputField = new InputField({
      inputFieldText: 'Phone',
      inputFieldPlaceholder: '',
      inputFieldType: 'text',
      inputFieldValue: this.user.phone,
      inpFieldStyle: 'profileInputField',
      labelStyle: 'profileInputFieldLabel',
      mediumMarginHorizontally: false,
      vbox: false,
      justifyContentSpaceBetween: true,
      validation: phoneRule,
    });
    this.changeUserSettingsText = new Text({
      textStyle: 'profileConfigs__changeUserSettings',
      text: 'Change user settings',
      events: {
        click: this.onClickChangeUserSettings.bind(this),
      },
    });
    this.changePasswordText = new Text({
      textStyle: 'profileConfigs__changePassword',
      text: 'Change password',
      // events: {
      //   click: this.onClickSignIn.bind(this),
      // },
    });
    this.logoutText = new Text({
      textStyle: 'profileConfigs__logout',
      text: 'Logout',
      // events: {
      //   click: this.onClickSignIn.bind(this),
      // },
    });
  }

  onClickChangeUserSettings() {
    const { profileForm } = document.forms as Form;
    getFormData(profileForm);
    this.getAllInputFields().forEach((inpField) => {
      inpField.validateInputField();
    });
    const isValidationPassed = this.getAllInputFields()
      .map((inpField) => inpField.getIsInputFieldValid()).every((isValidField) => isValidField);
    if (isValidationPassed) {
      navTo('loginPage');
    }
  }

  getAllInputFields() {
    return [
      this.emailInputField,
      this.loginInputField,
      this.nameInputField,
      this.surnameInputField,
      this.visibleNameInputField,
      this.phoneInputField,
    ];
  }

  getAllText() {
    return [
      this.changeUserSettingsText,
      this.changePasswordText,
      this.logoutText,
    ];
  }

  render() {
    const rh = new RenderHelpers();
    rh.registerPartial('emailInputField', this.emailInputField.renderAsHTMLString());
    rh.registerPartial('loginInputField', this.loginInputField.renderAsHTMLString());
    rh.registerPartial('nameInputField', this.nameInputField.renderAsHTMLString());
    rh.registerPartial('surnameInputField', this.surnameInputField.renderAsHTMLString());
    rh.registerPartial('visibleNameInputField', this.visibleNameInputField.renderAsHTMLString());
    rh.registerPartial('phoneInputField', this.phoneInputField.renderAsHTMLString());
    rh.registerPartial('changeUserSettingsText', this.changeUserSettingsText.renderAsHTMLString());
    rh.registerPartial('changePasswordText', this.changePasswordText.renderAsHTMLString());
    rh.registerPartial('logoutText', this.logoutText.renderAsHTMLString());
    const templateHTML = rh.generateView(notCompiledTemplate);
    return rh.replaceElementsInHTMLTemplate(templateHTML,
      [...this.getAllInputFields(), ...this.getAllText()],
    );
  }
}
