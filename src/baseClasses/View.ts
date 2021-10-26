import { GenericObject } from '../global/types';
import { Block } from './Block';

const Handlebars = require('handlebars');

class View {
  static generateView(notCompiledTemplate: string, content?: GenericObject) {
    const template = Handlebars.compile(notCompiledTemplate);
    if (content) {
      const templateContent = Object.entries(content).reduce((res: GenericObject, [k, v]) => {
        res[k] = v;
        return res;
      }, {});
      return template(templateContent);
    }
    return template({});
  }

  static registerPartial(partialName: string, partialTemplate: string) {
    return Handlebars.registerPartial(partialName, partialTemplate);
  }

  render(): any {}

  convertHTMLToDOM(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString.trim();
    return template.content.children[0];
  }

  replaceElementsInHTMLTemplate(templateHTML: string, elementsWithId: Block[]) {
    const templateDOM = this.convertHTMLToDOM(templateHTML);
    elementsWithId.forEach((elementWithId) => {
      const oldEl = templateDOM.querySelector(`[data-id='${elementWithId.getId()}']`);
      const newEl = elementWithId.getElement();
      const parent = oldEl?.parentElement;
      if (parent && oldEl) {
        parent.replaceChild(newEl, oldEl);
      }
    });
    return templateDOM;
  }
}

export default View;
