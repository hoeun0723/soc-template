export default function HtmlElement($element) {
  this.$element = $element;
  this.store;
  this.state;
}

HtmlElement.prototype.init = function (store) {
  this.store = store;
  this.render();
  this.setEvent();
};

HtmlElement.prototype.setTemplate = function () {
  return ``;
};

HtmlElement.prototype.renderChild = function () {};

HtmlElement.prototype.render = function () {
  const args = this.store.getState();
  this.state = {
    ...args,
  };
  this.$element.innerHTML = this.setTemplate();
  this.renderChild();
};

HtmlElement.prototype.setEvent = function () {};