// import { generateLoginModule } from './pages/home/modules/login/index';
import { ChatsPage } from './pages/chats/index';
import { ConversationPage } from './pages/conversation/index';
import { LoginPage } from './pages/login/index';
import { ProfilePage } from './pages/profile/index';
import { RegistrationPage } from './pages/registration/index';
import { ErrorPage } from './pages/error/index';
import './global/styles.less';
import { FormValidator } from './baseClasses/FormValidator';
import { navTo } from './utils/navigator';

// const profilePage = new ProfilePage();
// const chatsPage = new ChatsPage();
// const conversationPage = new ConversationPage();
// const loginPage = new LoginPage();
// const registrationPage = new RegistrationPage();
// const errorPage404 = new ErrorPage(404, 'Sorry, but this page does not exist :(');
// const errorPage500 = new ErrorPage(500, 'We are working to fix the problem!');

// function errorPageLoaded() {
//   const navToChats = document.getElementById('navToChats');
//   if (navToChats !== null) {
//     navToChats.addEventListener('click', () => {
//       document.body.innerHTML = chatsPage.render();
//       chatPageLoaded();
//     });
//   }
// }

// function profilePageLoaded() {
//   const navToChats = document.getElementById('navToChats');
//   if (navToChats) {
//     navToChats.addEventListener('click', () => {
//       document.body.innerHTML = chatsPage.render();
//       chatPageLoaded();
//     });
//   }

//   const changeUserSettings = document.querySelector('.profileConfigs__changeUserSettings');

//   if (changeUserSettings) {
//     changeUserSettings.addEventListener('click',
//       () => {
//         document.body.innerHTML = errorPage404.render();
//         errorPageLoaded();
//       });
//   }

//   const logout = document.querySelector('.profileConfigs__logout');

//   if (logout) {
//     logout.addEventListener('click',
//       () => {
//         document.body.innerHTML = errorPage500.render();
//         errorPageLoaded();
//       });
//   }
// }

// function chatPageLoaded() {
//   const profileTextLink = document.querySelector('.chatListContainer__profileLinkText');
//   if (profileTextLink) {
//     profileTextLink.addEventListener('click',
//       () => {
//         document.body.innerHTML = profilePage.render();
//         profilePageLoaded();
//       });
//   }

//   const chatContact = document.querySelector('.chatContact');
//   if (chatContact) {
//     chatContact.addEventListener('click',
//       () => {
//         document.body.innerHTML = conversationPage.render();
//         conversationPageLoaded();
//       });
//   }
// }

// function registrationPageLoaded() {
//   const { registrationForm } = document.forms as LoginForm;
//   const submitBtn = registrationForm.getElementsByTagName('button')[0];
//   const formValidator = new FormValidator(registrationForm, submitBtn, {
//     login: {
//       regex: /^(?=[\S]+)(?=.*[^0-9 ].*)[a-zA-Z0-9_-]{3,20}$/,
//       errMsg: 'Login should be from 3 to 20 symbols and not include special symbols exept for _ or -',
//     },
//     email: {
//       regex: /^\S+@\S+\.\S+$/,
//       errMsg: 'Please provide a correct email',
//     },
//     name: {
//       regex: /^(?=[\S])[A-Z]{1}[A-Za-z-]*$/,
//       errMsg: 'Name should start with a capital letter, no spaces or digits allowed',
//     },
//     surname: {
//       regex: /^(?=[\S])[A-Z]{1}[A-Za-z-]*$/,
//       errMsg: 'Name should start with a capital letter, no spaces or digits allowed',
//     },
//     phone: {
//       regex: /^\+?[\d]{10,15}$/,
//       errMsg: 'Please provide a correct phone number',
//     },
//     password: {
//       regex: /^(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d]{8,40}$/,
//       errMsg: 'Please provide a password of length from 8 to 40 with at least 1 capital letter and 1 digit',
//     },
//     passwordAgain: {
//       regex: /^(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d]{8,40}$/,
//       errMsg: 'Please provide a password of length from 8 to 40 with at least 1 capital letter and 1 digit',
//     },
//   });

//   formValidator.initialize();
//   function registrationFormSubmit() {
//     if (formValidator.isFormValidStatus()) {
//       document.body.innerHTML = chatsPage.render();
//       chatPageLoaded();
//     }
//   }
//   registrationForm.addEventListener('submit', registrationFormSubmit);
//   const navToSignIn = document.getElementById('navToSignIn');
//   if (navToSignIn) {
//     navToSignIn.addEventListener('click', () => {
//       document.body.innerHTML = loginPage.render();
//       loginPageLoaded();
//     });
//   }
// }


// function conversationPageLoaded() {
//   const { conversationForm } = document.forms as LoginForm;
//   const submitBtn = conversationForm.getElementsByTagName('button')[0];
//   const formValidator = new FormValidator(conversationForm, submitBtn, {
//     message: {
//       regex: /^.*\S.*$$/,
//       errMsg: 'Message cannot be empty',
//     },
//   });

//   formValidator.initialize();
//   function conversationFormSubmit() {
//     if (formValidator.isFormValidStatus()) {
//       // todo: write what should be done once message is submitted
//     }
//   }
//   conversationForm.addEventListener('submit', conversationFormSubmit);
//   const profileTextLink = document.querySelector('.chatListContainer__profileLinkText');
//   if (profileTextLink) {
//     profileTextLink.addEventListener('click',
//       () => {
//         document.body.innerHTML = profilePage.render();
//         profilePageLoaded();
//       });
//   }
// }

navTo('loginPage');
