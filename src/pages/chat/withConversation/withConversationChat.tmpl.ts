export default `
  <div class="chatPageContainer">
    {{> chatsList }}
  <div class="chatWindow">
    <div class="chatWindowHeader">
      <div class="chatWindowHeader__profileImageSmall"></div>
      <div class="chatWindowHeader_settings"></div>
    </div>
    <div class="chatWindowConversation">
      <span class="chatWindowConversation__date">19 June</span>
      <div class="chatWindowConversation__readerMsgContainer">
        <p class="chatWindowConversation__readerMsg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p class="chatWindowConversation__time">11:56</p>
      </div>
      <div class="chatWindowConversation__authorMsgFullConatainer">
        <div class="chatWindowConversation__spacer"></div>
        <div class="chatWindowConversation__authorMsgConatainer">
          <p class="chatWindowConversation__authorMsg">Cool!</p>
          <p class="chatWindowConversation__time">12:00</span>
        </div>
      </div>
      <span class="chatWindowConversation__date">19 June</span>
      <div class="chatWindowConversation__readerMsgContainer">
        <p class="chatWindowConversation__readerMsg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p class="chatWindowConversation__time">11:56</p>
      </div>
      <div class="chatWindowConversation__authorMsgFullConatainer">
        <div class="chatWindowConversation__spacer"></div>
        <div class="chatWindowConversation__authorMsgConatainer">
          <p class="chatWindowConversation__authorMsg">Cool!</p>
          <p class="chatWindowConversation__time">12:00</span>
        </div>
      </div>
      <span class="chatWindowConversation__date">19 June</span>
      <div class="chatWindowConversation__readerMsgContainer">
        <p class="chatWindowConversation__readerMsg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p class="chatWindowConversation__time">11:56</p>
      </div>
      <div class="chatWindowConversation__authorMsgFullConatainer">
        <div class="chatWindowConversation__spacer"></div>
        <div class="chatWindowConversation__authorMsgConatainer">
          <p class="chatWindowConversation__authorMsg">Cool!</p>
          <p class="chatWindowConversation__time">12:00</span>
        </div>
      </div>
      <span class="chatWindowConversation__date">19 June</span>
      <div class="chatWindowConversation__readerMsgContainer">
        <p class="chatWindowConversation__readerMsg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p class="chatWindowConversation__time">11:56</p>
      </div>
      <div class="chatWindowConversation__authorMsgFullConatainer">
        <div class="chatWindowConversation__spacer"></div>
        <div class="chatWindowConversation__authorMsgConatainer">
          <p class="chatWindowConversation__authorMsg">Cool!</p>
          <p class="chatWindowConversation__time">12:00</span>
        </div>
      </div>
    </div>
    <div class="chatWindowBottom">
      <div class="chatWindowBottom__attachment"></div>
      <div class="chatWindowBottom__inputField">
        {{> messageInputField}}
      </div>
      <div class="chatWindowBottom__submitMsg">
        <button id="navToChats" class="chatWindowBottomRoundButton">{{buttonText}}</button>
      </div>
    </div>
  </div>
</div>
`;
