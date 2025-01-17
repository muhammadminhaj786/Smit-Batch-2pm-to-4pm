

// Create a single supabase client for interacting with your database
const supabaseUrl = 'https://xfkawxjrcqzuwptcmoya.supabase.co'

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)


const input = document.getElementById('inp')
const ul = document.getElementById('todo-list')

async function createTodo(){
  
  const task = input.value

  const { error } = await supabaseClient
  .from('todos')
  .insert({  task: task })

  const li = document.createElement('li')
  li.classList.add('list-item')
  const span = document.createElement('span')
  span.innerHTML = task
  const doneBtn = document.createElement('button')
  doneBtn.innerHTML = "&#10003;"
  const delBtn = document.createElement('button')
  delBtn.innerHTML = "&#10006;"

  li.appendChild(span)
  li.appendChild(doneBtn)
  li.appendChild(delBtn)

  ul.appendChild(li)

 
}

async function fetchTodos(){
  const { data, error } = await supabaseClient
  .from('todos')
  .select()

  console.log(data)

  for (var i =0; i< data.length; i++){
    console.log(data[i])
    const todo = data[i]

    const li = document.createElement('li')
    li.classList.add('list-item')
    const span = document.createElement('span')
    span.innerHTML = data[i].task
    const doneBtn = document.createElement('button')
    doneBtn.innerHTML = "&#10003;"
    doneBtn.addEventListener('click', ()=> {
      span.classList.add('complete')
      doneTodos(todo.id, true)
    })
    const delBtn = document.createElement('button')
    delBtn.innerHTML = "&#10006;"
    delBtn.addEventListener('click', ()=> {
      delTodos(todo.id)
      console.log(todo.id)
    })
  
    li.appendChild(span)
    li.appendChild(doneBtn)
    li.appendChild(delBtn)
  
    ul.appendChild(li)

  }



}


async function delTodos(id){
  const response = await supabaseClient
  .from('todos')
  .delete()
  .eq('id', id)

  console.log('delete')
  window.location.reload()


}

async function doneTodos(id, is_Done){
  const { error } = await supabaseClient
  .from('todos')
  .update({ is_Done: is_Done})
  .eq('id', id)

}

fetchTodos()