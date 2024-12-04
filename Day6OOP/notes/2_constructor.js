// constructor & constructor function


function Book(title, author, year) {
    this.title = title; // refer to whatever instance
    this.author = author;
    this.year = year;
    
    // this.getSummary = function() {
    //     return `${this.title} was written by ${this.author} in ${this.year}`; 
    // }
}

// it still works to create method, but it is now stored in the prototype rather than in the object itself !!
// if we're not gonna get the method for every book (reason)
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`; 
}


Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
} 

//revise year
Book.prototype.reviseYear = function(newYear) {
    this.year = newYear;
   // this.revised = true;
}

const book1 = new Book('Book One', 'Rui Liu', '2020');
const book2 = new Book('Book Two', 'nsdhw', '2019');


// console.log(book1) // get book object, and object prototype methods (every object inherites them)

// Prototype methods:
// console.log(book1.getSummary()) //Book One was written by Rui Liu in 2020
// console.log(book2.getAge())//Book Two is 5 years old
// console.log(book2)
// book2.reviseYear('2018')
// console.log(book2)

// static 


