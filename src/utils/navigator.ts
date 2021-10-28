import LoginPage from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/index';
import { ChatsPage } from '../pages/chats/index';
import { ProfilePage } from '../pages/profile/index';
import { Block } from '../baseClasses/Block';

type PageRouter = Record<string, any>

const pageRouter: PageRouter = {
  loginPage: new LoginPage(),
  registrationPage: new RegistrationPage(),
  chatsPage: new ChatsPage(),
  profilePage: new ProfilePage(),
};

export function navTo(pageToNavigate: string) {
  const root = document.querySelector('.app');
  if (root && pageToNavigate) {
    root.innerHTML = '';
    root.appendChild(pageRouter[pageToNavigate].render());
  }
}
