import HtmlElement from '../core/HtmlElement.js';
import { connectStoreWithElement, setInheritance } from '../utils/manuplateDom.js';
import Main from './Main/index.js';
import MainStore from './Main/store.js';

export default function Root($element) {
  HtmlElement.call(this, $element);
}

setInheritance({parent:HtmlElement, child: Root});

Root.prototype.setTemplate = function () {
  return `
    <header id="header"></header>
    <main id="main"></main>
  `;
};

Root.prototype.renderChild = function () {
  const $mainWrapper = document.getElementById('main');
  connectStoreWithElement({
    storeConstructor: MainStore,
    elementConstructor: Main,
    $elementWrapper: $mainWrapper,
  })
};