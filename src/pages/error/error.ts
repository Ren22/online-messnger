import notCompiledTemplate from './error.tmpl';
import './error.less';
import View from '../../baseClasses/RenderHelpers';

// const template = Handlebars.compile(error);

export default class ErrorPage extends View {
  errorCode: number;
  desc: string;
  constructor(errorCode: number, desc: string) {
    super();
    this.errorCode = errorCode;
    this.desc = desc;
  }

  render() {
    return View.generateView(notCompiledTemplate,
      {
        errorCode: this.errorCode,
        errorDescription: this.desc,
      });
  }
}
