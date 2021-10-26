import View from '../baseClasses/View';
import LoginPage from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/index';
import { ChatsPage } from '../pages/chats/index';

type PageRouter = Record<string, View>

const pageRouter: PageRouter = {
  loginPage: new LoginPage(),
  registrationPage: new RegistrationPage(),
  chatsPage: new ChatsPage(),
};

export function navTo(pageToNavigate: string) {
  const root = document.querySelector('.app');
  if (root && pageToNavigate) {
    root.innerHTML = '';
    root.appendChild(pageRouter[pageToNavigate].render());
  }
}
