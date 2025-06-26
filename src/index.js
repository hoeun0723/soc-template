import Root from './Page/root.js';
import RootStore from './rootStore.js';
import { connectStoreWithElement } from './utils/manuplateDom.js';

const $rootWrapper = document.getElementById('root');

function init() {
  connectStoreWithElement({
    storeConstructor : RootStore,
    elementConstructor: Root,
    $elementWrapper: $rootWrapper,
  })
}

$rootWrapper && init();