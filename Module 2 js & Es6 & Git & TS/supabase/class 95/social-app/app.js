
// import { createClient } from "/node-modules/@supabase/supabase-js";

const supabaseUrl = 'https://exljzxjzrcfmxcbwydwp.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4bGp6eGp6cmNmbXhjYnd5ZHdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3NjQ2MDgsImV4cCI6MjA1MjM0MDYwOH0.qWSUojo2y_wzgtjE4hqb_COXANikerk_9B6xMxJjjf8"
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)
console.log(supabaseClient)

const emailInp = document.getElementById('inputEmail4')
console.log(emailInp)

const passInp = document.getElementById('inputPassword4')

const addressInp = document.getElementById('inputAddress')
const cityInp = document.getElementById('inputCity')



async function signIn(){
    const email = emailInp.value 
    const password = passInp.value
    const address = addressInp.value
    const city = cityInp.value
    console.log(email, password, address, city)

    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password
      })

      if(data){
        alert('User Signup successfully')
      }
      

}