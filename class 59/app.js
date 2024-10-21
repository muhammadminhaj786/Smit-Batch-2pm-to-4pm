// console.log('hello world')

// function onSubmit(){
//     console.log('click')
//     var email = document.getElementById('email').value
//     var pass = document.getElementById('pass').value 
//     console.log(email,pass)

    
//     if(!email || !pass  ){
//         alert('required fields are missing')

//     }

//     var isValid = email.indexOf('@gmail.com')
//     console.log(isValid)
    
//     if(isValid == -1){
//         alert('Wrong Email')
//     }

    

//     if(email === 'minhajwahid@gmail.com' && pass === 'admin123'){
//         alert('Login Successfully')
//         window.location.href = './home.html'
//     }else{
//         alert('invalid email and password')
//     }

   
// }




// function dummy(){
//     console.log('hello world')
//     var email = document.getElementById('email')
//     var password = document.getElementById('pass')
    
//     console.log(email.value, password.value)

//     if(!email.value || !password.value){
//        alert('required field are missing')
//     }

//    if(password.value.length <= 8){
//     alert('less he 8 se')
//    }
//    console.log('agy ')


//    email.value = ""
//    password.value = ""
    


// }



function togglePass(){
    var input = document.getElementById('pass')
    // var button = document.getElementById('btn')
    var image = document.getElementById('img')

    if(input.getAttribute('type') == 'password'){
        input.setAttribute('type', 'text')
        // button.innerHTML = 'hide'
        image.setAttribute('src', './images/password-hidding-icon-icon-data-privacy-sensitive-content-mark-vector-illustration_499431-1151.avif')
        // image.src = './images/password-hidding-icon-icon-data-privacy-sensitive-content-mark-vector-illustration_499431-1151.avif'
    }else {
       input.setAttribute('type', 'password')
        // button.innerHTML = 'show'
        // image.src = './images/password-hidding-icon-icon-for-data-privacy-and-sensitive-content-mark-illustration-vector.jpg'
        image.setAttribute('src', './images/password-hidding-icon-icon-for-data-privacy-and-sensitive-content-mark-illustration-vector.jpg')
    }
}