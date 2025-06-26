export function handleClick(event) {
    const {
        target: {
            dataset: {clickType},
        },
    } = event;
    if (!clickType) return;
    const {mockArr} = this.getState({mockArr: null});
    const newMockArr = increaseTargetValue(clickType,mockArr);
    this.setState({elementID : '$main',newState: {mockArr:newMockArr}});
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