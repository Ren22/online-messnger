export default `
  <div class="chatlist">
    {{> linkToProfile }}
    {{> searchField }}
    <div class="chatlist__chats">
      {{> chatContacts }}
    </div>
    <div>
    <div class="chatlist__controller">
      {{> linkToCreateNewChat }}
      {{> linkToRemoveChat }}
    </div>
  </div>
`;
