// //user defined function
// function foo (name){
//     alert('hello '+ name)
// }

// foo('minhaj')

// //pre defined
// alert('hello')

// function new_func(num1, num2 = 0) {
//   // console.log('hello')
//   add = 9;
// //   console.log(add);
//   var add = num1 + num2;
//   console.log(add);
//   return add;
// }

// console.log(new_func(1,5))
// add = 9
// console.log(add)
// new_func(1, 5);


// var num3 = 2
// num3 = 7
// console.log(num3)

// var user_age = parseInt(prompt("Enter Your Age"));
// function age_cal (user_age){
//     console.log(user_age)
//     if (user_age >= 18) {
//         return true
//     } else {
//         return false
//     }
// }

// age_cal(user_age)
// console.log(age_cal(user_age))
// if(age_cal(user_age) == true){
//     alert('true')
// }else{
//     alert('false')
// }

var sum = 0
function addition (){
    // var sum = 1+3
    console.log(sum)
}

// sum = sum + 7
// console.log(sum)
addition()

var str = 'hello'
console.log(str.charAt(4))

// var first_names = ['minhaj', 'ali', 4,true,[1,2,4]]
var first_names = ['imran', 'ali']
// first_names.push('imran')
// first_names.pop()
// first_names.splice(0,0,'haseeb')
// console.log(first_names)

//loop

for (var i = 0; i<first_names.length; i++){
    console.log(first_names[i])  //0  //1 //2
    if(first_names[i] === 'minhaj'){
        alert('match')
    }
}

var nums = [56,3,72,1,63]
console.log(nums.sort())