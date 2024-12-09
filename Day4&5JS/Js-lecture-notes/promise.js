function getId() {
  return new Promise((res, rej) => {
    rej("Cannot get Id");
    // res("3");
  });
}

function getPerson(id) {
  const people = [
    { id: "1", name: "Jack" },
    { id: "2", name: "Joe" },
  ];

  return new Promise((res, rej) => {
    const person = people.find((_person) => _person.id === id);
    if (person) {
      res(person);
    } else {
      rej(`Person with id ${id} not found`);
    }
  });
}

async function main() {
  try {
    const id = await getId();
    const person = await getPerson(id);
  } catch (err) {
    console.log(err);
  }

  return;
  getId()
    .then(
      (id) => {
        return getPerson(id);
      }
      // (err) => {
      //   console.log("Get Id Error:", err);
      //   throw new Error();
      // }
    )
    .then(
      (person) => {
        console.log(person);
        console.log("Person info", person.name);
      }
      // (err) => {
      //   console.log("Get person info err:", err);
      // }
    )
    .catch((err) => {
      console.log("Err:", err);
    });
}

const getBeef = async () => {
  return "beef";
};

const cookBeef = async (beef) => {
  if (beef === "beef") return "patty";
  else throw new Error("Missing beef");
};

const getBuns = async () => {
  return "buns";
};

const putBeefBetweenBuns = async (buns, patty) => {
  if (buns === "buns" && patty === "patty") return "burger";
  else {
    throw new Error("Missing ingredient");
  }
};

async function makeBurger() {
  try {
    const beef = await getBeef();
    const patty = await cookBeef(beef);
    const buns = await getBuns();
    const burger = await putBeefBetweenBuns(buns, patty);
  } catch (err) {
    console.log("error", err);
  }
}

function makeBurgerThen() {
  let patty = null;
  getBeef()
    .then((beef) => {
      console.log(beef);

      return cookBeef(beef);
    })
    .then((_patty) => {
      patty = _patty;
      console.log(patty);

      return getBuns();
    })
    .then((buns) => {
      console.log(buns);

      const burger = putBeefBetweenBuns(buns, null);
      return burger;
    })
    .then((burger) => {
      console.log(burger);
    })
    .catch((err) => {
      console.log("Err", err);
    });
}

// fetch("https://something.com/cart", {
//   method: "POST",
// })
//   .then((res) => res.json())
//   .then((data) => {
//     //update your ui with the data
//     console.log("data", data);
//   });

// setTimeout(() => {
//   console.log("1 seconds");
// }, 1000);

// console.log("end");

function foo() {
  let count = 0;
  count++;
  console.log(count);
  return;
}

foo();
foo();
foo();
foo();
foo();

// 1 2 3 4 5
// 1 1 1 1 1
