
exports.min = function min (array) {
  if (!array || array.length == 0) return 0;
  let otv = array[0];
  array.forEach(x => {
    if (x < otv) otv = x;
  });
  return otv;
}

exports.max = function max (array) {
  if (!array || array.length == 0) return 0;
  let otv = array[0];
  array.forEach(x => {
    if (x > otv) otv = x;
  });
  return otv;
}

exports.avg = function avg (array) {
  if (!array || array.length == 0) return 0;
  let otv = 0;
  array.forEach(x => {
    otv += x;
  });
  return otv/array.length;
}
