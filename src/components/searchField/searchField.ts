import Handlebars from 'handlebars';
import notCompiledTemplate from './searchField.tmpl';
import './searchField.less';
import { Block } from '../../baseClasses/Block';

export class SearchField extends Block {
  constructor() {
    super('div');
  }

  render() {
    const template = Handlebars.compile(notCompiledTemplate);
    return template({});
  }
}
