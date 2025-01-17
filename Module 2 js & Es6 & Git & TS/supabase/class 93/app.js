const supabaseUrl = "https://xfkawxjrcqzuwptcmoya.supabase.co";

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
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
const input = document.getElementById("inp");
const todoList = document.getElementById("todo-list");
console.log(todoList);

async function addTodo() {
  console.log(input.value);

  const task = input.value;

  const { data, error } = await supabaseClient
    .from("todos")
    .insert({ task })
    .select();

  if (!error) {
    alert("Todo add");
    console.log(data);
  }
}

async function loadTodos() {
  const { data, error } = await supabaseClient.from("todos").select();

  console.log(data);

  
}






function addTodoToUi() {
  const liEle = document.createElement("li");
  liEle.classList.add("list-item");
  const spanEle = document.createElement("span");
  spanEle.innerHTML = input.value;
  const doneBtn = document.createElement("button");
  doneBtn.innerHTML = "&#10003;";
  doneBtn.addEventListener("click", () => {
    spanEle.classList.add("complete");
  });
  const delBtn = document.createElement("button");
  delBtn.innerHTML = " &#10006;";
  delBtn.addEventListener("click", () => {
    todoList.removeChild(liEle);
  });

  liEle.appendChild(spanEle);
  liEle.appendChild(doneBtn);
  liEle.appendChild(delBtn);
  todoList.appendChild(liEle);
}

loadTodos();