import notRenderedTemplate from './button.tmpl';
import './button.less';
import { Block } from '../../baseClasses/Block';
import { CallBack } from '../../global/types';

const Handlebars = require('handlebars');

type ButtonProps = {
  buttonText: string,
  events?: { [key: string]: CallBack },
}

export class Button extends Block {
  constructor(props:ButtonProps) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(notRenderedTemplate);
    return template({
      buttonText: this.props.buttonText,
    });
  }
}
