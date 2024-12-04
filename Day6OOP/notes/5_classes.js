

class Books { 
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

    //create static method, 
    //don't need to create instance, use class to call it directly
    static topBookStore() {
        return 'Ruby & Liu';
    }

}

const Book4 = new Books('Book One', 'Rui Liu', '2016');
// console.log(Book4);//Books {title: 'Book One', author: 'Rui Liu', year: '2016'}
Book4.reviseYear('2015');
// console.log(Book4);//Books {title: 'Book One', author: 'Rui Liu', year: '2015'}

const topStore = Books.topBookStore();
// console.log(topStore)//Ruby & Liu