export default `
    <div class="login-page">
        <form class="container">
            <span class="header"><%-header %></span>
            <div class="fields">
                <% fields.map(({ label, type, name }) => { %>
                <div class="field">
                    <span class="label"><%-label %></span>
                    <input type="<%-type %>" name="<%-name %>"/>
                </div>
                <% }); %>
            </div>
            <div class="footer">
                <% footer.map(({ type, label, link, onClick }) => {
                if (type === "link") { %> 
                    <a  href='/<%-link %>'><%-label %></a>
                <% } else if (type === "button") { %> 
                    <button><%-label %></button>
                <% } else if (type === "page") { %> 
                    <input name="page" hidden value="<%-link %>"/>
                <% }}); %>
            </div>
        </form>
    </div>
`;
