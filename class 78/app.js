'use strict'
var firstName = 'minhaj'
console.log(firstName)

let lastName = 'wahid'
console.log(lastName)

const rollNo = 123
console.log(rollNo)

// re initilize
firstName = 'haseeb'
console.log(firstName)

lastName = 'sheikh'
console.log(lastName)

// rollNo = 786
// console.log(rollNo)


// var is a function scope
var num = 2
function sum(){
    num = num + 3
    console.log(num)
    var num2 = 1
    
}

console.log(num)
// console.log(num2)
sum()

//let
let num3 = 4
function dummy(){
    let num4 =  1
    if(num3 == 4){
        num4 = num4 + 1
    }
    console.log(num4)
}
dummy()


// var num5 = 45
// var num5 = 46
// console.log(num5)

// let num5 = 23
// let num5 = 24
console.log(num5)