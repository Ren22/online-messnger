import LoginPage from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/index';
import { ChatsPage } from '../pages/chats/index';
import { ProfilePage } from '../pages/profile/index';
import ErrorPage from '../pages/error/error';

type PageRouter = Record<string, any>

const pageRouter: PageRouter = {
  loginPage: new LoginPage(),
  registrationPage: new RegistrationPage(),
  chatsPage: new ChatsPage(),
  profilePage: new ProfilePage(),
  page404: new ErrorPage({ errorCode: 404, desc: 'Sorry, but this page does not exist' }),
  page500: new ErrorPage({ errorCode: 500, desc: 'We are working to fix the problem!' }),
};

export function navTo(pageToNavigate: string) {
  const root = document.querySelector('.app');
  if (root && pageToNavigate) {
    root.innerHTML = '';
    root.appendChild(pageRouter[pageToNavigate].getElement());
  }
}
