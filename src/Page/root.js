import { ConnectInterface } from '../core/connectInterface.js';
import HtmlElement from '../core/HtmlElement.js';
import Main from './Main/index.js';
import mainStore from './Main/store.js';

export default function Root({$element,isDirect}) {
  HtmlElement.call(this, {$element,isDirect});
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
  const $main = new Main({$element: $mainWrapper, isDirect: false});
 const mainInterface = new ConnectInterface({
    elements: {$main},
    store: mainStore,
 });
 mainInterface.init();
};