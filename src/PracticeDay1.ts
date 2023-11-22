// program 1

let a1:number = 10
a1 = 23
console.log(a1)

// program 2

function additionA(x:number,y:number){
    return x+y
}

let a2 = additionA(12,3)
console.log(a2)

// program 3

let x:number = 10
console.log(x)

let y:string = 'kajal'
console.log(y)

let z:boolean = true
console.log(z)

let names1:string [] = ['kajal','sapna','avanti']
console.log(names1)

let numbers1:number [] = [11,22,33,44,55,66,77]
console.log(numbers1)

let infoA:[string, number] = ['kajal',27]
console.log(infoA)

let infoB:{firstName:string, lastName:string, age:number} = {
    firstName :'kajal',
    lastName : 'dule',
    age : 26
}
console.log(infoB)

type personA = {firstName:string, lastName:string, RollNo:number}
let bio:personA = {
    firstName :'kajal',
    lastName : 'dule',
    RollNo : 77
}

console.log(bio)


