"use strict";
let a = 10;
// program 1
function addition(x, y) {
    return x + y;
}
let q1 = addition(12, 5);
console.log(q1);
// program 2
function addition1(x, y) {
    return x + y;
}
let q2 = addition1(12, 55);
console.log(q2);
// program 3
function addition2(x, y) {
    console.log(x + y);
}
addition2(23, 5);
//program 4
function addition3(x, y, Avail, msg) {
    if (Avail) {
        console.log(`${msg}${x + y}`);
    }
}
addition3(13, 3, true, 'perform the addition of two numbers');
//program 5 -- defining arrays with different datatypes 
let numbers = [11, 22, 33, 44, 55];
let names = ['kajal', 'sapna', 'suraj', 'avanti'];
let bio1 = ['kajal', 26, 39];
let bio2 = ['kajal', 26, true];
//program 6
let info1 = {
    firstName: 'kajal',
    lastName: 'dule'
};
let info2;
info2 = {
    firstName: 'kajal',
    lastName: 'Dule',
    age: 26
};
// assigning roles or name constant variables
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["customer"] = 1] = "customer";
    Roles[Roles["Support"] = 2] = "Support";
    Roles[Roles["infra"] = 3] = "infra";
})(Roles || (Roles = {}));
if (Roles.admin) {
    console.log('i am Admin');
}
else if (Roles.customer) {
    console.log('i am Customer');
}
else if (Roles.Support) {
    console.log('i am Support');
}
else if (Roles.infra) {
    console.log('i am infra');
}
