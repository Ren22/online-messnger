/* eslint-disable no-useless-escape */
export default `
    <div 
      class="{{#if mediumMarginHorizontally}}mediumMarginLeft mediumMarginRight {{/if}}
      {{#if vbox}}inputfieldVBox{{else}}inputfieldHBox{{/if}}
      {{#if justifyContentSpaceBetween}}justifyContentSpaceBetween{{/if}}">
      <label for="{{inputFieldId}}" class="{{labelStyle}}">{{inputFieldText}}</label>
      <input 
        placeholder="{{inputFieldPlaceholder}}"
        type="{{inputFieldType}}"
        value="{{inputFieldValue}}"
        name="{{inputFieldText}}"
        class="inputField {{inpFieldStyle}}"
        {{#if readOnly}}readonly{{/if}}>
    </div>
    {{#unless isValid}}
      <span class="error-message mediumMarginLeft mediumMarginRight">{{validationFailedMessage}}</span>
    {{/unless}}
`;
