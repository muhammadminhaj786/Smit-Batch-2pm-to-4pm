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

  
}
