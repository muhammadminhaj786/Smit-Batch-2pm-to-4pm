//initilize supabase

const supabaseUrl = 'https://nivbwvftolmfssfukwfn.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdmJ3dmZ0b2xtZnNzZnVrd2ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3MjI3NDEsImV4cCI6MjA1MTI5ODc0MX0.L07FTdBhzIJqXl5IIND2q14DEACW5C5Zz1rKl2-spdU"
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)


const signupForm = document.getElementById('signup-form') 
const loginForm = document.getElementById('login-form')
const switchSignup = document.getElementById('switchSignUp')
const switchLogin = document.getElementById('switchLogin')

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

const signupEmail = document.getElementById('signup-email')
const signupPass = document.getElementById('signup-password')
console.log(signupEmail,signupPass)




signupBtn.addEventListener('click', async ()=> {
    console.log('run')
    const email = signupEmail.value
    const password = signupPass.value
    console.log(email,password)
    const { data, error } = await supabaseClient.auth.signUp({email, password})
    if(error){
        console.log(error)
    }else{
        alert('signup Successfully')
        console.log(data)
    }
      

})

const loginBtn = document.getElementById('login-btn')
const loginEmail = document.getElementById('login-email')
const loginPass = document.getElementById('login-password')
console.log(loginBtn)

loginBtn.addEventListener('click', async(e)=>{
    e.preventDefault()
    console.log('run')
    const email =loginEmail.value
    const password = loginPass.value
    console.log(email,password)
    const { data, error } = await supabaseClient.auth.signInWithPassword({email , password
      })

      if(error){
        console.log(error)
      }else{
        alert('login')
        window.location.href = 'dashboard.html'
      }
})