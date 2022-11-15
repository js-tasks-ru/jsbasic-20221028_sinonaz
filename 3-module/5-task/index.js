function getMinMax(str) {
  // ваш код...
  let numberList;
  let result = {};
  numberList = str
    .split(` `)
    .filter(item => isFinite(item));
  result.max = Math.max(...numberList);
  result.min = Math.min(...numberList);
  return result;
}
