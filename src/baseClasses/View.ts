import Handlebars from 'handlebars';

class View {
  static generateView(notCompiledTemplate: string, ...args: any) {
    const template = Handlebars.compile(notCompiledTemplate);
    console.log(...args);
    return template(...args);
  }

  static registerPartial(partialName: string, partialTemplate: string) {
    return Handlebars.registerPartial(partialName, partialTemplate);
  }
}

export default View;
