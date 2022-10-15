export default `
  <div class="chat-page">
    <div class="left">
        <div class="menu">
            <a href="<%-profile.link%>">
                <%-profile.label%><img src="<%=icons.arrow%>" class="arrow-right" alt="arrow"/>
            </a>
        </div>
        <div class="search"></div>
        <div class="chats"></div>
    </div>
    <div class="right">
        <div class="top">
            <div class="user">
                <div class="avatar"></div>
                <span class="name">Имя</span>
            </div>    
            <span class="menu">...</span>    
        </div>
        <div class="messages"></div>
        <form class="bottom">
            <img src="<%=icons.attach%>" class="attach" alt="attach"/>
            <input name="message" class="message" placeholder="Сообщение..." type="text"/>
            <img src="<%=icons.send%>" class="send" alt="send"/>
        </form>
    </div>
  </div>
`;
