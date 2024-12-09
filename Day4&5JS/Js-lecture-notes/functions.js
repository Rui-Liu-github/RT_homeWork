function sayHi(getPerson) {
  const person = getPerson();
  console.log(`Hi my name is ${person.name}`);
}

const getPerson = () => {
  return {
    name: "Jack",
  };
};

// sayHi(getPerson);

// const evenNums = [1, 2, 3, 4].filter((num) => num % 2 === 0);

const button = document.getElementById("day7");

const handleClick = () => {
  console.log("Hi");
};
button.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);

button.removeEventListener("click", handleClick);

function stockController() {
  let stock = 0;
  return {
    buyStock(number = 1) {
      stock += number;
      // console.log(stock)
      // this is return object without stock property
    },
    sellStock(number = 1) {
      if (number > stock) {
        stock = 0;
      } else {
        stock -= number;
      }
    },
    getStock() {
      return stock;
    },
  };
}

// const controller = stockController();
// controller.buyStock(100);
// console.log(controller.getStock());
// controller.sellStock(200);
// console.log(controller.getStock());

let a = "global-a";
(function bar() {
  //parent scope of foo
  const a = "bar-a";

  (function foo() {
    // const a = "foo-a";

    console.log(a);
  })();
})();
