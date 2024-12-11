
var getUser = localStorage.getItem('user')
console.log(getUser)
var parseObj = JSON.parse(localStorage.getItem('user'))
console.log(parseObj)

if(getUser === null){
  window.location.assign('signup.html')
}else{
  window.location.assign('home.html')
}





function getValues() {
  var userName = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  console.log(userName, email, password, confirmPassword);

  var userObj = {
    userName: userName,
    email: email ,
    password: password,
    confirmPassword: confirmPassword
  }

  var objStr = JSON.stringify(userObj)
  console.log(objStr)

  localStorage.setItem('user', objStr)

  window.location.assign('home.html')
  

  
}
 

function logout(){
  console.log('logout')
  localStorage.removeItem('user')
  window.location.reload()
}

var username = document.querySelector('.username')
console.log(username)
username.innerHTML = parseObj.userName
