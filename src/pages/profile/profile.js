export default `
    <div class="profile-page">
        <% const editMode = new URL(document.location).searchParams.has("edit"); %>
        <div class="top">
            <a href="<%-back.link %>"><img src="<%=icons.arrow%>" class="arrow-left" alt="arrow"/><%-back.label %></a>
        </div>
        <form class="container" >
            <div  class="avatar" style="background: url(<%-avatar.photo %>) no-repeat center center;">
                <div class="bg" >
                    <input type="file" name="<%-avatar.name %>" />
                </div>
            </div>
            <span class="nick">Имя</span>
            <div class="block">
                <% fields.map(({ label, type, name, value }) => { 
                if (type === "page") { %> 
                    <input name="page" hidden value="<%-value %>">
                <% return; } %>
                <div class="row">
                    <span class="label"><%-label%></span>
                    <% if (editMode) {%> 
                        <input type="<%-type%>" name="<%-name%>" value="<%-value%>"/>
                    <% } else {%> 
                        <span class="value"><%-value%></span>
                    <% }%> 
                </div>
                <% }); %>
            </div>
            <div class="block">
                <% footer
                    .filter(({ isEditMode }) => !!isEditMode === editMode)
                    .map(({ type, label, link, className }) => {%>
                        <div class='row'>
                            <% if (type === "link") {%> 
                                <a href='<%-link%>' class='<%-className%>'><%-label%></a>
                            <% } else if (type === "button") {%> 
                                <button><%-label%></button>
                            <% }%> 
                        </div>
                    <%}); %>
            </div>
        </form>
    </div>
`;
