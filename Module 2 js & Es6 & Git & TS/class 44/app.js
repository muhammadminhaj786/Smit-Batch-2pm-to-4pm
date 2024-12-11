var first_name = 'haseeb'
console.log(first_name.charAt(2))

// var flag = false
var str = "Exclamation point found"
// for(var i =0; i<str.length;i++){
//     if(str.charAt(i)== "!"){
//         flag = true
//         break
//     }else {
//         flag = false
//     }

// }

// if(flag){
//     alert("Exclamation point found")
// }else{
//     alert("Exclamation  point not found")
// }

var findEx = str.indexOf('!')
if(findEx !== -1){
    alert('found')
}else {
    alert('not found')
}

var para="Lorem ipsum dolor sit particular  pakistan sit."
var newPara = para.replace(/sit/g, "nature")
console.log(newPara)

var point_num = -2.39
console.log(Math.round(point_num))

var scoreAvg = Math.round(4.999)
console.log(scoreAvg)