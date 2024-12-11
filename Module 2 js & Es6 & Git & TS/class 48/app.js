//date and time
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


var date = new Date()
console.log(date)
var total_milli = date.getTime()
console.log(total_milli)
// var conv = cal / (1000 * 60 * 60 * 24 * 365)
// console.log(Math.floor(conv))

var new_date = new Date('August 21 2003')
var new_milli = new_date.getTime()
console.log(new_milli)

var final_milli = total_milli - new_milli
console.log(final_milli)
var conv = final_milli / (1000 * 60 )
console.log(Math.floor(conv))