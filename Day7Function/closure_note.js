// case 1
//The innerFunction has access to outerVariable from outerFunction, 
// even after outerFunction has returned.

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    };
}

const newFunction = outerFunction("outside");
// console.log(newFunction)
//output is the inner func
// ƒ innerFunction(innerVariable) {
//     console.log(`Outer Variable: ${outerVariable}`);
//     console.log(`Inner Variable: ${innerVariable}`);
// }

// console.log(newFunction("inside call")) // undefined, because no return value for inner function

newFunction("inside call")
// Output:
// Outer Variable: outside
// Inner Variable: inside call


// case 2: The count variable is private to the createCounter function.

function createCounter() {
    let count = 0; // private variable
    return {
        increment: function() {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement: function() {
            count--;
            console.log(`Count: ${count}`);
        }
    };
}

// const counter = createCounter();
// console.log(counter.count) // undefined 
// //the count variable is declared within the createCounter function.
// //not directly accessible because it is enclosed 

// // Private Variable Access via Methods
// counter.increment(); // Count: 1
// counter.decrement(); // Count: 0


// case 3: delays the execution of a callback 
// until a certain amount of time has passed since the last call.

function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

const log = debounce(() => console.log("Debounced!"), 1000);
// log(); // Will only log if 1 second passes without another call to log

//Rest 参数: ...args, 以 ... 开头，后面跟一个变量名, 将不确定数量的参数收集到一个数组中

//case 4: A throttle function
// ensures that a callback is executed at most once within a specified interval.

function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        const context = this;
        const now = Date.now();
        
        if (!lastRan) {
            func.apply(context, args);
            lastRan = now;
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if (now - lastRan >= limit) {
                    func.apply(context, args);
                    lastRan = now;
                }
            }, limit - (now - lastRan));
        }
    };
}

const logThrottle = throttle(() => console.log("Throttled!"), 2000);
// logThrottle(); // Will only log at most once every 2 seconds


//youtube video notes

