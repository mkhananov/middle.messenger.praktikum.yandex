// language=hbs
export default `
    <div class="chats__divider"></div>
    <div class="chat-room">
        <div class="chat-room__avatar"></div>
        <div class="chat-room__text">
            <p class="chat-room__title">{{ name }}</p>
            <p class="chat-room__body">{{ message }}</p>
        </div>
        <div class="chat-room__info">
            <p class="chat-room__time">{{ time }}</p>
            <p class="chat-room__unread">{{ unread }}</p>
        </div>
    </div>
`;
