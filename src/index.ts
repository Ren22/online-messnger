import { generateLoginModule } from './pages/home/modules/login/index';
import { generateRegistrationModule } from './pages/home/modules/registration/index';
import { generateChatPage } from './pages/chat/index';
import { generateProfilePage } from './pages/profile/index';
import { generateErrorPage } from './pages/error/index';

function errorPageLoaded() {
  const navToChats = document.getElementById('navToChats');
  if (navToChats !== null) {
    navToChats.addEventListener('click', function navToChats() {
      document.body.innerHTML = generateChatPage();
      chatPageLoaded();
    });
  }
}

function profilePageLoaded() {
  const navToChats = document.getElementById('navToChats');
  if (navToChats) {
    navToChats.addEventListener('click', function navToChats() {
      document.body.innerHTML = generateChatPage();
      chatPageLoaded();
    });
  }

  const changeUserSettings = document.querySelector('.profileConfigs__changeUserSettings');

  if (changeUserSettings) {
    changeUserSettings.addEventListener('click', 
    function navToErrorPage() {
      document.body.innerHTML = generateErrorPage(404, 'Sorry, but this page does not exist :(');
      errorPageLoaded();
    });
  }

  const logout = document.querySelector('.profileConfigs__logout');

  if (logout) {
    logout.addEventListener('click', 
    function navToErrorPage() {
      document.body.innerHTML = generateErrorPage(500, 'We are working hard to fix the problem!');
      errorPageLoaded();
    });
  }
};

function chatPageLoaded () {
  const profileTextLink = document.querySelector('.chatListContainer__profileLinkText');
  if (profileTextLink) {
    profileTextLink.addEventListener('click', 
    function navToProfile() {
      document.body.innerHTML = generateProfilePage();
      profilePageLoaded();
    });
  }
};

function registrationPageLoaded () {
  const navToSignIn = document.getElementById('navToSignIn');
  if (navToSignIn) {
    navToSignIn.addEventListener('click', function navToRegistration() {
      document.body.innerHTML = generateLoginModule();
      loginPageLoaded();
    });
  }

  const navToChats = document.getElementById('navToChats');
  if (navToChats) {
    navToChats.addEventListener('click', function navToChats() {
      document.body.innerHTML = generateChatPage();
      chatPageLoaded();
    });
  }
};

function loginPageLoaded () {
  const navToRegistration = document.getElementById('navToRegistration');
  if (navToRegistration) {
    navToRegistration.addEventListener('click', function navToRegistration() {
      document.body.innerHTML = generateRegistrationModule();
      registrationPageLoaded();
    });
  }

  const navToChats = document.getElementById('navToChats');
  if (navToChats) {
    navToChats.addEventListener('click', function navToChats() {
      document.body.innerHTML = generateChatPage();
      chatPageLoaded();
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = generateLoginModule();
  loginPageLoaded();
});
