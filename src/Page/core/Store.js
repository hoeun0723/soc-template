export function Store($element) {
  this.$element = $element;
  this.state = {};
  this.init();
}

Store.prototype.init = function () {
  this.requestDataToServer();
};

Store.prototype.requestDataToServer = function () {};

Store.prototype.getState = function (keys) {
  if (!keys) return this.state;
  return this.state;
  // this.state에 있는 요소 중 key에 해당하는 요소들
  // return {...요청한 state들};
};
Store.prototype.setState = function (newState) {
  this.state = { ...this.state, ...newState };
  // 디버그용
  console.log(newState);
  this.$element.render();
};