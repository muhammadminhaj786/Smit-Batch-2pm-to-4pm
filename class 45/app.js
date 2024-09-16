console.log('hello world')

console.log(Math.floor(2.67))

//random
// var num = Math.random()
// var num_conv = (num*8) + 1
// console.log(Math.round(num_conv))


// 0.0000000000000001 - 0.9999999999999999

// var random_num = Math.random()
// var conv = (random_num * 8) + 1
// console.log(Math.round(conv))

var flag = false
var attempt = 0
var random_num = Math.random()
var conv = (random_num * 8) + 1
var conv_round = Math.round(conv)
console.log(conv_round)


for(var i =1 ; i<=5; i++){
    var user_inp = +prompt("Enter a number")
    if(user_inp === conv_round){
        alert('right')
        console.log(attempt)
        flag = true
        break
    }else if (user_inp > conv_round){
        alert('too long')
        attempt++
    }else if (user_inp < conv_round){
        alert('too close')
        attempt++
    }
}

if(!flag){
    alert('try again')
}


// ['snack', 'water', 'gun']
// if(game[random] == user)
