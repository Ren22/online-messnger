import notRenderedTemplate from './link.tmpl';
import './link.less';
import { Block } from '../../baseClasses/Block';
import { CallBack } from '../../global/types';

const Handlebars = require('handlebars');

type LinkProps = {
  linkText: string,
  linkStyle: string,
  events?: { [key: string]: CallBack },
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(notRenderedTemplate);
    return template({
      // login__registrationText
      linkStyle: this.props.linkStyle,
      linkText: this.props.linkText,
    });
  }
}
