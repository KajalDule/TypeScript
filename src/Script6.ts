//program 1 defining function using arrow function

let multiple = (x:number,y:number):number=>{
    return x+y
}
console.log(multiple(12,5))

// program 2

let addtionH = (x:number,y:number):number => {return x+y}

// program 3
class Details{
    value:number = 2

    display = ():string => {
        return "welcome"
    }
}

// program 4
// function declaration example

function additionL(x:number,y:number):number{
    return x+y
}

// function expression

let additionX = function(x:number,y:number):number {
    return x+y
}

// arrow function

let additionH = (x:number,y:number):number =>{
    return x+y
}
// Or 

let addNumb = (x:number,y:number):number => x+y


// Interface 

// Program 1

interface StudentA {
    firstName : string,
    lastName : string,
    rollNo : Number
}

let Kajal:StudentA ={
    firstName :'Kajal',
    lastName : 'Dule',
    rollNo :23
}

// program 2 - Interface Example2 --

interface TeacherA {
    subject:string,
    attendance:string,
    remarks?:string
}

let SapnaA:TeacherA = {
    subject : 'FD',
    attendance:'Full',
    remarks:'Good performance'
}

let SurajA:TeacherA = {
    subject:'History',
    attendance:'fifty Percent'
}

// program 3 --  these are readonly elements/values ; we can not change/update the values once defined
interface Point {
    readonly x:number,
    readonly y:number
}

let pointA:Point = {
    x:12,
    y:13
}

//pointA.x = 133





