

const supabaseUrl = 'https://xkxpwtufzjxkvdaftzmg.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhreHB3dHVmemp4a3ZkYWZ0em1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4OTU0NzksImV4cCI6MjA1MTQ3MTQ3OX0.86cRrFsL5-XJMPBNvTOj2RVljHCH54Jd6Hf2Njefrb4"
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)
// console.log(supabaseClient)
// const emailEle = document.getElementById('email')
// const passEle = document.getElementById('Password')

// async function signup(){
//     const email = emailEle.value
//     const password = passEle.value
//     console.log(email, password)
//     const { data, error } = await supabaseClient.auth.signUp({email, password
//       })

//       console.log(data)

// }

///todo app
const input = document.getElementById('inp')
const todoList = document.getElementById('todo-list')
console.log(input)

async function loadTodos(){
    const { data, error } = await supabaseClient
  .from('todos')
  .select()

  console.log(data)

  data.forEach((todo)=> addTodoToUi(todo))


  

}




async function addTodo() {
    const task = input.value


    const { error } = await supabaseClient
        .from('todos')
        .insert([{task}])


  


    input.value = ""

}


function addTodoToUi(todo){
    const liEle = document.createElement('li')
  liEle.classList.add('list-item')
  const spanEle = document.createElement('span')
  spanEle.innerHTML = todo.task
  const doneBtn = document.createElement('button')
  doneBtn.innerHTML = "&#10003;"
  doneBtn.addEventListener('click', ()=> {
      spanEle.classList.add('complete')
  })
  const delBtn = document.createElement('button')
  delBtn.innerHTML = " &#10006;"
  delBtn.addEventListener('click', ()=> {
      todoList.removeChild(liEle)
  })

  liEle.appendChild(spanEle)
  liEle.appendChild(doneBtn)
  liEle.appendChild(delBtn)
  todoList.appendChild(liEle)
}

loadTodos()