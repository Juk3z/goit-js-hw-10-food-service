const template = require("./template/template.hbs");
import menu from './menu.json';

const ulEl = document.querySelector('.js-menu');
const render = template(menu);

ulEl.insertAdjacentHTML('beforeend', render);

console.log(ulEl);





