import { generateLoginModule } from './pages/home/modules/login/index';
import { generateRegistrationModule } from './pages/home/modules/registration/index';
import { generateChatPage } from './pages/chat/index';
import { generateProfilePage } from './pages/profile/index';
import { generateErrorPage } from './pages/error';

function errorPageLoaded() {
  document.getElementById('navToChats').addEventListener('click', function navToChats() {
    document.body.innerHTML = generateChatPage();
    chatPageLoaded();
  });
}

function profilePageLoaded() {
  document.getElementById('navToChats').addEventListener('click', function navToChats() {
    document.body.innerHTML = generateChatPage();
    chatPageLoaded();
  });

  document.querySelector('.profileConfigs__changeUserSettings').addEventListener('click', 
  function navToErrorPage() {
    document.body.innerHTML = generateErrorPage(404, 'Sorry, but this page does not exist :(');
    errorPageLoaded();
  });

  document.querySelector('.profileConfigs__logout').addEventListener('click', 
  function navToErrorPage() {
    document.body.innerHTML = generateErrorPage(500, 'We are working hard to fix the problem!');
    errorPageLoaded();
  });
};

function chatPageLoaded () {
  document.querySelector('.chatListContainer__profileLinkText').addEventListener('click', 
  function navToProfile() {
    document.body.innerHTML = generateProfilePage();
    profilePageLoaded();
  });
};

function registrationPageLoaded () {
  document.getElementById('navToSignIn').addEventListener('click', function navToRegistration() {
    document.body.innerHTML = generateLoginModule();
    loginPageLoaded();
  });

  document.getElementById('navToChats').addEventListener('click', function navToChats() {
    document.body.innerHTML = generateChatPage();
    chatPageLoaded();
  });
};

function loginPageLoaded () {
  document.getElementById('navToRegistration').addEventListener('click', function navToRegistration() {
    document.body.innerHTML = generateRegistrationModule();
    registrationPageLoaded();
  });

  document.getElementById('navToChats').addEventListener('click', function navToChats() {
    document.body.innerHTML = generateChatPage();
    chatPageLoaded();
  });
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = generateLoginModule();
  loginPageLoaded();
});
