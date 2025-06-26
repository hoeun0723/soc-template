import { setInheritance } from "../utils/manuplateDom";
import { Store } from "./core/Store";

export default function RootStore($element) {
    Store.call(this, $element);
}
setInheritance({parent: Store, child: RootStore});