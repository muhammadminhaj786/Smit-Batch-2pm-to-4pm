// import { createClient } from "/node-modules/@supabase/supabase-js";




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

  if (error) {
    console.log(error)
    return
  }
  alert('User signup')
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

  const {data , error} = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: password,
  })

  console.log(data)


  if(error){
    alert('login failed')
    console.log(error)
    return
  }

  console.log(data.user.id)

  const { data: tableData, error: tableError } = await supabaseClient
  .from('users')
  .select()
  .eq('uid', data.user.id)
  .single()


  console.log(tableData[0])
  
  if(tableData.role === 'buyer'){
    window.location.href = '/buyer.html'
  }else if(tableData.role === 'vendor'){
    window.location.href = '/vendor.html'
  }else{
    alert('no role match')
  }

  


  
}