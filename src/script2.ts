let a:number = 10

// program 1

function addition(x:number, y:number){
    return x+y
}

let q1 = addition(12, 5)
console.log(q1)

// program 2

function addition1(x:number, y:number):number{
    return x+y
}

let q2 = addition1(12,55)
console.log(q2)

// program 3

function addition2(x:number,y:number):void{
    console.log(x+y)
}
addition2(23,5)

//program 4

function addition3(x:number,y:number,Avail:boolean,msg:string){
    if(Avail){
        console.log(`${msg}${x+y}`)
    }
}
addition3(13,3,true,'perform the addition of two numbers')

//program 5 -- defining arrays with different datatypes 

let numbers:number[] = [11,22,33,44,55]
let names:string[] = ['kajal','sapna','suraj','avanti']
let bio1:[string,number,number] = ['kajal',26,39]
let bio2:[string , number , boolean] = ['kajal',26,true]

//program 6

let info1 = {
    firstName:'kajal',
    lastName :'dule'
}

let info2 :{firstName:string,lastName:string,age:number};
info2 = {
    firstName:'kajal',
    lastName:'Dule',
    age:26

}

type person = {firstName:string, lastName:string}
let info3:person = 
{
    firstName:'kajal',
    lastName:'dule'
}

// assigning roles or name constant variables

enum Roles {
    admin,
    customer,
    Support,
    infra
}

if(Roles.admin){
    console.log('i am Admin')
}
else if (Roles.customer){
    console.log('i am Customer')
}
else if(Roles.Support){
    console.log('i am Support')
}
else if(Roles.infra){
    console.log('i am infra')
}



