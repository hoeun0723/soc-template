import { Store } from '../../core/Store.js';
import { fetchData } from '../../utils/fetchData.js';

export default function MainStore($element) {
  Store.call(this, $element);
  this.state = {
    clientState: '클라이언트에서만 쓰는 state',
  };
}

MainStore.prototype = Object.create(Store.prototype);
MainStore.prototype.constructor = MainStore;

MainStore.prototype.requestDataToServer = async function () {
  const { mockObj } = await fetchData('/Mock/mockServer.json');
  this.setState({ ...this.state, ...mockObj });
};