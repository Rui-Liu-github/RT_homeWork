

console.log(this) //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

function Booksse() {
    console.log('function this:',this) 
    ////Window {window: Window, self: Window, document: document, name: '', location: Location, …}
}


const Bookssd = function() {
    console.log('function this:',this) 
    //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    
}
Booksse();

Bookssd();


const Bookssf = ()=> {
    console.log('arrow function this:',this) 
    //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

   
}

Bookssf()



const Bookssobj = {
    name:'rui',
    greet: ()=> {
        console.log('arrow function in obj this:',this) 
    }
}

Bookssobj.greet() // //Window {window: Window, self: Window, document: document, name: '', location: Location, …}


const Bookssobj2 = {
    name:'rui',
    greet: function(){
        console.log('function in obj this:',this) 
       
    }
}

Bookssobj2.greet()// unction in obj this: {name: 'rui', greet: ƒ}


