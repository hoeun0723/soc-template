import { Store } from './core/Store.js';

export default function RootStore($element) {
  Store.call(this, $element);
}
RootStore.prototype = Object.create(Store.prototype);
RootStore.prototype.constructor = RootStore;