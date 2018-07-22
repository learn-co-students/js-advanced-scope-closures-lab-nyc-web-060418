function produceDrivingRange(blockRange){
    function streetNumber(string){
        splitString = string.split('')
        splitString.splice(-2)
        return Number(splitString.join(''))
    }
    return function (start, end){
        travelDistance = Math.abs(streetNumber(start) - streetNumber(end))
        if (travelDistance > blockRange) {
            return `${travelDistance - blockRange} blocks out of range`
        } else {
            return `within range by ${blockRange - travelDistance}`
        }
    }
}

function produceTipCalculator(tipAmount){
    return function(fare){
        return fare*tipAmount
    }
}

function createDriver() {
    let driverId = 0
    return class Driver{
        constructor(name, id){
            this.name = name
            this.id = ++driverId
        }
    }
}