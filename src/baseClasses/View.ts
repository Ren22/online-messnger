import { GenericObject } from '../global/types';

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
}

export default View;
