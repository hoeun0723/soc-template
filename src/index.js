import ConnectInterface from './core/connectInterface.js';
import Root from './Page/root.js';

const $rootWrapper = document.getElementById('root');

function init() {
  const $root = new Root({ $element: $rootWrapper, isDirect: false });
  const rootInterface = new ConnectInterface({elements: {$root}});
  rootInterface.init();
}

$rootWrapper && init();