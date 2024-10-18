console.log('hello world')

function onSubmit(){
    console.log('click')
    var email = document.getElementById('email').value
    var pass = document.getElementById('pass').value 
    console.log(email,pass)

    
    if(!email || !pass  ){
        alert('required fields are missing')
    }

    var isValid = email.indexOf('@gmail.com')
    console.log(isValid)
    
    if(isValid == -1){
        alert('Wrong Email')
    }

    

    if(email === 'minhajwahid@gmail.com' && pass === 'admin123'){
        alert('Login Successfully')
        window.location.href = './home.html'
    }else{
        alert('invalid email and password')
    }

   
}

