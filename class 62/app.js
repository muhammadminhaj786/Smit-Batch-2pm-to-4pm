// childNodes  ==> return element + junk artifacts
// var h1Element = document.childNodes[1].childNodes[2].childNodes[1].childNodes[5]
// h1Element.style.backgroundColor = 'green'
//children

// children ==> return html elements
var h1Element = document.children[0].children[1].children[0].children[2]
h1Element.style.backgroundColor = 'red'

var parent = document.getElementById('parent')
// first element child ===> return parent first child
var fChild =parent.firstElementChild
fChild.style.backgroundColor =" blue"

// lastElementChild ===> return parent last child
var lChild =parent.lastElementChild
lChild.style.backgroundColor = "green"

// nextElementSibling ===> return next sibling
var nextSibling = fChild.nextElementSibling 
console.log(nextSibling) 
nextSibling.style.backgroundColor = 'pink'

// previousElementSibling ===> return previous sibling
var prevSibling = lChild.previousElementSibling
console.log(prevSibling)
prevSibling.style.backgroundColor = 'brown'

var node2 = document.children[0].children[1].children[0].children[1]

var newParent = node2.parentNode

var ele =document.createElement("p")
ele.innerHTML = 'hello'
console.log(ele)
