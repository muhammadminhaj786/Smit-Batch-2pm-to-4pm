

// var age = +prompt('enter age')
// if(age>18 && age<40 ){
//     alert('allowed')
// }

// if(age>18){
//     if(age <40){
//         alert('allowed')
//     }
// }

// for (var i =1;i<6;i++){
//     for(var j = i; j<=i;j++ ){
//        console.log(j)
//     }
// }


// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
//  var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
//  var fullNames = [];
//  for (var i = 0; i < firstNames.length; i++) {
//  for (var j = 0; j < lastNames.length; j++) {
// fullNames.push(firstNames[i] + lastNames[j]);

//  }
//  }
//  console.log(fullNames)

1
12
123
1234
12345

for (var i=1;i<6;i++){
    var newVar = ""

    for(var j =1; j<=i;j++){
        newVar = newVar + "*"
        // "" = "" + 1
        // "1"    = "1" + 2
        // "12"   = "12" + 3
        // "123"    ="123" + 4
         
        
        
    }
    console.log(newVar)
}
// 1
// 12
// 123
// 1234
// 12345

// *
// **
// ***
// ****
// *****

// reverse the Array without array reverse method
// [1,2,3,4,5]


var arr1 = [1,2,3,4,5]
var arr2 = []
for (var i = arr1.length-1; i>=0;i--){
    arr2.push(arr1[i])
}
console.log(arr2)