// var inp = prompt('enter num')
// console.log(typeof(inp))
// var conv = parseFloat(inp)
// // var conv = parseInt(inp)
// // var conv = Number(inp)
// // var conv_roun = Math.round(conv)
// console.log(typeof(conv))
// console.log(conv - 10)

// var profit = parseInt(1.2) + parseFloat(2.8);
// console.log(profit)

// var deci = 1.227455
// var conv = deci.toString()
// console.log(conv)

// console.log(12 + '12')

// var conv_point = deci.toFixed(3)
// console.log(conv_point)


// var cal = 5 / 3
// console.log(cal.toString())

// var test = 1.2525888
// var conv_test = test.toString()
// console.log(conv_test[5])


var inp = prompt('enter a decimal num')
console.log(inp[5])
// 1.22232222

if (inp[5] >=5){
    var num = parseInt(inp[4]) + 1 
    var sliced = inp.slice(0,4) + num
    console.log(sliced)
}else{
    var sliced = inp.slice(0,5)
    console.log(sliced)
}