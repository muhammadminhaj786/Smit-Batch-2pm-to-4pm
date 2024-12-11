var fruits = ["apple", "mango", "banana", "orange"];
var grapes = "grapes";
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.push("grapes");
console.log(fruits);
fruits.unshift("peach");
console.log(fruits);
// [("peach", "mango", "banana", "grapes")];
//splice
fruits.splice(0, 2);
//index, counting, adding vales
console.log(fruits);
// [("banana", "grapes")];
fruits.splice(2, 0, "mango", "pineapple", "blue berry");
console.log(fruits)
// [("banana", "grapes", "mango", "pineapple", "blue berry")];
// var favFruits = fruits.slice()
// console.log(favFruits)
// fruits.pop()
// console.log(fruits)
// console.log(favFruits)
// favFruits.unshift("watermelon")
// console.log(fruits)
// console.log(favFruits)
// var favFruits = fruits.slice(2,4) 
//                            //position, end
//                            //index  ,   length
// console.log(favFruits)

fruits.reverse()
console.log(fruits)

// if (){

// },



//for loop syntax
// for (intilaization; condition; iteration ) {

// }
var i = 0

// if(i<5){
//     alert('hello')
// }

for (i;i<5;i++){
    console.log('hello')
    // i = i + 1
    console.log(i)
    
}

// var cart = [["charger","image","price"], ["gun","inage","price"]]
// var cartLen = cart.length
// console.log(cartLen)
// for (var i =0;i<cartLen;i++){
//     console.log(cart[i])
// }

//2
var num = +prompt("enter a number")
for (var i =1;i<=10;i++){
    console.log(num + "x " + i + "=" + num*i)
}