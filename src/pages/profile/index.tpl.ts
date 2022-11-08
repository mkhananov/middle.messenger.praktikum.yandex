// language=hbs
export default `
    <div class="profile-page">
        <div class="top">
            {{{ back }}}
        </div>
        <form class="container">
            <div class="avatar" style="background: url({{ avatar.photo }}) no-repeat center center;">
                <div class="bg">
                    <input type="file" name="{{ avatar.name }}"/>
                </div>
            </div>
            <span class="nick">Имя</span>
            <div class="block">
                {{{ fields }}}
            </div>
            <div class="block">
                {{{ footer }}}
            </div>
        </form>
    </div>
`;
