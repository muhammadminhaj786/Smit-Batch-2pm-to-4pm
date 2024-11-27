// localStorage.setItem('marks', '123')
// console.log('hello')

// var name = localStorage.getItem('name')
// console.log(name)

// localStorage.removeItem('name')

// var arr = ['ali', 123, false]
// var strArr = JSON.stringify(arr)
// localStorage.setItem('arr', strArr)
// var getArr = localStorage.getItem('arr')
// var parseArr = JSON.parse(getArr)
// console.log(parseArr )

// console.log('hello 1')

// console.log('hello 2')

// function delay(){
//     console.log('hello 3')
// }

// setTimeout(delay, 60000)

// var time = document.getElementById('time')

// var countdown = 10
// var timer = setInterval(function (){
//     console.log(countdown)
//     countdown--
//     time.innerHTML = countdown
//     if(countdown <= 0){
//         clearInterval(timer)
//         console.log('times up')
//     }
// }, 1000)

// var counting = 0
// function delay(){
//     counting = counting + 1
//     console.log(counting)
//     if(counting >= 10){
//         clearInterval(interval)
//     }
// }

// var interval = setInterval(delay, 1000)
var timer;
var time = document.getElementById('time')
var minuts = document.getElementById('minuts')
var mmsec= document.getElementById('mmsec')

var mmsecTime = 0
var countdown = 0
var minutsTime = 0

function startTime(){
    
     timer = setInterval(function (){
        mmsecTime++
    
        // time.innerHTML = countdown
        mmsec.innerHTML = mmsecTime
        if(mmsecTime >=1000){
            countdown++
            mmsecTime = 0
            time.innerHTML = countdown
        }

        if(countdown >= 10){
            minutsTime++
            countdown = 0
            minuts.innerHTML = minutsTime
        }
       }, 1)

}

function stopTime(){
    clearInterval(timer)
}


function reset(){
    time.innerHTML = 0
    countdown = 0
}