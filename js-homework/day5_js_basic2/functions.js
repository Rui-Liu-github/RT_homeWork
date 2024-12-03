export function sum(a = 0, b = 0) {
  // write a function that takes two numbers as arguments and returns their sum
  // argument default values are 0
  // if wrong data type is passed, throw an error
  // Define your function here

    // if (typeof a !== 'number' && typeof b !== 'number') {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error(('wrong data type is passed, throw an error'));
    }

    if (a == null) {
      return b;
    }

    if (b == null) {
      return a;
    }

    return a + b;

}

// export function sumOfAll() {
//   // write a function that takes any number of arguments and returns their sum
//   // if wrong data type is passed, throw an error
//   // Define your function here
//   return () => {
    

//   };
// }
export function sumOfAll(...args) {
  if (args.some((arg) => typeof arg !== "number")) {
    throw new Error("Arguments must be number type");
  }

  return args.reduce((acc, val) => acc + val, 0);
}

