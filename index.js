 function produceDrivingRange(blockRange) {
  return function(pointA, pointB) {
    let distance = parseInt(pointB) - parseInt(pointA)
    diff = distance - blockRange
    // debugger
    if (diff > 0) {
      return `${diff} blocks out of range`
    } else {
      return `within range by ${Math.abs(diff)}`
    }
  }
}
//test to see if i can call closure like this
// function combination(pointA,pointB, blocks) {
//     var test = produceDrivingRange(blocks)
//     return test(pointA, pointB)
// }

function produceTipCalculator(percentage) {
  return function (cost) {
    return cost * percentage
  }
}
