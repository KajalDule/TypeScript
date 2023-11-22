// Enum advance Variable -- constant variables

enum Direction {
    East,
    South,
    West,
    North
}

if(Direction.East){
    console.log('Bengol')
}
else if(Direction.North){
    console.log('Delhi')
}
else if(Direction.West){
    console.log('Bombay')
}
else if(Direction.South){
    console.log('indira Point')
}


enum StatusCode {
    NotFound = 404,
    Success = 200,
    Created = 201,
    TimeOut = 503
}
console.log(StatusCode.NotFound)


type Person = {
    firstName:string,
    lastName:string,
    age:number
}
let kajal:Person = {
    firstName:'kajal',
    lastName:'dule',
    age:26
}


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

enum Direction1{
    Up =1,
    Down,
    Left,
    Right
}

let myDirection:Direction1 = Direction1.Down
console.log(myDirection)
console.log(Direction1.Up)//1
console.log( Direction1.Right)//4
console.log( Direction1.Left)//

