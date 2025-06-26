export default function Store(props) {
    let state = props;
    this.targetComponent = {};
    this.requestDataToServer;
    this.getState = function (keysObj) {
        if (!keysObj) return state;
        return Object.keys(keysObj).reduce((acc,cur)=> {
            if(state.hasOwnProperty(cur)) {
                return {...acc, ...{[cur]:state[cur]}};
            }
        },{});
    };

    this.setState = function (newState) {
        state = {...state,...newState};
        return newState;
    };
}

Store.prototype.init = async function () {
  await this.requestDataToServer();
};

Store.prototype.requestDataToServer = function () {};