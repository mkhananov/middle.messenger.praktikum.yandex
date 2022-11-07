// language=hbs
export default `
    <div class="{{#if className }}{{ className }}{{ else }}input{{/if}}">
        <span class="label">{{ label }}</span>
        {{#if readOnly }}
            <span class="value">{{ value }}</span>
        {{ else }}
            <input type="{{ type }}" name="{{ name }}"
                {{#if required}}
                   required
                {{/if}}
                {{#if value}}
                   value="{{ value }}"
                {{/if}}
            />
        {{/if}}
        {{#if error}}
            <span class="error">{{ error }}</span>
        {{/if}}
    </div>
`;
