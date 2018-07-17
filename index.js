function produceDrivingRange(blockRange) {
  function parseStreetNumber(string) {
    stringArray = string.split('')
    stringArray.splice(-2,2)
    return Number(stringArray.join(''))
  }
  return function (start, end) {
    tripDistacnce = Math.abs(parseStreetNumber(start) - parseStreetNumber(end))
    if (tripDistacnce > blockRange){
      return `${tripDistacnce - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - tripDistacnce}`
    }
  };
}



function produceTipCalculator(tipPercentage) {
  return function (fare) {
    return fare * tipPercentage
  }
}



function createDriver() {
  let driverId = 0
  return class Driver {
    constructor(name, id){
      this.name = name
      this.id = ++driverId
    }
  }
}
