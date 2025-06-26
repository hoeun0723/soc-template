import HtmlElement from "../../Page/core/HtmlElement";
import { setInheritance } from "../../utils/manuplateDom";

export default function ClickCard($element) {
    HtmlElement.call(this, $element);
}

setInheritance({parent:HtmlElement, child: ClickCard});