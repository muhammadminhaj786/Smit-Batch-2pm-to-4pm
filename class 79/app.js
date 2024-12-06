// var num1 = 123
// var num1 = 56
// console.log(num1)

// let num2 = 123
// // let num2 = 89
// console.log(num2)

// let num4 = 5
// if(true){
//     num4 = 10
// }
// console.log(num4)



// const num3 = 123
// num3 = 34
// console.log(num3)

//spread operator
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = arr1.concat(arr2)
// console.log(arr3)

// let arr4 = [...arr1, ...arr2]
// console.log(arr4)


// var arr1 = [1,2,3,4,5]
// var arr2 = [6,7,8,9]
// var arr3 = [...arr1,...arr2]

// console.log(arr3)

//destructured
// var arr4 = [1,3,5,6]
// console.log(arr4[2])
// var newArrValue = arr4[2]
// console.log(newArrValue)
// var [, ,num1] = arr4
// console.log(num1)

// var std = {
//     firstName: 'minhaj',
//     rollNo: '123'
// }

// // console.log(std.firstName)
// // var firstName = std.firstName
// // console.log(firstName)

// var {firstName} = std
// console.log(firstName)


// var a = 5
// var b =8
// a = a + b  //13
// b = a - b  //5
// a = a - b
// console.log(a,b)


// var arr1 = [1,2,3,4] //#123
// var arr2 = arr1   //#123

// arr1.pop()
// console.log(arr1)
// console.log(arr2)

// var num = 9


// var num = 8

//non primitive data type
// refrence type value
//array object

//100 == //200
// [] == []

// var arr1 = [1,2,3,4] //100
// var arr2 = arr1  //100
// arr1.pop()
// arr2.push(8)
// console.log(arr1)
// console.log(arr2)

// var arr1 = [1,2,3,4] //100
// var arr2 = [...arr1] //100
// arr1.pop()
// arr2.push(8)
// console.log(arr1)
// console.log(arr2)

// var arr1 = [1,2,3,4]
// var arr2 = [5,6,7,8]
// // es5 concat
// var arr3 = arr1.concat(arr2)
// console.log(arr3)
// //es6 spread operator
// var arr3 = [...arr1, ...arr2]
// console.log(arr3)


// for of loop
// var arr1 = [1,'2',true,4]
// for(var i=0; i<arr1.length; i++){
//     console.log(arr1[i])
// }

// for(var num of arr1){
//     console.log(num)
// }

//for in loop
// var std = {
//     firstName: 'minhaj',
//     rollNo: '123'
// }

// for(var key in std){
//     console.log(std[key])
// }

// 5! => 5*4*3*2*1

function factorial(num){
   
    if(num <= 1){
        return 1
    }

   return num * factorial(num - 1)

}

console.log(factorial(5))