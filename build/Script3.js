"use strict";
// Enum advance Variable -- constant variables
var Direction;
(function (Direction) {
    Direction[Direction["East"] = 0] = "East";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["West"] = 2] = "West";
    Direction[Direction["North"] = 3] = "North";
})(Direction || (Direction = {}));
if (Direction.East) {
    console.log('Bengol');
}
else if (Direction.North) {
    console.log('Delhi');
}
else if (Direction.West) {
    console.log('Bombay');
}
else if (Direction.South) {
    console.log('indira Point');
}
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Created"] = 201] = "Created";
    StatusCode[StatusCode["TimeOut"] = 503] = "TimeOut";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.NotFound);
let kajal = {
    firstName: 'kajal',
    lastName: 'dule',
    age: 26
};
// code of 17th Nov 2023
// Varibales and types 
// Function and arrow functions 
// Section - 2
// Advances types 
// enums 
// unions  and intersection types
// type guards 
// type aliases
// generics 
// enum -- named const varibles 
// program 1- Numeric enum 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
let myDirection = Direction1.Down;
console.log(myDirection);
console.log(Direction1.Up); //1
console.log(Direction1.Right); //4
console.log(Direction1.Left); //
