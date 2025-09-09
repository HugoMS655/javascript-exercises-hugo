function calculateAge(dateOfBirth, dateOfDeath) {
  if (dateOfDeath === undefined) {
    dateOfDeath = new Date().getFullYear();
  }
  return dateOfDeath - dateOfBirth;
}

const findTheOldest = function (peopleArray) {
  let result = 0;
  let oldest = peopleArray[0];
  let age;
  for (let i = 0; i < peopleArray.length; i++) {
    age = calculateAge(peopleArray[i].yearOfBirth, peopleArray[i].yearOfDeath);
    if (age > result) {
      result = age;
      oldest = peopleArray[i];
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
