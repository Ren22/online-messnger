import Handlebars from 'handlebars';
import './profile.less';
import { generateInpField } from './modules/inputField/index';
import View from '../../baseClasses/View';
import EventBus from '../../baseClasses/EventBus';
import ProfileController from './profileController';

const notCompiledTemplate = `
  <div class="profileContainer">
    <div class="profileContainer__navBack">
      <button id="navToChats" class="profileRoundButton">{{buttonText}}</button>
    </div>
    <div class="profileContainer__main">
      <div class="profileImage"></div>
      <div class="profileName">Ivan</div>
      <div class="profileInputFields">
        {{> emailInputFieldProfile}}
        {{> loginInputFieldProfile}}
        {{> nameInputFieldProfile}}
        {{> surnameInputFieldProfile}}
        {{> visibleNameInputFieldProfile}}
        {{> phoneInputFieldProfile}}
      </div>
      <div class="profileConfigs">
        <div>
          <span class="profileConfigs__changeUserSettings">Change user settings</span>
        </div>
        <div>
          <span class="profileConfigs__changePassword">Change password</span>
        </div>
        <div>
          <span class="profileConfigs__logout">Logout</span>
        </div>
      </div>
    </div>
  </div>
  `;

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
export default class ProfileView extends View {
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
