

// console.log(this) //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// function Booksse() {
//     console.log('function this:',this) 
//     ////Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// }


// const Bookssd = function() {
//     console.log('function this:',this) 
//     //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    
// }
// Booksse();

// Bookssd();


// const Bookssf = ()=> {
//     console.log('arrow function this:',this) 
//     //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

   
// }

// Bookssf()



// const Bookssobj = {
//     name:'rui',
//     greet: ()=> {
//         console.log('arrow function in obj this:',this) 
//     }
// }

// Bookssobj.greet() // //Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// const Bookssobj2 = {
//     name:'rui',
//     greet: function(){
//         console.log('function in obj this:',this) 
       
//     }
// }

// Bookssobj2.greet()// unction in obj this: {name: 'rui', greet: ƒ}


// //class notes
// console.log([].forEach == [].forEach) // true
// console.log([].forEach === [].forEach) // true
// console.log([].map === [].map) // true
// // any of property and methods in same prototype 

const people = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 },
    { id: 4, name: "Diana", age: 28 },
    { id: 5, name: "Ethan", age: 22 }
];

// console.log(people);
const peopleNewArr = people.filter((person) => person.id !== 3);

// console.log(people.bind())//people.bind is not a function
// person prototype don't have the bind method, so than't not a function

//prototype just function only

