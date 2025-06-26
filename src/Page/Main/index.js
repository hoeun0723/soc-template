import HtmlElement from '../../core/HtmlElement.js';
import { setInheritance } from '../../utils/manuplateDom.js';

export default function Main($element) {
  HtmlElement.call(this, $element);
}

setInheritance({parent:HtmlElement,child:Main});

Main.prototype.setTemplate = function () {
  const { first, second, third, firth } = this.state;
  return `
  <div class="first box" data-click-type="first">
    <h1>몇 번 클릭했니</h1>
    <h2>${first}</h2>
  </div>
  <div class="second box" data-click-type="second">
    <h1>몇 번 클릭했니</h1>
    <h2>${second}</h2>
  </div>
  <div class="second box" data-click-type="third">
    <h1>몇 번 클릭했니</h1>
    <h2>${third}</h2>
  </div>
  <div class="second box" data-click-type="firth">
    <h1>몇 번 클릭했니</h1>
    <h2>${firth}</h2>
  </div>
  `;
};

Main.prototype.setEvent = function () {
  const { handleClick } = this.eventHandler;
  this.$element.addEventListener('click', handleClick.bind(this));
};

Main.prototype.eventHandler = {
  handleClick: function (event) {
    const {
      target: {
        dataset: { clickType },
      },
    } = event;
    if (!clickType) return;
    const { first, second, third, firth } = this.state;
    switch (clickType) {
      case 'first':
        this.store.setState({ first: first + 1 });
        break;
      case 'second':
        this.store.setState({ second: second + 1 });
        break;
      case 'third':
        this.store.setState({ third: third + 1 });
        break;
      case 'firth':
        this.store.setState({ firth: firth + 1 });
        break;
      default:
        break;
    }
  },
};