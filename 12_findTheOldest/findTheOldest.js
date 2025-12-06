const findTheOldest = function (arr) {
  // const newArr = arr
  //   .map((element, index, array) => {
  //     if (
  //       !element.yearOfBirth ||
  //       !element.yearOfDeath ||
  //       element.yearOfDeath === "undefined"
  //     )
  //       return;
  //     const age = element.yearOfDeath - element.yearOfBirth;
  //     return { ...element, age };
  //   })
  //   .sort((a, b) => b.age - a.age);
  // return newArr[0];

  const getOldest = arr.reduce((a, b) => {
    if (!a.yearOfDeath || !b.yearOfDeath) {
      return a.yearOfBirth < b.yearOfBirth ? a : b;
    } else {
      return a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth
        ? a
        : b;
    }
  }, 0);

  return getOldest;
};
const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

// const people = [
//   {
//     name: "Carly",
//     yearOfBirth: 1942,
//     yearOfDeath: 1970,
//   },
//   {
//     name: "Ray",
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//   },
//   {
//     name: "Jane",
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//   },
// ];

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
