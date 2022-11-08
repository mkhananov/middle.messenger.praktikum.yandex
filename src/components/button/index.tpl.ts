// language=hbs
export default `
    {{#if row }}
        <div class="row">{{/if}}
    {{#if link }}
            <a {{#if className }} class="{{ className }}" {{/if}}>{{ label }}</a>
    {{ else if icon }}
            <a {{#if className }} class="{{ className }}" {{/if}}>
                {{ label }}
                {{#if icon }}
                    <img src="{{ icon }}" alt="icon"/>
                {{/if}}
            </a>
    {{ else }}
            <button>{{ label }}</button>
    {{/if}}
    {{#if row }}</div>{{/if}}

`;
