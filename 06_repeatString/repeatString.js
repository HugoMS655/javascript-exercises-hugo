const repeatString = function (word, num) {
  if (times < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < num; i++) {
    string += word;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
