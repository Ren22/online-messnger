import notRenderedTemplate from './button.tmpl';
import './button.less';
import { Block } from '../../baseClasses/Block';

const Handlebars = require('handlebars');

type ButtonProps = {
  buttonId: string,
  buttonText: string
}

export class Button extends Block {
  constructor(props:ButtonProps) {
    super('button', props);
  }

  render() {
    const template = Handlebars.compile(notRenderedTemplate);
    return template({
      buttonId: this.props.buttonId,
      buttonText: this.props.buttonText,
    });
  }
}
