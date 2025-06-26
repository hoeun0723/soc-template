export default function HtmlElement({$element,isDirect}) {
  this.$element = $element;
  this.store;
  this.privateState;
}

HtmlElement.prototype.init = function () {
  this.connectStore();
  this.render();
  this.setEvent();
};

HtmlElement.prototype.connectStore = function () {};

HtmlElement.prototype.setTemplate = function () {
  return ``;
};

HtmlElement.prototype.renderChild = function () {};

HtmlElement.prototype.render = function () {
    this.state = {};
  this.$element.innerHTML = this.setTemplate();
  this.renderChild();
};

HtmlElement.prototype.setEvent = function () {};