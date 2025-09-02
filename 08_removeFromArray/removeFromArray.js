const removeFromArray = function (array, ...items) {
  return array.filter((element) => !items.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
