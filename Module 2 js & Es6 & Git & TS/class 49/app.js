// date and time
// var date = new Date()
// var time = date.toDateString()
// console.log(time)
// var day = date.getDay()
// console.log(day)
// var week_days = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'] 
// console.log(week_days[day])
// var month = date.getMonth()
// console.log(month)
// var hours = date.getMilliseconds()
// console.log(hours)
// var new_time = date.getTime()
// console.log(new_time)


// var date = new Date()
// console.log(date)
// var total_milli = date.getTime()
// console.log(total_milli)
// // var conv = cal / (1000 * 60 * 60 * 24 * 365)
// // console.log(Math.floor(conv))

var new_date = new Date('Sep 27 2003')
var new_milli = new_date.getTime()
console.log(new_milli)

// var final_milli = total_milli - new_milli
// console.log(final_milli)
// var conv = final_milli / (1000 * 60 )
// console.log(Math.floor(conv))


// var user = prompt("Please Enter Your Brith Day Year")

// var original_date = new Date()
// var fist_milli = original_date.getTime()
// console.log(fist_milli);
// var myage = new Date(user)
// var my_milli = myage.getTime()
// console.log(my_milli);

// var res = fist_milli - my_milli
// console.log(res);

// var second = Math.floor(res / 1000)
// var minute = Math.floor(res / (1000 * 60))
// var hours = Math.floor(res / (1000 * 60 * 60))
// var days = Math.floor(res / (1000 * 60 * 60 * 24))
// var years = Math.floor(res / (1000 * 60 * 60 * 24 * 365))
// alert(`Your Age is Millu Second ${second}, Minute ${minute}, Hourse ${hours}, Days ${days} and Year ${years}`)

var date = new Date()
// // console.log(date.getFullYear())
// // console.log(date.getDay()) // 0-6 
// // console.log(date.getMonth()) // 0 - 11
// // console.log(typeof(date))

var d =date.setFullYear(2003) 
console.log(d)


// console.log('1')
// console.log('2')
// console.log('3')
// console.log('4')
// console.log('5')
// console.log('6')
// console.log('7')
// console.log('8')
// console.log('9')
// console.log('10')

// for (var i =1; i<=10; i++){
//     console.log(i)
// }

// for (){
    console.log(varaiable_name)
// }
// foo()
var varaiable_name = 'dummy'
console.log(varaiable_name)

// if () {

// }

// function foo () {
//     // console.log('hello')
//     for(var i=1; i<=10; i++){
//         console.log(i)
//     }
// }

// foo()
// var user = prompt("enter your name")
// function  displayName(first_name) {
//     console.log('Hello',user)
// } 

// displayName()


function Sum(a , b) {
    var sum = a + b
    console.log(sum)
}

Sum(5, 8)
Sum(600,500)