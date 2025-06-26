import HtmlElement from "../../core/HtmlElement";
import { setInheritance } from "../../utils/manuplateDom";

export default function ClickCard({$element,props}) {
    HtmlElement.call(this, {$element});
    this.state = {...props};
}

setInheritance({parent:HtmlElement, child: ClickCard});

ClickCard.prototype.setTemplate = function() {
    const {key, value} = this.state;
    return `
    <div class="${key} box" data-click-type="${key}">
    <h1>몇 번 클릭했니</h1>
    <h2>${value}</h2>
    </div>
    `;
};