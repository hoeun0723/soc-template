import { Store } from '../../core/Store.js';
import { fetchData } from '../../utils/fetchData.js';
import { setInheritance } from '../../utils/manuplateDom.js';

function MainStore() {
  Store.call(this);
  this.state = {
    clientState: '클라이언트에서만 쓰는 state',
    mockArr: [],
  };
}

setInheritance({parent: Store, child: MainStore});

MainStore.prototype.requestDataToServer = async function () {
  const { mockObj, mockArr } = await fetchData('/Mock/mockServer.json');
  this.setState({ ...this.state, ...mockObj, mockArr });
};

const mainStore = new MainStore();

await mainStore.init();

export default mainStore;