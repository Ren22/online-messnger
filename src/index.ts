// import { generateLoginModule } from './pages/home/modules/login/index';
import { ChatsPage } from './pages/chats/index';
import { generateErrorPage } from './pages/error/index';
import { generateWithConversationChatPage } from './pages/chat/withConversation/index';
import { LoginView } from './pages/login';
import { ProfilePage } from './pages/profile/index';
import { RegistrationPage } from './pages/registration/index';

const profileView = new ProfilePage();
const chatsPage = new ChatsPage();

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
        document.body.innerHTML = generateErrorPage(404, 'Sorry, but this page does not exist :(');
        errorPageLoaded();
      });
  }

  const logout = document.querySelector('.profileConfigs__logout');

  if (logout) {
    logout.addEventListener('click',
      () => {
        document.body.innerHTML = generateErrorPage(500, 'We are working hard to fix the problem!');
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
        document.body.innerHTML = generateWithConversationChatPage();
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
