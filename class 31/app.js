// var weight = +prompt("enter a weight")
// if (weight >300 || weight <100){
//     alert('normal')
// }else {
//     alert('under weight')
// }

//nested if condtion
var age = +prompt("Enter your age")
var gen = prompt("Enter you gender")
var rel = prompt("Enter a status")

if(age >= 18){
    if(gen === "male"){
        if(rel === "unmarried" ){
            alert("You are happy!")
            console.log('true')
        } 
    }else {
        alert("not suitable gender")
    }
}else {
    alert("un happy")
    console.log("false")
}

var age = +prompt("Enter your age")
var gen = prompt("enter you gender")
var rel_status = prompt('Enter a status')

if(age >= 18 && gen === "Male" && rel === "unmaired"){
    alert("You're Happy ")
} else(
    alert("You are un-Happy")
)

var age  = +prompt("Enter Your Age")
var Gen  = prompt("Enter Your Gender")
var rel  = prompt("Enter Your Status")

if(age >=20 && Gen === "male" && rel === "unmarried"){
    alert("you are Happy !")
}else{
    alert("you are UnHappay")
}

var age = +prompt("Enter your age")
var gen = prompt("Enter your gender")
var rel = prompt("Enter your rel")

if ( age >= 18 && gen === "male" && rel === "unmarried"){
  alert("You are happy")
}else{
  alert("you are unhappy")
}

var User_age  = +prompt("Enter Your Age")
var User_Gen  = prompt("Enter Your Gender")
var User_rel  = prompt("Enter Your Status")

if(User_age >=18 && User_Gen === "male" && User_rel === "unmarried"){
    alert("you are Happy !")
}else{
    alert("you are UnHappay")
}

var age =+prompt ("enter your age")
var gen =prompt ("enter your gender")
var rel =prompt ("enter your status")
if ( age >=18 && gen == "male" && rel == "unmarried"){
    alert("youn are happy")
}else {
    alert("your are clever")
}