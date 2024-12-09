// this Person, is a constructor function
// es5 syntax
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

// static methods, can only be called by Person
// cannot be called by person instances
Person.personFoo = function () {
  return "iodqjjwdqio";
};

// All instances of Person have access to the Person.prototype.method
Person.prototype.sayHi = function () {
  // string literal / string interpolation
  // the backtick ` symbol, it's under ESC button
  //   console.log(`Hi, my name is ${this.name}, I'm ${this.age} years old`);
  return `Hi, my name is ${this.name}, I'm ${this.age} years old`;
  return undefined;
};

// person1 is an instance
// only the instances have access to the prototype properties
const person1 = new Person("Jack", 11, "M");
const person2 = new Person("Mike", 12, "M");

console.log(Person.personFoo());

// because this is true, the instance can get the prototype properties
// console.log(person1 instanceof Person);

// console.log([1,2,3,4] instanceof Person);

// const person3 = null;

// person1.sayHi();
// person2.sayHi()
// console.log(person1.sayHi() === person2.sayHi());
// console.log(person2);

// arr is an instance of Array
// const arr = new Array(1, 2, 3);

// console.log(arr instanceof Array);

// map, filter always return a new array with a new reference
const newArr = [1, 2, 3].map((num) => {
  return num * 2;
});
console.log(newArr);

const arr1 = [1, 2, 3].map((num) => {
  return num * 2;
});
const arr2 = [1, 2, 3].map((num) => {
  return num * 2;
});
// console.log(arr1 === arr2);

const buttons = document.querySelectorAll(".btn");
console.log(buttons);
console.log(buttons instanceof Array);

console.log(buttons.filter);
console.log([1, 2, 3].filter);

const filteredButton = [];
buttons.forEach((button) => {
  if (button.textContent !== "click me") {
    filteredButton.push(button);
  }
});
console.log(filteredButton);

const foo = function () {
  console.log("this", this);
};

const newFoo = foo.bind({ a: "a" });
// foo.bind
// newFoo()
