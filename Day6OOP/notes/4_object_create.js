
// object of protos
const bookPro = {
    getSummary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`; 
    },

    getAge:function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

//create otehr objects
//// Creates an object from an existing object

// const book3 = Object.create(bookPro);

// book3.title = 'Book One';
// book3.author = 'Rui Liu';
// book3.year = '2018';

// console.log(book3)//{title: 'Book One', author: 'Rui Liu', year: '2018'}. and methods in the object prototype


const book3 = Object.create(bookPro, {
    title:{value: 'Book One'},
    author:{value:'Rui Liu'},
    year:{value:'2018'}
});


// console.log(book3) // get same things with above