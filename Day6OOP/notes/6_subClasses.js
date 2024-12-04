class Bookss { 
    constructor(title, author, year) {
        this.title = title; // refer to whatever instance
        this.author = author;
        this.year = year;
        
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`; 
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    } 

    reviseYear(newYear) {
        this.year = newYear;
       // this.revised = true;
    }

    static topBookStore() {
        return 'Ruby & Liu';
    }

}

// Magazine as subclass
class Magazines extends Bookss {
    constructor(title, author, year, month) {
        super(title, author, year); // pass the original Books parameters
        this.month = month;
    }


}

const mag1 = new Magazines('Book One', 'Rui Liu', '2016', 'Jan');

// console.log(mag1)//
// console.log(mag1.getSummary())//