import HtmlElement from '../core/HtmlElement.js';
import Main from './Main/index.js';
import MainStore from './Main/store.js';

export default function Root($element) {
  HtmlElement.call(this, $element);
}

Root.prototype = Object.create(HtmlElement.prototype);
Root.prototype.constructor = Root;

Root.prototype.setTemplate = function () {
  return `
    <header id="header"></header>
    <main id="main"></main>
  `;
};

Root.prototype.renderChild = function () {
  const $mainWrapper = document.getElementById('main');
  const $main = new Main($mainWrapper);
  const mainStore = new MainStore($main);
  $main.init(mainStore);
};