import Root from './Page/root.js';
import RootStore from './rootStore.js';

const $rootWrapper = document.getElementById('root');

function init() {
  const $root = new Root($rootWrapper);
  const rootStore = new RootStore($root);
  $root.init(rootStore);
}

$rootWrapper && init();