import login from './pages/home/modules/login/login.js';
import registration from './pages/home/modules/registration/registration';

function registrationPageLoaded () {
  document.getElementById('navToSignIn').addEventListener('click', function navToRegistration() {
    document.body.innerHTML = login;
    loginPageLoaded();
  })
}

function loginPageLoaded () {
  document.getElementById('navToRegistration').addEventListener('click', function navToRegistration() {
    document.body.innerHTML = registration;
    registrationPageLoaded()
  })
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = login;

  loginPageLoaded();
});
