export default function ConnectInterface({elements,store}) {
    this.elements = elements;
    this.store = store;
}

ConnectInterface.prototype.init = function () {
    this.store && this.connectStore();
    Object.values(this.elements).map((element)=> element.init());
};

ConnectInterface.prototype.addElement = function ({newElements}) {
    this.elements = {...this.elements, ...newElements};
    this.connectStore();
    Object.values(nenwElements).map((element)=>element.init());
};

ConnectInterface.prototype.connectStore = function () {
    Object.values(this.elements).map((element)=> {
        element.interface = this;
    });
};

ConnectInterface.prototype.getStatefromStore = function (keysObj) {
    return this.store.getState(keysObj);
};

ConnectInterface.prototype.getStatefromStore = function (keysObj) {
    return this.store.getState(keysObj);
};

ConnectInterface.prototype.setStateToStore = function ({newState}) {
    const updatedState = this.store.setState(newState);
    this.reRenderHtmlElemenet({
        newState: updatedState,
    });
};

ConnectInterface.prototype.reRenderHtmlElement = function ({newState}) {
    Object.values(this.elements).map((element)=>{
        Object.keys(newState).map((key)=> {
             if (element.state.hasOwnProperty(key)) {
                element.render();
            }
        });
    });
};