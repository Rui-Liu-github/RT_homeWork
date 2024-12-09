//note1 
function sayHi(getPerson) {
    const person = getPerson();
    console.log('666')
}

const getPerson = () => {
    return {
        name:"Jack"
    }
}

// sayHi(getPerson) // 666
// console.log(sayHi(getPerson))//undefined no return 
// console.log(sayHi(getPerson()))//getPerson is not a function


//////
function sayHi2(getPerson) {
    const person = getPerson2();
    // console.loh('666')
}
// if there are nested 
const getPerson2 = ()=>() => {
    return {
        name:"Jack"
    }
}

// sayHi(getPerson2())
// console.log(sayHi(getPerson2())) ////can call like this, but still undefined


/// note2:
button.addEventListener("click", () => {
    console.log("Hi");
});

button.removeEventListener("click", () => {
    console.log("Hi");
});
// because there are different event function. click event will continue to execute.

// how to revise
const handleClick = () => {
    console.log("Hi");
};

button.addEventListener("click", handleClick); // Adds the event listener
button.removeEventListener("click", handleClick); // Removes the same event listener


//notes3:

function stockController() {
    let stock = 0;

    return {
        buyStock: function() {
            stock++;
            return Number(`${stock}`);
        }
    }
}

// const runStock = stockController();
// console.log(runStock.buyStock())

