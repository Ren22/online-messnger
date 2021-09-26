import searchField from './searchField.tmpl';
import Handlebars from 'handlebars';
import './searchField.less';

const template = Handlebars.compile(searchField);

export default () => template();