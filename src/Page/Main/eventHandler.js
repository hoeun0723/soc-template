export function handleClick(event) {
    const {
        target: {
            dataset: {clickType},
        },
    } = event;
    if (!clickType) return;
    const {mockArr} = this.store.state;
    const newMockArr = increaseTargetValue(clickType,mockArr);
    this.store.setState({mockArr:newMockArr});
}

function increaseTargetValue(clickType,mockArr) {
    return [...mockArr].map(({key,value})=> {
        if(key === clickType) {
            return {key,value: value + 1};
        } else {
            return {key, value};
        }
    });
}