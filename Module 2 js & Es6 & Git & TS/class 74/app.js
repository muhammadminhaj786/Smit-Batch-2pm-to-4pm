// var userEle = document.getElementById('user_name')
// var getItem = localStorage.getItem('name')
// console.log(getItem)
// if(getItem === null){
//     var userName = prompt('Enter a name')
//     localStorage.setItem('name', userName)
//     userEle.innerHTML = userName
// }else{
//     console.log(userName)
//     var name = localStorage.getItem('name')
//     userEle.innerHTML = name
// }

// var userName = prompt('Enter a name')

// console.log(userName)

// localStorage.setItem('name', userName)
// var getName = localStorage.getItem('name')
// console.log(getName)
// userEle.innerHTML = getName


localStorage.setItem('marks', '480')
console.log(localStorage.getItem('marks'))

var stdArr = ['haseeb', '480', '123']
// localStorage.setItem('student', stdArr)

// 'haseeb', '480', '123'

var dataString = JSON.stringify(stdArr)
console.log(dataString)
JSON.stringify(localStorage.setItem('student', dataString))
// // "['haseeb', '480', '123']"
var getArr = JSON.parse(localStorage.getItem('student'))
console.log(getArr)
for(var i=0; i<getArr.length;i++){
    console.log(getArr[i])
}


var stdObj = {
    firstName: 'haseeb',
    marks: '880',
    rollNo: '123'
}

var dataObj =  JSON.stringify(stdObj)
console.log(dataObj)

localStorage.setItem('studentObj', dataObj )

var getObj = JSON.parse(localStorage.getItem('studentObj'))
console.log(getObj)

localStorage.removeItem('studentObj')