import ClickCard from '../../components/ClickCard/index.js';
import HtmlElement from '../../core/HtmlElement.js';
import { setInheritance } from '../../utils/manuplateDom.js';

export default function Main({$element}) {
    HtmlElement.call(this, {$element});
}

setInheritance({parent:HtmlElement,child:Main});

Main.prototype.beforeRender = function () {
    this.store = {
        ...this.interface.getStatefromStore({
            mockArr:null,
        }),
    };
};

Main.prototype.setTemplate = function () {
  const {mockArr} = this.state;
 return mockArr.length === 0
    ? `<div>Loading....</div>`
    : mockArr
        .map((clickObj) => {
          const $clickcard = new ClickCard({
            $element: this.$element,
            isDirect: true,
            props: clickObj,
          });
          return $clickcard.setTemplate();
        })
        .join('');
};

Main.prototype.setEvent = function () {
  this.$element.addEventListener('click', handleClick.bind(this));
};