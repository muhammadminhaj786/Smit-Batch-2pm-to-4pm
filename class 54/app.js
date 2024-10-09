// while (condition) {
//     ''
// }

// while (false) {
//     var i=0
//     console.log(i)
//     i++
// }

// for (var i =0; i< 5;i++){
//     console.log(i)
// }

// var temp = true
// var flag = false
// var attempt = 1
// var random_num = Math.random()
// var conv = (random_num * 8) + 1
// var conv_round = Math.round(conv)
// console.log(conv_round)

// while (temp){
//     var user_inp = +prompt("Enter a number")
//     if(user_inp === conv_round){
//         alert('right')
//         console.log(attempt)
//         flag = true
//         temp = false
//         break
//     }else if (user_inp > conv_round){
//         alert('too long')
//         attempt++
//     }else if (user_inp < conv_round){
//         alert('too close')
//         attempt++
//     }
// }

// if(!flag){
//     alert('try again')
// }

// var arr = ['a','b','c','d','e','f','g',"h"]
// var user = prompt('Enter ')
// var temp = true
// var i= 0
// while (temp){
//     if(arr[i] == user){
//         temp = false
//         console.log('match',i)
//     }
//     i++
// }

// var i = 0;
// do{
//     console.log(i)
//     i++
// }
// while (i <= 0)

// for (var i=0; i<0;i++){
//     console.log(i)
// }

var date = new Date()
console.log(date)
var day = date.getDay()
console.log(day)
switch (day) {
  case 1:
    alert("today is mon");
    break;
  case 2:
    alert("today is tuesday");
    break;
  case 3:
    alert("today is wednesday");
    break;
  case 4:
    alert("today is thursday");
    break;
  case 5:
    alert("today is friday");
    break;
  case 6:
    alert("today is saturday");
    break;
  case 0:
    alert("today is sunday");
    break;
}
