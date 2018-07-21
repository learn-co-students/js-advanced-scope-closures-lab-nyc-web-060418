function produceDrivingRange(blockRange){
  return function(x, y){
    let diff = Math.abs(parseInt(x) - parseInt(y));
    let range = Math.abs(blockRange - diff);
    return blockRange > diff ? `within range by ${range}` : `${range} blocks out of range`
  }
}

function produceTipCalculator(percent){
  return function(bill){
    return percent * bill;
  }
}
