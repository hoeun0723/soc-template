export default function HtmlElement({$element}) {
  this.$element = $element;
}

HtmlElement.prototype.init = function () {
  this.render();
  this.renderChild();
  this.setEvent();
};

HtmlElement.prototype.connectStore = function () {};

HtmlElement.prototype.setTemplate = function () {
  return ``;
};

HtmlElement.prototype.renderChild = function () {};

HtmlElement.prototype.beforeRender = function () {
  this.state = {};
};

HtmlElement.prototype.render = function () {
  this.beforeRender();
  this.$element.innerHTML = this.setTemplate();
};

HtmlElement.prototype.setEvent = function () {};