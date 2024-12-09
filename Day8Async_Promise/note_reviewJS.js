function noReturn() {
    // console.log("This function does not explicitly return anything.");
  }
  
  const result = noReturn(); // Calls the function
  
//   console.log(result); // Logs 'undefined'
  

// 2:
  const noReturnArrow = () => {
    // console.log("This arrow function does not return anything.");
  };
  
  const result2 = noReturnArrow(); // Calls the arrow function
  
//   console.log(result2); // Logs 'undefined'
  

// 3:
  const person= {
    name:'Tack',
    age:13
  }

  const personCopy = {
    name: person.name, // pass primitive value
    age: person.age
  }

  function foo (person) {
    person.name = 'mike';
    return person;
  }

//   console.log(foo(personCopy))// {name: 'mike', age: 13}
//   console.log(person) // {name: 'Tack', age: 13}

// // if pass them to a function, they are still reference type, so still are modified
//   console.log(personCopy) // {'mike', age: 13}


//4: 
const person2= {
    name:'Tack',
    age:13
  }

  const personCopy2 = {
    // name: person.name, // pass primitive value
    // age: person.age
    ...person,
  }

  function foo2 (person) {
    person.name = 'mike';
    return person;
  }

//   console.log(person2 == personCopy2) // false 
//   console.log(person2 === personCopy2) // false 
//   console.log([] == []); // false 
//   console.log([] === []); // false 


//5:
const person3= {
    name:'Tack',
    age:13
  }

  const personCopy3 = person3;

  function foo3 (person) {
    person.name = 'mike';
    return person;
  }

  console.log(person3 == personCopy3) // true
  console.log(person3 === personCopy3) // true