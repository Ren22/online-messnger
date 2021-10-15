// language=hbs
export default `
<div class="container">
  <form name="registrationForm" class="registrationForm" onsubmit="return false">
    <div>
      <p class="form__header">Registration</p>
      {{> emailInputFieldReg }}
      {{> loginInputFieldReg }}
      {{> nameInputFieldReg }}
      {{> surnameInputFieldReg }}
      {{> phoneInputFieldReg }}
      {{> passwordInputFieldReg }}
      {{> passwordAgainInputFieldReg }}
    </div>
    <div class="formBottom">
      {{> completeRegistration}}
      <p class="login__registrationText"><a id="navToSignIn">Sign in</a></p>
    </div>
  </form>  
</div>
`;
