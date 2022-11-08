// language=hbs
export default `
    <div class="chat-page">
        <div class="left">
            <div class="menu">
                {{{ profile }}}
            </div>
            <div class="search">
                <img src="{{ icons.search }}" class="search__icon" alt="search"/>
                <input class="search__input" placeholder="Поиск"/>
            </div>
            <div class="chats">
                {{{ chatRooms }}}
            </div>
        </div>
        <div class="right">
            <div class="top">
                <div class="user">
                    <div class="avatar"></div>
                    <span class="name">Имя</span>
                </div>
                <span class="menu">...</span>
            </div>
            <div class="messages">
                {{{ messages }}}
            </div>
            <form class="bottom">
                <img src="{{ icons.attach }}" class="attach" alt="attach"/>
                <input name="message" class="message" placeholder="Сообщение..." type="text"/>
                {{{ sendMessage }}}
            </form>
        </div>
    </div>
`;
