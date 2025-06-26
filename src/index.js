import Root from './Page/root.js';

const $rootWrapper = document.getElementById('root');

function init() {
  const $root = new $rootWrapper({$element: $rootWrapper, isDirect: false});
  $root.init();
}

$rootWrapper && init();