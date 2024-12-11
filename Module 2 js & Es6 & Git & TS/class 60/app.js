

// function togglePass(){
//     var input = document.getElementById('pass')
//     // var button = document.getElementById('btn')
//     var image = document.getElementById('img')

//     if(input.getAttribute('type') == 'password'){
//         input.setAttribute('type', 'text')
//         // button.innerHTML = 'hide'
//         image.setAttribute('src', './images/password-hidding-icon-icon-data-privacy-sensitive-content-mark-vector-illustration_499431-1151.avif')
//         // image.src = './images/password-hidding-icon-icon-data-privacy-sensitive-content-mark-vector-illustration_499431-1151.avif'
//     }else {
//        input.setAttribute('type', 'password')
//         // button.innerHTML = 'show'
//         // image.src = './images/password-hidding-icon-icon-for-data-privacy-and-sensitive-content-mark-illustration-vector.jpg'
//         image.setAttribute('src', './images/password-hidding-icon-icon-for-data-privacy-and-sensitive-content-mark-illustration-vector.jpg')
//     }
// }

function fulfilledCity(){
 var input = document.getElementById('zipInp')
 console.log(input.value)
 var cityName = ''

 if(input.value === ''){
    alert('please enter zip code')
   return
 }


//  if(input.value==='123'){
//     cityName = 'karachi'
//  }else if(input.value=== '456'){
//     cityName = 'lahore'
//  }else if(input.value === '789'){
//     cityName = 'Islamabad'
//  }else{
//     alert('wrong zip code')
//  }

switch (input.value){
    case '123':
        cityName = 'karachi'
        break;
    case '456':
        cityName = 'lahore';
        break
    case '789':
        cityName = 'Islamabad'
        break
    
}

 var cityInput = document.getElementById('cityInp')
 cityInput.value = cityName

}

var img = document.getElementById('img').style.height = '300px'

function imgChange(){
    console.log('hello')
    
    var button = document.getElementById('btn')

    console.log(btn)
     var img = document.getElementById('img')
    if(img.className === 'visible'){
        img.className = 'hidden';
        button.innerHTML = 'visible'

    }else {
        img.className = 'visible'
        button.innerHTML = 'invisible'

    }
}

var list = document.getElementsByTagName('li')
console.log(list)
for(var i=0; i < list.length; i++){
    console.log(list[i].innerHTML)
}