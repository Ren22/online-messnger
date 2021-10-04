import './profile.less';
import { generateInpField } from './modules/inputField/index';
import View from '../../baseClasses/View';
import EventBus from '../../baseClasses/EventBus';
import ProfileController from './profileController';
import notCompiledTemplate from './profile.tmpl';

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
      generateInpField('email', 'Email', '', 'text', this.user.email));
    View.registerPartial('loginInputFieldProfile',
      generateInpField('login', 'Login', '', 'text', this.user.login));
    View.registerPartial('nameInputFieldProfile',
      generateInpField('name', 'Name', '', 'text', this.user.firstName));
    View.registerPartial('surnameInputFieldProfile',
      generateInpField('surname', 'Surname', '', 'text', this.user.secondName));
    View.registerPartial('visibleNameInputFieldProfile',
      generateInpField('visibleName', 'Visible Name', '', 'text', this.user.displayName));
    View.registerPartial('phoneInputFieldProfile',
      generateInpField('phone', 'Phone', '', 'text', this.user.phone));
    return View.generateView(notCompiledTemplate);
  }
}
