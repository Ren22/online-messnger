export default `
  <div class="chat-contact">
    <div class="chat-contact__photo"></div>
    <div class="chat-contact__middleSection">
      <p class="chat-contact__name">{{firstName}} {{secondName}}</p>
      <p class="chat-contact__lastMessage">{{content}}</p>
    </div>
    <div class="chat-contact__spacer"></div>
    <p class="chat-contact__lastMessageTime">{{time}}</p>
  </div>
`;
