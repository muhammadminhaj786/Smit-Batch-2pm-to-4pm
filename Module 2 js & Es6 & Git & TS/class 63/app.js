// var parent = document.getElementById('parent')
// node type return 1 and 3 , 1 html element
// child = parent.firstElementChild.children[2].nextElementSibling.nodeType

// node name return html element name
// child = parent.firstElementChild.children[2].nextElementSibling.nodeName

//node value return nodes text
// child = parent.firstElementChild.children[2].nextElementSibling.childNodes[0].nodeValue

// console.log(child)

// var list5 = parent.firstElementChild.lastElementChild
// console.log(list5)
// list5.setAttribute('class', 'red')


//create element
// var h1Element = document.createElement('h1')
// console.log(h1Element)
// var h1Text = document.createTextNode('Hello world')
// console.log(h1Text)
// h1Element.appendChild(h1Text)
var parent = document.getElementById('parent')
// parent.appendChild(h1Element)

var ul = document.createElement('ul')

for(var i =1; i<=5;i++){
    
    var li = document.createElement('li')
    var liTxt = document.createTextNode('list '+ i)
    li.appendChild(liTxt)
    ul.appendChild(li)
    li.setAttribute('class', 'red')
   
}
parent.appendChild(ul)

var list2 = parent.firstElementChild.firstElementChild.nextElementSibling
console.log(list2)

var parent2 = document.getElementById("parent2")
function deleteBtn(){
    list2.remove()
}