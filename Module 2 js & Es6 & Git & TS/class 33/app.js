var num = 20
var num2;
var empty_arr = []
var arr_num = [10,30,60,20,50]
console.log("the value of arr in 2 index is", arr_num[2])

if (empty_arr) {
    alert("find it")
}else {
    alert("not exist")
}

console.log(arr_num)

arr_num[5] = 40
console.log(arr_num)

//array method
var arrayLength = arr_num.length
// console.log(arrayLength)
var removed =arr_num.pop()
console.log(arr_num.pop())
arr_num.pop()
console.log(removed)
console.log(arr_num)


// [10,30,60 ]
//length 3 , index 2
// 3 -1
// length 2 , 1

// for add values in last index   push
var stored = arr_num.push(80)
arr_num.push(100)
arr_num.push(20)
console.log(arr_num.length)
// console.log(stored)

arr_num[arr_num.length] = 70
console.log(arr_num)

arr_num.unshift(15)
console.log(arr_num)
arr_num.shift()
arr_num.shift()
arr_num.reverse()
arr_num.shift()
console.log(arr_num)
console.log(arr_num.lastIndexOf())

