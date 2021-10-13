export default `
<div class="container">
  <form name="loginForm" id="loginForm" class="loginForm" onsubmit="return false">
    <div>
      <p class="form__header">Login</p>
      {{> loginInputField}}
      {{> passwordInputField}}
    </div>
    <div class="formBottom">
      {{> signInButton}}
      <p class="login__registrationText"><a id="navToRegistration">Registration</a></p>
    </div>
  </form>
</div>
`;
