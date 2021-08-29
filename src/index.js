import { generateLoginModule } from './pages/home/modules/login/index';
import { generateRegistrationModule } from './pages/home/modules/registration/index';
import { generateChatPage } from './pages/chat/index';

function registrationPageLoaded () {
  document.getElementById('navToSignIn').addEventListener('click', function navToRegistration() {
    document.body.innerHTML = generateLoginModule();
    loginPageLoaded();
  });

  document.getElementById('navToChats').addEventListener('click', function navToChats() {
    document.body.innerHTML = generateChatPage();
  });
}

function loginPageLoaded () {
  document.getElementById('navToRegistration').addEventListener('click', function navToRegistration() {
    document.body.innerHTML = generateRegistrationModule();
    registrationPageLoaded()
  });

  document.getElementById('navToChats').addEventListener('click', function navToChats() {
    document.body.innerHTML = generateChatPage();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = generateLoginModule();

  loginPageLoaded();
});
