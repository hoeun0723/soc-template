export function ConnectInterface({elements,store}) {
    this.elements = {...elements};
    this.store = store;
}

ConnectInterface.prototype.init = function () {
    this.store && this.connectStore();
    Object.values(this.elements).map((element)=> element.init());
};

ConnectInterface.prototype.connectStore = function () {
    Object.values(this.elements).map((element)=> {
        element.getState = this.getStatefromStore.bind(this);
        element.setState = this.setStateToStore.bind(this);
    });
    this.store.interface = this;
};

ConnectInterface.prototype.getStatefromStore = function (keysObj) {
    return this.store.getState(keysObj);
};

ConnectInterface.prototype.getStatefromStore = function (keysObj) {
    return this.store.getState(keysObj);
};

ConnectInterface.prototype.setStateToStore = function ({elementID,newState,}) {
    const updatedState = this.store.setState(newState);
    this.reRenderHtmlElemenet({
        targetHtmlElement : this.elements[elementID],
        newState: updatedState,
    });
};

ConnectInterface.prototype.reRenderHtmlElement = function ({
    targetHtmlElement, newState,
}) {
    if (targetHtmlElement) {
        Object.keys(newState).map((key)=> {
            if(targetHtmlElement.getState().hasOwnProperty(key)) {
                targetHtmlElement.render();
            }
        });
    }
};