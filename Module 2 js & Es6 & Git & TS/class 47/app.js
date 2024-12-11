// var deci =2.648277555
// console.log(deci.toFixed(3))



var inp = prompt('enter a decimal num')
console.log(inp)
// +
var desire_len = prompt('enter a number')
console.log(inp[desire_len])
// 23.643237
var temp = inp.indexOf('.')
console.log(temp)
var new_inp = inp.slice(temp+1,)
console.log(new_inp[desire_len])

console.log(inp.slice(0,temp+1))
var point = inp.slice(0,temp+1)

if (new_inp[desire_len] >=5){
    var num = parseInt(new_inp[desire_len-1]) + 1 
    var sliced = new_inp.slice(0,desire_len-1) + num
    console.log(sliced)
}else{
    var sliced = new_inp.slice(0,desire_len)
    console.log(sliced)
}

alert(point + sliced )
console.log(2.64367.toFixed(3))