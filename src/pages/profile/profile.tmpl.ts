// language=hbs
export default `
<div class="profileContainer">
  <div class="profileContainer__navBack">
    <button id="navToChats" class="profileRoundButton">{{buttonText}}</button>
  </div>
  <div class="profileContainer__main">
    <div class="profileImage"></div>
    <div class="profileName">Ivan</div>
    <div class="profileInputFields">
      {{> emailInputField}}
      {{> loginInputField}}
      {{> nameInputField}}
      {{> surnameInputField}}
      {{> visibleNameInputField}}
      {{> phoneInputField}}
    </div>
    <div class="profileConfigs">
      {{> changeUserSettingsText}}
      {{> changePasswordText}}
      {{> logoutText}}
    </div>
  </div>
</div>
`;
