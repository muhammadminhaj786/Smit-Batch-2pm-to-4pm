console.log(10 + (10 - 30) + 20)
            // 10       -20    + 20
            //   30  -20
            //   10

var a = 5  
// var value = a++ + a++ + a++ + a + a++
            // 5     6      7     8   8
// console.log(value) 


var b = 5 //6  //7  //8 //9
var valueb = ++b + b++ + b++ + ++b +b
            //   6     6    7     9    9
console.log(valueb)

var c = 5  //6  //5  //6  //5
var valuec = ++c + c + --c + c++ + c-- + c
            //  6     6    5     5    6     5
console.log(valuec) 

console.log(20 + (5*6) + 5 * 5)
            // 20 +     30 + 25
            // BODMAS

var f = 10 //11 10 11 10
var valuef = f++ + f + --f + f++ + f--  
            //   10   11   10   10    11
console.log(valuef)

//concatenation
var first_name = "sufiyan"
var last_name = "siddqui"
var full_name = first_name + "    " + last_name
console.log(full_name)
console.log("Hi" +" " + "how are you" + "?")
// alert("how are you?" + first_name)
//string => set of character
alert("2" + "2")
alert("2 plus 2 equals " + 2 + 2);
alert("a value " + ++a + 2 )

//prompt
// var num1 = prompt('Enter a number')
var num1 = +prompt('Enter a number', "5")
alert(num1 + 2)


console.log(num2)
var num2 =10;
// num2 = 9
