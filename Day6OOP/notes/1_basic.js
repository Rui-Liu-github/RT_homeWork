
//Object Literal
const s1 = 'Hello';
// console.log(typeof s1);//string so this is a primetive, not a object


const s2 = new String('Hello');
// console.log(typeof s2) //object

// console.log(window)// object

const book = {
    title:'Ruby Book One',
    author:'Rui Liu',
    year:'2020',
    summary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`; 
    }
}

// console.log(book.summary())//Ruby Book One was written by Rui Liu in 2020
// console.log(Object.values(book))//['Ruby Book One', 'Rui Liu', '2020', ƒ]
// console.log(Object.keys(book))//['title', 'author', 'year', 'summary']


//general methods
// Copies properties from a source object to a target object
// Object.assign(target, source)

// Creates an object from an existing object
// Object.create(object)

// Returns an array of the key/value pairs of an object
// Object.entries(object)

// Creates an object from a list of keys/values
// Object.fromEntries()

// Returns an array of the keys of an object
// Object.keys(object)

// Returns an array of the property values of an object
// Object.values(object)

// Groups object elements according to a function
// Object.groupBy(object, callback)