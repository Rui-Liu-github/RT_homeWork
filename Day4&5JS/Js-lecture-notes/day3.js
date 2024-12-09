// document.getElementById("getNum").addEventListener("click", (e) => {
//   const num = document.getElementById("num-input").value;
//   //   we did this intentionally and manually, this is call "type conversion"

//   //   console.log(Number(num) + 100);
//   console.log(+num + 100);
// });

// if (0 === undefined) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// because a is reference data, it is an array or object, it could be very large
const a = [
  1, 2, 3, 4, 5, 56, 1, 2, 3, 4, 5, 56, 1, 2, 3, 4, 5, 56, 1, 2, 3, 4, 5, 56, 1,
  2, 3, 4, 5, 56, 1, 2, 3, 4, 5, 56, 1, 2, 3, 4, 5, 56, 1, 2, 3, 4, 5, 56, 1, 2,
  3, 4, 5, 56,
];
const b = a;
// console.log(a === b);

a[0] = 10000;
// console.log(a === b);

let num1 = 1;
let num2 = num1;
num1 = 100;
// console.log(num2);

// console.log(1 + "1");

const person = {
  name: "Jack",
  age: 11,
  gender: "M",
  phone: "123",
  email: "@gmail.com",
  address: {
    street: "123 React Str",
    zip: "12345",
  },
};

// person.name = "Mike"

// function foo(person) {
//   person.name = "Mike";
// }
// foo(personCopy);

const personCopy = {
  name: person.name,
  age: person.age,
  gender: person.gender,
  phone: person.phone,
  email: person.email,
  address: person.address,
  //   ...person,
};

personCopy.address = {
  street: "some other street",
  zip: "00000",
};

// console.log(personCopy.address == person.address);

personCopy.address.zip = "12412412412412";
// console.log(person);
// console.log(personCopy);

// console.log(person.address == personCopy.address);

// JavaScript compares objects by reference, not value.
// so it will always be false
// console.log([] === []);
// console.log({} == {});

// console.log(person == personCopy);
// console.log(personCopy);

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  ...obj1,
  c: 4,
};

const personTwin = {
  ...person,
  name: "Jack Twin",
};

console.log(obj2);

// ...obj1 is literally:
// a: obj1.a,
// b: obj1.b,
// c: obj1.c,
