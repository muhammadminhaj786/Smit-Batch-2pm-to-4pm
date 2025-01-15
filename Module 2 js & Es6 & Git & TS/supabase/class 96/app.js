// import { createClient } from "/node-modules/@supabase/supabase-js";

const supabaseUrl = "https://mfipdkqnaupvkkivwafp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1maXBka3FuYXVwdmtraXZ3YWZwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNjkzMjc3NSwiZXhwIjoyMDUyNTA4Nzc1fQ.IVv8ssGXtTh5hw29CBAUHVddxnRPyC6s4eNqS0bCTmc";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
// console.log(supabaseClient)

const emailInp = document.getElementById("inputEmail4");
console.log(emailInp);

const passInp = document.getElementById("inputPassword4");

const addressInp = document.getElementById("inputAddress");
const cityInp = document.getElementById("inputCity");
const roleInp = document.getElementById("inputRole");

async function signUp() {
  const email = emailInp.value;
  const password = passInp.value;
  const address = addressInp.value;
  const city = cityInp.value;
  const role = roleInp.value;
  console.log(email, password, address, city, role);

  const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: password,
  });

  if (!error) {
    alert("User Signup successfully");
  }
  console.log(data.user.id)

  const { error: tableError, data: tableData } = await supabaseClient
    .from("users")
    .insert(
      [
        {
          address,
          city,
          role,
          uid: data.user.id
        }
      ]
    ).select()

    console.log(tableData)
}

const signupDiv = document.querySelector('.signup')
const signinDiv = document.querySelector('.signin')


function switchToSignup(){
  console.log(signupDiv)
  signupDiv.classList.remove('hidden')
  signinDiv.classList.add('hidden')
}

function switchToSignin(){
  signupDiv.classList.add('hidden')
  signinDiv.classList.remove('hidden')
}

const emailSignin = document.getElementById('inputEmail')
const passSignin = document.getElementById('inputPassword')

async function signIn(){


  const email = emailSignin.value
  const password = passSignin.value

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: password,
  })

  if(!error){
    alert('Login Successfully')
    window.location.href= '/buyer.html'
 
  }

  console.log(error)
  console.log(data)
  
}