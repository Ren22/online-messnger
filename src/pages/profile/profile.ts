import './profile.less';
// import { generateInpField } from './modules/inputField/index';
import View from '../../baseClasses/View';
import EventBus from '../../baseClasses/EventBus';
import ProfileController from './profile.controller';
import notCompiledTemplate from './profile.tmpl';
import { generateInpField } from '../../components/inputField/index';

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

  constructor() {
    super();
    this.controller = new ProfileController();
    this.user = ProfileController.getProfileData();
  }

  render() {
    View.registerPartial('emailInputFieldProfile',
      generateInpField(
        'email',
        'Email',
        '',
        'text',
        this.user.email,
        'profileInputField',
        'profileInputFieldLabel',
        true,
        false,
        false,
        true,
      ));
    View.registerPartial('loginInputFieldProfile',
      generateInpField(
        'login',
        'Login',
        '',
        'text',
        this.user.login,
        'profileInputField',
        'profileInputFieldLabel',
        true,
        false,
        false,
        true,
      ));
    View.registerPartial('nameInputFieldProfile',
      generateInpField(
        'name',
        'Name',
        '',
        'text',
        this.user.firstName,
        'profileInputField',
        'profileInputFieldLabel',
        true,
        false,
        false,
        true,
      ));
    View.registerPartial('surnameInputFieldProfile',
      generateInpField(
        'surname',
        'Surname',
        '',
        'text',
        this.user.secondName,
        'profileInputField',
        'profileInputFieldLabel',
        true,
        false,
        false,
        true,
      ));
    View.registerPartial('visibleNameInputFieldProfile',
      generateInpField(
        'visibleName',
        'Visible Name',
        '',
        'text',
        this.user.displayName,
        'profileInputField',
        'profileInputFieldLabel',
        true,
        false,
        false,
        true,
      ));
    View.registerPartial('phoneInputFieldProfile',
      generateInpField(
        'phone',
        'Phone',
        '',
        'text',
        this.user.phone,
        'profileInputField',
        'profileInputFieldLabel',
        true,
        false,
        false,
        true,
      ));
    return View.generateView(notCompiledTemplate);
  }
}
