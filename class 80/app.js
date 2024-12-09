//es6
// variable scoping
// spread operator   ...
//destructured
//for of
//for in
//ternary operator
//arrow function
//temperal literals 
// callback function
//map 



// let arr1 = [1,2,3,4]    //000111
// let arr2 = arr1   //ref 000111  
// console.log(arr1) //[1,2,3,4]
// console.log(arr2) //[1,2,3,4]
// arr2.pop()        
// console.log(arr1) //[1,2,3]
// console.log(arr2) //[1,2,3]

let arr1 = [1,2,3,4]
let arr2 = [...arr1]
console.log(arr1)
console.log(arr2)
arr2.pop()
console.log(arr1)
console.log(arr2)


// let arr3 = ['minhaj', 'ali', 'hasseb']
// let firstName = arr3[0]
// let  [firstName, , lastName] = arr3
// console.log(firstName)
// console.log(lastName)

let stdObj = {
    firstName: 'Minhaj',
    lastName: 'wahid',
    rollNo: '123',
    sec: 'A'
}

let LastName = stdObj.lastName
// console.log(LastName)

let {lastName, firstName} = stdObj
console.log(lastName)
console.log(firstName)

//ternary operator
let age = 23
// if(age >=18){
//     console.log('allow')
// }else{
//     console.log('not allow')
// }

// condition ? truevalue : falsevalue
age>=18 ?  console.log('allow') : console.log('not allow')

let num = 66
// if(num%2==0){
//     console.log('even')
// }else{
//     console.log('odd')
// }

num%2==0 ? console.log('even') : console.log('odd')

// try {
//     num%2==0 ? console.log('even') : console.log('odd')
// } catch (error) {
//     console.log(error)
// }

// console.log('age ka kaam chale ga')

// nested ternary 
let temperature = 11

let temperatureCheck = temperature > 30 ? 'hot' : temperature > 20 ? 'warm' : temperature > 10 ? 'cold' : 'too cold'
console.log(temperatureCheck)

//arrow function
// function sum(a,b){
//     console.log(a+b)
// }

// sum(4,4)

// let sum = (a,b)=>{
//     console.log(a+b)
// }
// sum(3,4)

// let sum = (a,b)=> console.log(a+b)
// sum(3,4)

// function sum(a,b){
//     return c = a+ b
// }

// console.log(sum(4,5))

// let sum = (a,b)=> a+b
// console.log(sum(2,7))

// let fName = name => console.log('hello ' + name)
//temperal  literals
let fName = name => console.log(`Hello ${name} !`)
fName('minhaj')


console.log('Hello ' + firstName + " " + lastName + ", How are you! ")
console.log(`hello ${firstName} ${lastName} , How are you!`)

//callback functions
// function orderPizza(callFriend){
//     console.log('order pizza')
//     setTimeout(()=> {
//         console.log('pizza agaya')
//         callFriend()
//     }, 3000)
// }

// function callFriend(){
//     console.log('dost ko call kari')
// }

// orderPizza(callFriend)

// function foo(callback){
//     console.log('function 1')
//     callback()
// }
// function bye(){
//     console.log('function 2')
// }

// foo(bye)



var a = 5
var b = 23
// var [b,a] = [a,b]
// console.log(`a===>>> ${a}`,`b===>${b}`)

 a = a + b  //5 + //23 => 28
 b = a- b // 28 - 23  => 5
 a = a-b   //28 - 5  => 23
 console.log(`a===>>> ${a}`,`b===>${b}`)

 //map
let arr4 = [2,4,6,8]
let arr5 = arr4.map((value, index)=>{
    return value * 2
})

console.log(arr5)
arr5.pop()
console.log(arr4)
console.log(arr5)