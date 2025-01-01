
const supabaseUrl = 'https://nivbwvftolmfssfukwfn.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdmJ3dmZ0b2xtZnNzZnVrd2ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3MjI3NDEsImV4cCI6MjA1MTI5ODc0MX0.L07FTdBhzIJqXl5IIND2q14DEACW5C5Zz1rKl2-spdU"
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)

async function logout(){
    console.log('logout')
    const { error } = await supabaseClient.auth.signOut()
    window.location.href = 'index.html'

}

async function checkSession(){
    const { data: {session}} = await supabaseClient.auth.getSession()
    if(!session){
        window.location.href = 'index.html'
    }
}


checkSession()


const welName = document.getElementById('wel-name')

async function getUserName(){
    const { data: { user } } = await supabaseClient.auth.getUser()
    console.log(user.email)
    welName.innerHTML= user.email
    

}

getUserName()