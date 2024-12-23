// //type annotation
// // let variableName: type = value
// let num: number = 123
// console.log(num)

// let isActive: boolean = true
// console.log(isActive)

// //array
// let arr: number[] = [1,2,3,4]
// console.log(arr)

// for (let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

// //functions 
// function foo(name: string):string {
//     console.log(name)
// }
// foo(123)

// //

// let num3 = 222

// //object 
let userObj: {
    name: string;
    age: number;
    isActive: boolean
} = {
    name: 'ali',
    age: 123,
    isActive: true
}
let {name, age,isActive} = userObj
// console.log(name, age)

// arrow function
let dummy = (age: number):number => {
    return age
}

console.log(dummy(12))

//union type
// let variableName: type1 | type2 = value
let rollNo: string | number | boolean = '123'
console.log(rollNo)
rollNo = 123
console.log(rollNo)
rollNo = false

//array 
let arr4: (number | string | boolean)[] = [1,2,3,'6', true]
console.log(arr4)

if(isActive){
    console.log('allow')
}else{
    console.log('not allow')
}

//inference
let num4 = 23
console.log(num4)
num4 = '23'