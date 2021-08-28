import button from './button.tmpl';
import Handlebars from 'handlebars';
import './button.less';

const compiled = Handlebars.compile(button);

export default (buttonText) => compiled({ buttonText: buttonText })