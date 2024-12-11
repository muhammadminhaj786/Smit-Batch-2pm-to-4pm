var box1 = document.getElementById('box1')
var box2= document.getElementById('box2')
var box3 = document.getElementById('box3')
var box4 = document.getElementById('box4')
var box5 = document.getElementById('box5')
var box6 = document.getElementById('box6')
var box7 = document.getElementById('box7')
var box8 = document.getElementById('box8')
var box9 = document.getElementById('box9')

var flag = true
function playGame(ele){
    console.log('play', ele)
    

    if(flag){
       ele.innerHTML = 'X' 
       flag = false
       ele.classList.add('disabled')
    }else{
        ele.innerHTML  = "O"
        flag = true
    }

    // if((box1.innerHTML=='X' && box2.innerHTML=='X' && box3.innerHTML=='X') || (box4.innerHTML=='X' && box5.innerHTML=='X' && box6.innerHTML=='X')){

    // }else if(){

    // }else {
        
    // }

}