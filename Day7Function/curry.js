// 1: Breaking Down Functions: A curried function takes multiple arguments but transforms them into a sequence of functions, 
// each taking one argument.
//2: Chaining: Curried functions are invoked in a chain-like manner: fn(arg1)(arg2)(arg3)....
//3: Reusability:By fixing some arguments in advance, you can reuse a partially applied function.

function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(add(1)(2)(3)); // Output: 6
