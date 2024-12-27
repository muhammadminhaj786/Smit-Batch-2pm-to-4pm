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
var dummy = 'ac';
var dummy2 = 123;
var id = '123';
console.log('hello');
// const fName = 'ali'
// // fName = 123
// console.log(fName)
//void
function calculateTax(price) {
    console.log(price);
}
calculateTax(300);
function updateHeading() {
    var heading = document.getElementById('heading');
    heading.innerHTML = 'world';
}
updateHeading();
function greet(fName) {
    alert("Hello ".concat(fName));
}
greet('abc');
var bike = {
    color: "black",
    registration: 123,
    companyName: "Honda",
    year: 2020
};
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
console.log(bike);
var car = {
    color: "white",
    registration: 435,
    companyName: "Honda",
    year: 2022,
    self: true
};
console.log(car);
var buyer = {
    firstName: 'haseeb',
    price: 12000000,
    Model: {
        color: "white",
        registration: 435,
        companyName: "Honda",
        year: 2022,
        self: true
    }
};
console.log(buyer);
var teachers = {
    fullName: 'Ali',
    qualification: 'matic'
};
var school = {
    teachers: teachers,
    students: ['a', 'd', 'e']
};
console.log(school);
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
function getInput() {
    var inp = document.getElementById("inp");
    console.log(inp.value);
    var button = document.querySelector("#btn");
    console.log(button.innerHTML);
}
