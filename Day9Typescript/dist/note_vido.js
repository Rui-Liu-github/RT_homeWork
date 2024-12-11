"use strict";
let age = 20;
let course = 'typescript';
let is_published = true;
const f = null;
const g = undefined;
let level;
function sayHi(author) {
    return author;
}
sayHi(10);
let numbers = [];
let user = [1, 'ruby'];
const size = 1;
console.log(size);
var SizeTwo;
(function (SizeTwo) {
    SizeTwo[SizeTwo["Small"] = 1] = "Small";
    SizeTwo[SizeTwo["Medium"] = 2] = "Medium";
    SizeTwo[SizeTwo["Large"] = 3] = "Large";
})(SizeTwo || (SizeTwo = {}));
console.log(SizeTwo.Medium);
var SizeThree;
(function (SizeThree) {
    SizeThree["Small"] = "s";
    SizeThree["Medium"] = "m";
    SizeThree["Large"] = "l";
})(SizeThree || (SizeThree = {}));
console.log(SizeThree.Medium);
function calculateTax() {
    return 0;
}
function calculateTax2(income) {
    if (income < 50000) {
        return income * 2;
    }
    return 0;
}
let employee = { id: 1, name: 'ruby' };
let employee2 = { id: 1 };
employee2.name = 'ruby';
let employees = { id: 1, name: 'ruby' };
let employee4 = { id: 1,
    name: 'ruby',
    retire: (data) => {
        console.log(data);
    }
};
let employee5 = {
    id: 1,
    name: 'ruby',
    retire: (data) => {
        console.log(data);
    }
};
console.log(employee5);
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2;
    }
    else {
        return parseInt(weight) * 2;
    }
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name) {
        console.log(name);
    }
    else {
        console.log('Hole');
    }
}
greet(null);
greet(undefined);
//# sourceMappingURL=note_vido.js.map