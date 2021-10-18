import Handlebars from 'handlebars';
import notRenderedTemplate from './button.tmpl';
import './button.less';
import { Block } from '../../baseClasses/Block';

export class Button extends Block {
  constructor(props: Record <string, any>) {
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
