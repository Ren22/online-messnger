
import {sum} from './modules/sum';

const root = document.querySelector('#root');
console.log(root);
root.textContent = sum(6, -1).toString(); 