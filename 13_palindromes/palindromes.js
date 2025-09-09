const palindromes = function (word) {
  // ^ means not , g means global, or in other words, replace everything not just first one
  const cleanString = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  const reversedString = cleanString.split("").reverse().join("");

  return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
