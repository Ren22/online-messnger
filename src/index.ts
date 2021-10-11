// import { generateLoginModule } from './pages/home/modules/login/index';
import { ChatsPage } from './pages/chats/index';
import { ConversationPage } from './pages/conversation/index';
import { LoginView } from './pages/login';
import { ProfilePage } from './pages/profile/index';
import { RegistrationPage } from './pages/registration/index';
import { ErrorPage } from './pages/error/index';

const profileView = new ProfilePage();
const chatsPage = new ChatsPage();
const conversationPage = new ConversationPage();
const errorPage404 = new ErrorPage(404, 'Sorry, but this page does not exist :(');
const errorPage500 = new ErrorPage(500, 'We are working to fix the problem!');

function errorPageLoaded() {
  const navToChats = document.getElementById('navToChats');
  if (navToChats !== null) {
    navToChats.addEventListener('click', () => {
      document.body.innerHTML = chatsPage.render();
      chatPageLoaded();
    });
  }
}

function profilePageLoaded() {
  const navToChats = document.getElementById('navToChats');
  if (navToChats) {
    navToChats.addEventListener('click', () => {
      document.body.innerHTML = chatsPage.render();
      chatPageLoaded();
    });
  }

  const changeUserSettings = document.querySelector('.profileConfigs__changeUserSettings');

  if (changeUserSettings) {
    changeUserSettings.addEventListener('click',
      () => {
        document.body.innerHTML = errorPage404.render();
        errorPageLoaded();
      });
  }

  const logout = document.querySelector('.profileConfigs__logout');

  if (logout) {
    logout.addEventListener('click',
      () => {
        document.body.innerHTML = errorPage500.render();
        errorPageLoaded();
      });
  }
}

function chatPageLoaded() {
  const profileTextLink = document.querySelector('.chatListContainer__profileLinkText');
  if (profileTextLink) {
    profileTextLink.addEventListener('click',
      () => {
        document.body.innerHTML = profileView.render();
        profilePageLoaded();
      });
  }

  const chatContact = document.querySelector('.chatContact');
  if (chatContact) {
    chatContact.addEventListener('click',
      () => {
        document.body.innerHTML = conversationPage.render();
        profilePageLoaded();
      });
  }
}

function registrationPageLoaded() {
  const navToSignIn = document.getElementById('navToSignIn');
  if (navToSignIn) {
    navToSignIn.addEventListener('click', () => {
      // document.body.innerHTML = generateLoginModule();
      document.body.innerHTML = LoginView.getView();
      loginPageLoaded();
    });
  }

  const navToChats = document.getElementById('navToChats');
  if (navToChats) {
    navToChats.addEventListener('click', () => {
      document.body.innerHTML = chatsPage.render();
      chatPageLoaded();
    });
  }
}

function loginPageLoaded() {
  const navToRegistration = document.getElementById('navToRegistration');
  if (navToRegistration) {
    navToRegistration.addEventListener('click', () => {
      document.body.innerHTML = RegistrationPage.render();
      registrationPageLoaded();
    });
  }

  const navToChats = document.getElementById('navToChats');
  if (navToChats) {
    navToChats.addEventListener('click', () => {
      document.body.innerHTML = chatsPage.render();
      chatPageLoaded();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = LoginView.getView();
  loginPageLoaded();
});
