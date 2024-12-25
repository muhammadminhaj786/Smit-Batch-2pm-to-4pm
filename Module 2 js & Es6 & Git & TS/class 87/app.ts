let dummy: string = 'hello'
// dummy = 12 // error

let isActive: boolean = true
console.log(isActive)

let arr1: string[] = ['1','2','3']

let dummy2: (number | string) = '123'

let arr2: (number | string | boolean)[] = ['ali', 123, "B", true]
console.log(arr2)


//any
let dummy3: any = '123'
dummy3 = 56
dummy3 = true



let dummy4 = 123


//interfaces

// interface interfaceName {
//     propertyName: type
// }

interface userType{
    name: string,
    age: number
}

let userObj1: userType = {
    name: 'ali',
    age: 22
}


let userObj2: userType = {
    name: 'imran',
    age: 34
}