import ClickCard from '../../components/ClickCard/index.js';
import HtmlElement from '../../core/HtmlElement.js';
import { setInheritance } from '../../utils/manuplateDom.js';

export default function Main({$element, isDirect}) {
    HtmlElement.call(this, {$element,isDirect});
}

setInheritance({parent:HtmlElement,child:Main});

Main.prototype.connectStor = function () {
    this.store = MainStore;
    MainStore.render = this.render.bind(this);
};

Main.prototype.setTemplate = function () {
  const {
    state : {mockArr},
  } = this.store;
  return mockArr.length === 0 ? `<div>Loading...</div>` : mockArr.map((clickObj)=> {
    const $clickcard = new ClickCard({
        $element : this.$element,
        isDirect: true,
        props: clickObj,
    });
    return $clickcard.setTemplate();
  })
  .join('');
};

Main.prototype.setEvent = function () {
  // debugger;
  this.$element.addEventListener('click', handleClick.bind(this));
};