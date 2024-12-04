// let slider = document.querySelector('.img-slider')
// console.log(slider)

// let currentIndex = 1



// function next(){
//     currentIndex = currentIndex + 1
//     console.log('run')
//     slider.setAttribute('src', './images/'+currentIndex+'.jpg')
//     if(currentIndex >= 4){
//         currentIndex = 0
//     }
// }


// function prev(){
//     currentIndex = currentIndex - 1
//     if(currentIndex <= 0){
//         currentIndex = 4
        
//     }
//     slider.setAttribute('src', './images/'+currentIndex+'.jpg')
    
  
// }

// function autoPlay(){
//     next()
// }

// var intervalPlay = setInterval(autoPlay, 3000)


let slider = document.querySelector('.img-slider')
console.log(slider)


let imageArr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg']

var currentIndex = 0

function updateImage(){
    slider.src = './images/'+imageArr[currentIndex]
}


function next(){
    currentIndex++
    if(currentIndex >= imageArr.length){
        currentIndex = 0
    }
    updateImage()
}


function prev(){
    currentIndex--
    if(currentIndex <0){
        currentIndex = imageArr.length - 1
    }
    updateImage()
}

function autoPlay(){
    next()
}

setInterval(autoPlay, 2000)