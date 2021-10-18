import './profile.less';
import View from '../../baseClasses/View';
import EventBus from '../../baseClasses/EventBus';
import ProfileController from './profile.controller';
import notCompiledTemplate from './profile.tmpl';
import { InputField } from '../../components/inputField/index';

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
export default class ProfilePage extends View {
  user: User;
  bus: EventBus;
  controller: ProfileController;
  emailInputField: InputField;
  loginInputField: InputField;
  nameInputField: InputField;
  surnameInputField: InputField;
  visibleNameInputField: InputField;
  phoneInputField: InputField;

  constructor() {
    super();
    this.controller = new ProfileController();
    this.user = this.controller.getProfileData();
    this.init();
  }

  init() {
    this.emailInputField = new InputField({
      inputFieldId: 'email',
      inputFieldText: 'Email',
      inputFieldPlaceholder: '',
      inputFieldType: 'text',
      inputFieldValue: this.user.email,
      inpFieldStyle: 'profileInputField',
      labelStyle: 'profileInputFieldLabel',
      readOnly: true,
      mediumMarginHorizontally: false,
      vbox: false,
      justifyContentSpaceBetween: true,
    });

    this.loginInputField = new InputField({
      inputFieldId: 'login',
      inputFieldText: 'Login',
      inputFieldPlaceholder: '',
      inputFieldType: 'text',
      inputFieldValue: this.user.login,
      inpFieldStyle: 'profileInputField',
      labelStyle: 'profileInputFieldLabel',
      readOnly: true,
      mediumMarginHorizontally: false,
      vbox: false,
      justifyContentSpaceBetween: true,
    });

    this.nameInputField = new InputField({
      inputFieldId: 'name',
      inputFieldText: 'Name',
      inputFieldPlaceholder: '',
      inputFieldType: 'text',
      inputFieldValue: this.user.firstName,
      inpFieldStyle: 'profileInputField',
      labelStyle: 'profileInputFieldLabel',
      readOnly: true,
      mediumMarginHorizontally: false,
      vbox: false,
      justifyContentSpaceBetween: true,
    });

    this.surnameInputField = new InputField({
      inputFieldId: 'surname',
      inputFieldText: 'Surname',
      inputFieldPlaceholder: '',
      inputFieldType: 'text',
      inputFieldValue: this.user.secondName,
      inpFieldStyle: 'profileInputField',
      labelStyle: 'profileInputFieldLabel',
      readOnly: true,
      mediumMarginHorizontally: false,
      vbox: false,
      justifyContentSpaceBetween: true,
    });

    this.visibleNameInputField = new InputField({
      inputFieldId: 'visibleName',
      inputFieldText: 'Visible Name',
      inputFieldPlaceholder: '',
      inputFieldType: 'text',
      inputFieldValue: this.user.displayName,
      inpFieldStyle: 'profileInputField',
      labelStyle: 'profileInputFieldLabel',
      readOnly: true,
      mediumMarginHorizontally: false,
      vbox: false,
      justifyContentSpaceBetween: true,
    });

    this.phoneInputField = new InputField({
      inputFieldId: 'phone',
      inputFieldText: 'Phone',
      inputFieldPlaceholder: '',
      inputFieldType: 'text',
      inputFieldValue: this.user.displayName,
      inpFieldStyle: 'profileInputField',
      labelStyle: 'profileInputFieldLabel',
      readOnly: true,
      mediumMarginHorizontally: false,
      vbox: false,
      justifyContentSpaceBetween: true,
    });
  }

  render() {
    View.registerPartial('emailInputFieldProfile', this.emailInputField.render());
    View.registerPartial('loginInputFieldProfile', this.loginInputField.render());
    View.registerPartial('nameInputFieldProfile', this.nameInputField.render());
    View.registerPartial('surnameInputFieldProfile', this.surnameInputField.render());
    View.registerPartial('visibleNameInputFieldProfile', this.visibleNameInputField.render());
    View.registerPartial('phoneInputFieldProfile', this.phoneInputField.render());
    return View.generateView(notCompiledTemplate);
  }
}
