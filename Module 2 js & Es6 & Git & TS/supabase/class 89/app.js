//initilize supabase
const supabaseUrl = 'https://uywhxbjdfucbfcthoykl.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5d2h4YmpkZnVjYmZjdGhveWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1NTExMjUsImV4cCI6MjA1MTEyNzEyNX0.oT5YbnHT2jWF5yCRcRin-uQaRc-5HdbPaOW0XiCx41U"
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)

const signupForm = document.getElementById('signup-form') 
const loginForm = document.getElementById('login-form')
const switchSignup = document.getElementById('switchSignUp')
const switchLogin = document.getElementById('switchLogin')
const signupEmail = document.getElementById('signup-email')
const signupPassword = document.getElementById('signup-password')
const signupBtn = document.getElementById('signup-btn')
console.log(signupBtn)

// console.log(signupForm, loginForm)

// function switchSignup(){
//     loginForm.classList.add('hidden')
//     signupForm.classList.remove('hidden')
    
// }

// function switchLogin(){
//     loginForm.classList.remove('hidden')
//     signupForm.classList.add('hidden')
// }

switchSignup.addEventListener('click', ()=>{
    loginForm.classList.add('hidden')
    signupForm.classList.remove('hidden')
   
})

switchLogin.addEventListener('click', ()=>{
    loginForm.classList.remove('hidden')
    signupForm.classList.add('hidden')
   
})


//signup
signupBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    const email = signupEmail.value
    const password = signupPassword.value
    console.log(email, password)
})