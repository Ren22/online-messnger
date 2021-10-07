export default `
  <div class="chatListContainer">
    <div class="chatListContainer__profileLink">
      <p class="chatListContainer__profileLinkText">Profile
        <a class="arrow arrow-right"></a>
      </p>
    </div>
    {{> searchField }}
    <div class="contactsContainer">
      {{#each chatContacts}}
        <div class="chatContact">
          <div class="chatContact__photo"></div>
          <div class="chatContact__middleSection">
            <p class="chatContact__name">{{firstName}}</p>
            <p class="chatContact__lastMessage">{{content}}</p>
          </div>
          <div class="chatContact__spacer"></div>
          <p class="chatContact__lastMessageTime" >{{time}}</p>
        </div>
      {{/each}}
    </div>
  </div>
`;
