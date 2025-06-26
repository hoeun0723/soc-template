export function Store(state) {
  this.state = state;
  this.render;
}

Store.prototype.init = async function () {
  await this.requestDataToServer();
};

Store.prototype.requestDataToServer = function () {};

Store.prototype.getState = function (keys) {
  if (!keys) return this.state;
  // this.state에 있는 요소 중 key에 해당하는 요소들
  // return {...요청한 state들};
  return this.state;
};
Store.prototype.setState = function (newState) {
  // 디버그용
  console.log(newState);
  this.state = {...this.state,...newState};
  this.render && this.render(); // Element.render(), bind로 this를 묶어둠
};