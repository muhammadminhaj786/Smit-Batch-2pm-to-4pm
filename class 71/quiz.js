console.log("quiz");

var quizBody = document.querySelector('.quiz-body')
console.log(quizBody)
var form = document.querySelector('.form')
console.log(form)

var h1Name = document.querySelector('.set-name')
var h1Email = document.querySelector('.set-email')
var h1RollNo = document.querySelector('.set-rollno')
var h1Institute= document.querySelector('.set-institute')

function startQuiz() {
  var userName = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var rollNo = document.getElementById("rollno").value;
  var institute = document.getElementById("institute").value;
  console.log(userName, email, rollNo, institute);
  quizBody.style.display = 'block'
  form.style.display = 'none'
  h1Name.innerHTML = userName

}
