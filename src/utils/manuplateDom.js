export function setInheritance({parent,child}) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

export function connectStoreWithElement({
    storeConstructor,
    elementConstructor,
    $elementWrapper,
}) {
    const $element = new elementConstructor($elementWrapper);
    const store = new storeConstructor($element);
    $element.init(store);
}