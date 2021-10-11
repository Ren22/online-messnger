import Handlebars from 'handlebars';

class View {
  static generateView(notCompiledTemplate: string, content?: Record<string, any>) {
    const template = Handlebars.compile(notCompiledTemplate);
    if (content) {
      const templateContent = Object.entries(content).reduce((res: Record<string, any>, [k, v]) => {
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
}

export default View;
