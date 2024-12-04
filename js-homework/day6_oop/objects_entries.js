const people = {
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
  3: { name: "Charlie", age: 35 },
};

// get the average age of the people
export const getAverageAge = (people) => {

  const ageArr = Object.values(people);
  let sumAge = 0;

  ageArr.map((peopleObj) => {
    sumAge += peopleObj.age;
  });

  return Number(sumAge / ageArr.length);
};
