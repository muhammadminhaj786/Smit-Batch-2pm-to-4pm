var first_names = ["bilal", "fahad", "farhan"];
first_names.pop()
first_names.push('imran')
first_names.shift()
first_names.unshift('huzaifa')
first_names.splice(2, 0, 'haseeb')
console.log(first_names)

// alert(`hello! ${first_names[1]}`)
alert("hello" + "                                " + first_names[0]);
var second_name;
//initilaization
second_name = 'ali'
console.log(second_name)

var multiple_arr = ["bilal", 23, "03111111", true];
console.log(typeof(multiple_arr))
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");

// for (var i = 0; i <13;i++){
//     console.log('hello')
// }
// coercion
var str = 'your age is'
var  age = 23
console.log(typeof(age))
age = str.toUpperCase() + " " + age
console.log(typeof(age))
console.log(age)


console.log(first_names.length)
console.log(str.length)

console.log(str[0].toUpperCase() + str.slice(1,4))


//slice
var new_str = str.slice(1,4)
console.log(new_str)
////             start index,  end length

// var temp = 'my'
// console.log(temp)
// temp += 'name'
// console.log(temp)

if(' '==' '){
    console.log(true)
}else{
    console.log(false)
}

var temp = ''
for(var i = 0; i<str.length;i++){
    if(str[i]== " "){
        var new_var = str[0].toUpperCase() + str.slice(1,4)
    }
}

console.log(first_names.slice(1,2))


let text = "me software developer hoon";

let result = '';
let capitalize = true;

for (let i = 0; i < text.length; i++) {
    let char = text[i];


    if (capitalize && /[a-zA-Z]/.test(char)) {
        result += char.toUpperCase();
        capitalize = false;
    } else {
        
        result += char;
    }

     if (/\s/.test(char)) {
        capitalize = true;
    }
    }



console.log(result);