"use strict";
//enum 
var Colour;
(function (Colour) {
    Colour[Colour["Green"] = 0] = "Green";
    Colour[Colour["Blue"] = 1] = "Blue";
    Colour[Colour["Black"] = 2] = "Black";
})(Colour || (Colour = {}));
if (Colour.Black) {
    console.log('color is Black');
}
else if (Colour.Blue) {
    console.log('color is Blue');
}
else if (Colour.Green) {
    console.log('color is Green');
}
// any -- it will allow all data type values
let numberA = 23;
let numberB = 22;
let numberC = [11, 22, 33];
let numberD = 'kajal';
let numberE = {
    name: 'kajal',
    age: 26
};
// void -- it will return nothing
function additionTest() {
    console.log('this function will return nothing');
}
// function with Any
function additionAny() {
    console.log('it will display or return any data type value');
    return "hello!";
}
let q1 = additionAny();
console.log(q1);
// null -- we can define any variable with null value
let apiResponsestatus = null;
//undefined - we can define any variable with undefined value
let CountryName = undefined;
// writing functions with typescript 
// there are mainly three types of functions 
// 1> function declaration
// 2> function expression
// 3> arrow function
// 1> function declaration
function declaration_function(x, y) {
    console.log('function declaration');
    return x + y;
}
let q2 = declaration_function(12, 5);
console.log(q2);
// 2> function expression
let Expression_function = function (x, y) {
    console.log('function Expression');
    return x + y;
};
let q3 = Expression_function(3, 4);
console.log(q3);
// optional parmeter -- it will allow user to make any passing parameter optional while calling function
function greet(name, greeting) {
    // greeting ----> undefined
    if (greeting) {
        console.log("greeting value was  passed");
    }
    else {
        console.log("greeting value was not passed");
    }
}
greet("hello", "bye");
greet("bye");
// 3> arrow function
