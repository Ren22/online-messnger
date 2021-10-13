// import { generateLoginModule } from './pages/home/modules/login/index';
import { ChatsPage } from './pages/chats/index';
import { ConversationPage } from './pages/conversation/index';
import { LoginPage } from './pages/login/index';
import { ProfilePage } from './pages/profile/index';
import { RegistrationPage } from './pages/registration/index';
import { ErrorPage } from './pages/error/index';
import './global/styles.less';
import { FormValidator } from './baseClasses/FormValidator';

const profileView = new ProfilePage();
const chatsPage = new ChatsPage();
const conversationPage = new ConversationPage();
const loginPage = new LoginPage();
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
        conversationPageLoaded();
      });
  }
}

function registrationPageLoaded() {
  const navToSignIn = document.getElementById('navToSignIn');
  if (navToSignIn) {
    navToSignIn.addEventListener('click', () => {
      document.body.innerHTML = loginPage.render();
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
  const { loginForm } = document.forms as LoginForm;
  const submitBtn = loginForm.getElementsByTagName('button')[0];
  const formValidator = new FormValidator(loginForm, submitBtn, {
    login: {
      regex: /^[a-zA-Z]{3,20}$/,
      errMsg: 'Login should be from 3 to 20 symbols',
    },
    password: {
      regex: /^[a-zA-Z]{3,7}$/,
      errMsg: 'Please provide a password of length from 3 to 7',
    },
  });

  formValidator.initialize();
  function loginFormSubmit() {
    if (formValidator.isFormValidStatus()) {
      document.body.innerHTML = chatsPage.render();
      chatPageLoaded();
    }
  }
  loginForm.addEventListener('submit', loginFormSubmit);
  const navToRegistration = document.getElementById('navToRegistration');
  if (navToRegistration) {
    navToRegistration.addEventListener('click', () => {
      document.body.innerHTML = RegistrationPage.render();
      registrationPageLoaded();
    });
  }

  interface LoginForm extends HTMLCollectionOf<HTMLFormElement>{
    loginForm: HTMLFormElement
  }
}

function conversationPageLoaded() {
  const profileTextLink = document.querySelector('.chatListContainer__profileLinkText');
  if (profileTextLink) {
    profileTextLink.addEventListener('click',
      () => {
        document.body.innerHTML = profileView.render();
        profilePageLoaded();
      });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = loginPage.render();
  loginPageLoaded();
});
