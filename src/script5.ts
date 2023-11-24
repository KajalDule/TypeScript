//enum 

enum Colour {
    Green,
    Blue,
    Black
}

if(Colour.Black){
    console.log('color is Black')
}

else if(Colour.Blue){
    console.log('color is Blue')
}

else if(Colour.Green){
    console.log('color is Green')
}

// any -- it will allow all data type values

let numberA:number = 23
let numberB:any = 22
let numberC:any = [11,22,33]
let numberD:any = 'kajal'
let numberE:any = {
    name:'kajal',
    age:26
}

// void -- it will return nothing

function additionTest():void{
    console.log('this function will return nothing')
}

// function with Any

function additionAny():any{
    console.log('it will display or return any data type value')
    return "hello!"
}
q1 = additionAny()
console.log(q1)

// null -- we can define any variable with null value

let apiResponsestatus:null = null

//undefined - we can define any variable with undefined value

let CountryName:undefined = undefined

// writing functions with typescript 
// there are mainly three types of functions 
// 1> function declaration
// 2> function expression
// 3> arrow function

// 1> function declaration

function declaration_function(x:number,y:number){
    console.log('function declaration')
    return x+y
}
q2 = declaration_function(12,5)
console.log(q2)

// 2> function expression

let Expression_function = function(x:number,y:number){
    console.log('function Expression')
    return x+y

}

let q3 = Expression_function(3,4)
console.log(q3)

// optional parmeter -- it will allow user to make any passing parameter optional while calling function

function greet(name:string , greeting?:string){
    // greeting ----> undefined
    if(greeting){
        console.log("greeting value was  passed")
    }
    else {
        console.log("greeting value was not passed")
    }
}
greet("hello","bye")
greet("bye")


// 3> arrow function


