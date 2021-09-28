import Handlebars from 'handlebars';
import searchField from './searchField.tmpl';
import './searchField.less';

const template = Handlebars.compile(searchField);

export default () => template({});
