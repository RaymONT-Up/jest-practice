const multiplyArrayNumbers = (array, multiplier) => {
  if (multiplier === 1) return array;
  return array.map((num) => num * multiplier);
};

module.exports = validateValue = multiplyArrayNumbers;
