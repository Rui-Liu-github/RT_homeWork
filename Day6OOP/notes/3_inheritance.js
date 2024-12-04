function Book(title, author, year) {
    this.title = title; // refer to whatever instance
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`; 
}



//create magazine constrctor

function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

//inherit prototype
Magazine.prototype = Object.create(Book.prototype);

// create instance
const maga1 = new Magazine('Mag one', 'Rui Liu', '2000', 'Jan');

//use Magazine constrctor
Magazine.prototype.constructor = Magazine;
// console.log(maga1)