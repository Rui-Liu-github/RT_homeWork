//type checking, code completion, refactoring, new features (write clear and more concise code)

//.ts -> compiler(the process call transpilation) -> javascript
// just run "tsc", will run all typescript files in this project
// run "tsc node_vido.ts", will compile this file into js file

//1:run "tsc --init" will create a tsconfig.json file

//2:how to debug ts application in vscode
//1: config tsconfig.json file, enable "sourceMap": true, -> how the ts code map to js code, -> to check the .map file
//2: create a break point, to start debugging the execution and stop at the breakpoint
// create a launch.json file,  add "preLaunchTask": "tsc: build - tsconfig.json"( "tsc: build - Day9Typescript/tsconfig.json")

//3:
let age:number = 20;
let course:string = 'typescript';
let is_published = true;
const f:null = null;
const g:undefined = undefined;
let level; //any type

function sayHi(name:number) {

}
//4:
//create a empty array
let numbers: number[] = []; // const arr1:Array<number> = [];

//5: tuple to define each element type
//tuple is a fixed length, each element  has a particular type
let user:[number, string] = [1, 'ruby'];// tuple is very useful when we have only 2 values like key value pairs

//user[1]. // see all string methods and property


//6: enum

const enum Size {Small, Medium,Large}
const size = Size.Medium;
console.log(size) // 1

enum SizeTwo {Small = 1, Medium,Large}
console.log(SizeTwo.Medium)//2

enum SizeThree {Small = 's', Medium = 'm',Large = 'l'}
console.log(SizeThree.Medium)//m


//7: function

function calculateTax(income:number):number {
    
    return 0;//return value must be a number type;
}

function calculateTax2(income:number):number {
    
   if (income < 50000) {
    return income * 2;
   } 
   return 0; // return undefined included if no return 
}

//8: objects
//in js, can add property in outside using:'.' dot point
// let employee = {id: 1};
// employee.name = 'ruby';//Property 'name' does not exist on type '{ id: number; }'.ts(2339)

let employee:{
    id:number,
    name:string
}= {id: 1, name:'ruby'};

let employee2:{
    id:number,
    name?:string // name is optional, but it's not good
}= {id: 1};
employee2.name = 'ruby'; // can add in outside

//make some objects read only and don't change later
//use 'readonly' keyword
let employees:{
    readonly id:number,
    name:string
}= {id: 1, name:'ruby'};
// employees.id = 2 //error,  id is read only

//create fuction in objects
let employee4:{
    readonly id:number,
    name:string,
    retire:(data: Date) =>void
    // a type Date built in js and ts
    //no return value, use void
}= {id: 1,
    name:'ruby',
    retire: (data: Date) =>{
        console.log(data)
    }
 };

 //9: advanced types
 //type aliases: to reuse types and simplify your code
 //use unions and intersections: to combine types 
 //type narrowing  
 //nullable types
 //unknown types
 //never types 

  //type aliases: 
  //define the shape of the object using alias
  type Employee = {
    readonly id:number,
    name:string,
    retire:(data: Date) => void
  }

  let employee5:Employee = {
    id: 1,
    name:'ruby',
    retire: (data: Date) =>{
        console.log(data)
    }
  }

  console.log(employee5)
