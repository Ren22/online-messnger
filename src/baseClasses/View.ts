import Handlebars from 'handlebars';

class View {
  static generateView(notCompiledTemplate: string) {
    const template = Handlebars.compile(notCompiledTemplate);
    return template({});
  }

  static registerPartial(partialName: string, partialTemplate: string) {
    return Handlebars.registerPartial(partialName, partialTemplate);
  }
}

export default View;
