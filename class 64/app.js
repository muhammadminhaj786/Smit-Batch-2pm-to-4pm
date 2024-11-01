// var parent = document.getElementById('parent')
// console.log(parent)
// var h1 = document.createElement('h1')
// var h1Txt = document.createTextNode("hello world")
// h1.appendChild(h1Txt)
// parent.appendChild(h1)
// console.log(h1)


// Todo App

var input = document.getElementById('inp')
var parent = document.getElementById('parent')
console.log(parent, input)

function addTodo(){
   console.log(input.value)

   // create li element
   var li = document.createElement('li')
   //create li text
   var liTxt = document.createTextNode(input.value)
   //set class li
   li.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center')
   // relation li parent to li text
   li.appendChild(liTxt)

   var div = document.createElement('div')
   div.setAttribute('class', 'd-flex gap-4')

   //create edit button
   var editBtn = document.createElement('button')
   //create edit button text
   var editBtnTxt = document.createTextNode('Edit Todo')

   editBtn.setAttribute('class', "btn btn-info")

   editBtn.appendChild(editBtnTxt)

   div.appendChild(editBtn)

   var delBtn = document.createElement('button')
   var delBtnTxt = document.createTextNode("Delete todo")
   delBtn.setAttribute('class', 'btn btn-danger')
   delBtn.setAttribute('onclick', "deleteTodo(this)")
   delBtn.appendChild(delBtnTxt)

   div.appendChild(delBtn)
  


   li.appendChild(div)
   parent.appendChild(li)

}

function deleteAll(){
    parent.remove()
}

function deleteTodo(ele){
    var liRem = ele.parentNode.parentNode
    console.log(liRem)
    liRem.remove()
}