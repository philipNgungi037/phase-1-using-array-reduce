const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


const reducer = (prevValue, currentValue) => prevValue + currentValue

let totalBatteries = batteryBatches.reduce(reducer)