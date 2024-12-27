//typescript intro
//typescript compiler tsc --watch app.ts
//type annotation
//inference
//void
//union
//any
//interfaces
// classes
//generics
//enum

let dummy: string = 'ac'
let dummy2 = 123
let id: (string | number) = '123'

console.log('hello')

// const fName = 'ali'
// // fName = 123
// console.log(fName)

//void

function calculateTax(price: number): void{
    console.log(price)
}

calculateTax(300)

function updateHeading(): void{
    const heading = document.getElementById('heading') as HTMLElement
    heading.innerHTML = 'world'
}

updateHeading()


function greet(fName: string): void {
    alert(`Hello ${fName}`)
}

greet('abc')

// interface interfaceName {
//     propertyName: type
// }

interface model{
    color: string;
    registration: number;
    companyName: string;
    year: number;
    self?: boolean
}

const bike:model  = {
    color: "black",
    registration: 123,
    companyName: "Honda",
    year: 2020
}

// const bike:{
//     color: string;
//     registration: number;
//     companyName: string;
//     year: number
// }  = {
//     color: "black",
//     registration: 123,
//     companyName: "Honda",
//     year: 2020
// }


console.log(bike)

const car:model = {
    color: "white",
    registration: 435,
    companyName: "Honda",
    year: 2022,
    self: true
}

console.log(car)

interface BuyerTypes {
    firstName: string;
    price: number;
    Model: model
}

const buyer:BuyerTypes  = {
    firstName: 'haseeb',
    price: 12000000,
    Model: {
        color: "white",
        registration: 435,
        companyName: "Honda",
        year: 2022,
        self: true
    }
}

console.log(buyer)

interface Teachers {
      fullName: string,
    qualification: string
}

const teachers:Teachers = {
    fullName: 'Ali',
    qualification: 'matic'
}


interface School {
    teachers: Teachers;
    students: string[];
}

const school = {
   teachers: teachers,
    students: ['a','d', 'e']
}

console.log(school)


// generics
// function fullName(fName: string , lName: string): string{
//     return `${fName} ${lName}`
// }
// console.log(fullName('ali' , 'khan'))

// function fullName <T>(fName: string){
//     console.log(fName)
// }

// fullName('ali')


// function printNumber <T>(num: number, dummy3: string = 'qwe'){
//     return num
// }

// console.log(printNumber(12))


function getInput(): void{
    const inp = document.getElementById("inp") as HTMLInputElement
    console.log(inp.value)
    const button = document.querySelector("#btn") as HTMLButtonElement
    console.log(button.innerHTML)
}

