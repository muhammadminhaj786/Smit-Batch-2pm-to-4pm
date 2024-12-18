// //es6
// // variable scoping
// // spread operator   ...
// //destructured
// //for of
// //for in
// //ternary operator ? :
// //arrow function =>
// //temperal literals  ``
// // callback function
// // higher order function
// //exponentiation operator **
// //map 
// //forEach
// //conditional chaining  ? 
// //promises
//async await
//array methods
//modules

import { add, sub } from "./math.js"

// // [
// //     {},
// //     {},
// //     {}
// // ]

// // let arr1 = [1,2,3,4]    //000111
// // let arr2 = arr1   //ref 000111  
// // console.log(arr1) //[1,2,3,4]
// // console.log(arr2) //[1,2,3,4]
// // arr2.pop()        
// // console.log(arr1) //[1,2,3]
// // console.log(arr2) //[1,2,3]

// // let arr1 = [1,2,3,4]
// // let arr2 = [...arr1]
// // console.log(arr1)
// // console.log(arr2)
// // arr2.pop()
// // console.log(arr1)
// // console.log(arr2)


// // let arr3 = ['minhaj', 'ali', 'hasseb']
// // let firstName = arr3[0]
// // let  [firstName, , lastName] = arr3
// // console.log(firstName)
// // console.log(lastName)

// // let stdObj = {
// //     firstName: 'Minhaj',
// //     lastName: 'wahid',
// //     rollNo: '123',
// //     sec: 'A'
// // }

// // let LastName = stdObj.lastName
// // console.log(LastName)

// // let {lastName, firstName} = stdObj
// // console.log(lastName)
// // console.log(firstName)

// //ternary operator
// let age = 23
// // if(age >=18){
// //     console.log('allow')
// // }else{
// //     console.log('not allow')
// // }

// // condition ? truevalue : falsevalue
// age>=18 ?  console.log('allow') : console.log('not allow')

// let num = 66
// // if(num%2==0){
// //     console.log('even')
// // }else{
// //     console.log('odd')
// // }

// num%2==0 ? console.log('even') : console.log('odd')

// // try {
// //     num%2==0 ? console.log('even') : console.log('odd')
// // } catch (error) {
// //     console.log(error)
// // }

// // console.log('age ka kaam chale ga')

// // nested ternary 
// // let temperature = 11

// // let temperatureCheck = temperature > 30 ? 'hot' : temperature > 20 ? 'warm' : temperature > 10 ? 'cold' : 'too cold'
// // console.log(temperatureCheck)

// //arrow function
// // function sum(a,b){
// //     console.log(a+b)
// // }

// // sum(4,4)

// // let sum = (a,b)=>{
// //     console.log(a+b)
// // }
// // sum(3,4)

// // let sum = (a,b)=> console.log(a+b)
// // sum(3,4)

// // function sum(a,b){
// //     return c = a+ b
// // }

// // console.log(sum(4,5))

// // let sum = (a,b)=> a+b
// // console.log(sum(2,7))

// // let fName = name => console.log('hello ' + name)
// //temperal  literals
// // let fName = name => console.log(`Hello ${name} !`)
// // fName('minhaj')


// // console.log('Hello ' + firstName + " " + lastName + ", How are you! ")
// // console.log(`hello ${firstName} ${lastName} , How are you!`)

// //callback functions
// // function orderPizza(callFriend){
// //     console.log('order pizza')
// //     setTimeout(()=> {
// //         console.log('pizza agaya')
// //         callFriend()
// //     }, 3000)
// // }

// // function callFriend(){
// //     console.log('dost ko call kari')
// // }

// // orderPizza(callFriend)

// // function foo(callback){
// //     console.log('function 1')
// //     callback()
// // }
// // function bye(){
// //     console.log('function 2')
// // }

// // foo(bye)



// // var a = 5
// // var b = 23
// // var [b,a] = [a,b]
// // console.log(`a===>>> ${a}`,`b===>${b}`)

// //  a = a + b  //5 + //23 => 28
// //  b = a- b // 28 - 23  => 5
// //  a = a-b   //28 - 5  => 23
// //  console.log(`a===>>> ${a}`,`b===>${b}`)

// //  //map
// // let arr4 = [2,4,6,8]
// // let arr5 = arr4.map((value, index)=>{
// //     return value * 2
// // })

// // console.log(arr5)
// // arr5.pop()
// // console.log(arr4)
// // console.log(arr5)


// //exponentiation operator
// var num3 = 2
// console.log(num3 ** 8)
// console.log(3 ** 4)
// // higher order function
// function greet(name, bye){
//     console.log(`hi ${name}`)
//     bye()
// }



// greet('minhaj',  ()=> {
//     console.log('Bye')
// })

// // setTimeout(()=> {})

// // ()=> {
// //     console.log('hello world')
// // }

// let arr4 = [3,6,9,12]

// // for(var i=0; i<arr4.length; i++){
// //     console.log(arr4[i] * 2)
// // }

// // let doubled = arr4.map((num, index)=>{
// //     return num ** 2
// // })

// // console.log(doubled)
// // doubled.pop()
// // console.log(arr4)
// // console.log(doubled)


// // let doubled = arr4.forEach((values, index)=> {
// //     return values + 1
// // })

// // console.log(doubled)

// let userObj = {
//     fName: 'minhaj',
//     lName: 'wahid',
//     rollNo: '123',
//     // address: {
//     //     city: 'karachi',
//     //     area: 'nazimabad'
//     // },
//     greet: ()=> console.log('hi')
//     // greet: function (){
//     //    var c =  2 * 4
//     //    console.log(c)
//     //    return c
//     // }
// }


// // for(var values in userObj){
// //     console.log(userObj[values])
// // }

// //conditional chaining ?
// console.log(userObj?.address?.city)
// userObj.greet?.()
// // console.log(userObj.greet())
// //apply on methods
// console.log(userObj.say?.())
// //apply on arrays
// let arr5 = [{name: 'minhaj'}, {name: 'haseeb'}, {name: 'talha'}]
// console.log(arr5[4]?.name)

// // let count = 0
// // function dummy1(){
// //     count++
// //     console.log(count)
// //     let count2 = 2

// //     for(var i=0; i<2; i++){
// //         console.log(count2)
// //         let count3 = 2
// //         if(true){
// //             console.log(count3)
// //         }
// //     }
// //     // console.log(count3)

// // }

// // function dummy2(){
// //     count++
// //     console.log(count)
// // }

// // dummy1()
// // dummy2()

// //callback

// //higher order functoin
// // function orderPizza(kuchbhi){
// //     console.log('order pizza')
// //     setTimeout(()=> {
// //         console.log('pizza arrived')
// //         kuchbhi()
// //     },2000)
// // }

// // //callback function 
// // function callFriend(){
// //     console.log('call a friend')
// // }

// // orderPizza(callFriend)
// // orderPizza( ()=>{
// //     console.log('call a friend')
// // })


// // function foo(){
// //     console.log('123')
// // }

// // let foo = ()=>{

// // }

// // foo()

// const fetchApi = async ()=> {
//     let response = await  fetch("https://fakestoreapi.com/products").then((result)=>result.json())
//     console.log(response)
// }

// fetchApi()
// // console.log('data')
// for(var i =0; i<2;i++){
//     console.log(i)
// }

// // setTimeout(()=> {
// //     console.log('start')
// // },3000)
// // console.log('end')


//promises
// let promises = new Promise((resolve, reject)=> {
//     let isSuccess = false
//     if(isSuccess){
//         console.log('task completed')
//     }else{
//         console.log('task rejected')
//     }
// })

// promises.then((result)=>{
//     console.log(result)
// }).catch((error)=> {
//     console.log(error)
// })

//async await

let fetchData = async ()=> {
  
        const response = await fetch('https://fakestoreapi.com/products').then((result)=>result.json()).catch((error)=>console.log(error))
    console.log(response)
   
   
    
} 

fetchData()
// console.log('fetching data....')
// console.log('task 2')

// function foo(){
//     console.log('hello')
// }

// foo()

// setTimeout(()=>{
//     console.log('hello 1')
// }, 0)

// console.log('hello 2')

//array methods
//includes
// let arr1 = ['Apple', 'Mango', "Orange"]
// let arrInclude = arr1.includes('apple')
// console.log(arrInclude)

// //filter
// let arr2 = [1,2,3,4,5,6]
// let arrEven = arr2.filter((num)=>num%2==0)
// console.log(arrEven)

// //find
// let arr3 = [1,2,3,4,5]
// let findFive = arr3.find((value)=> value ==5)
// console.log(findFive)

// //sort
// let arr4 = [17,12,9,3,5,8]
// console.log(arr4.sort())

// //reverse
// let arr5 = [1,2,3,4,5]
// console.log(arr5.reverse())

//modules
add(4,4)
console.log(sub(4,8))

let arr1 = [1,2,3,4,5,6]
let oddNum = arr1.filter((num, index, array)=> num%2 !=0 )
console.log(oddNum)



// function foo(){
//    let num = '123'
// }
// foo()
// console.log(num)

// condition ? truevalue : falseValue
let num = 8
num % 2 ==0 ? console.log('even') : console.log('odd')

console.log(`number is ${num}`)

// const userObj = {
//     name: 'ali',
//     rollNo: '123',
//     // address: {
//     //     area: 'nazimabad',
//     //     // street: '1234'
//     // }
// }

// let {name} = userObj
// console.log(name)
// console.log(userObj?.address?.street)

let arr3 = [1,2,3,4,5]
let plusTwo = arr3.map((num,index,array)=>{
    return num + 2
})

plusTwo.pop()
console.log(plusTwo)
console.log(arr3)

// let name = false

let num5 = 'a'
function cal(){
    return num5 * 3
}

console.log( cal())

let num1 = 123
let num2 = 123
num2 = 'minhaj'
console.log(num2)