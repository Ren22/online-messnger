import Handlebars from 'handlebars';
import button from './button.tmpl';
import './button.less';

const template = Handlebars.compile(button);

export default (buttonId: string, buttonText: string) => template({ buttonId, buttonText });
