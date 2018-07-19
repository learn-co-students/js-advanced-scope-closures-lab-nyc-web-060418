function produceDrivingRange(blockRange){
  return function (x, y){
    x = parseInt(x.slice(0, -2));
    y = parseInt(y.slice(0, -2));

      const dist = y - x;



    if (blockRange >= dist) {
      const blockDiff = blockRange - dist;
      return `within range by ${blockDiff}`
    }
    else {
      const blockDiff = dist - blockRange;
      return `${blockDiff} blocks out of range`
    }
  }
}

function produceTipCalculator(percent){
  return function (cost){
    return cost * percent

  }
}
