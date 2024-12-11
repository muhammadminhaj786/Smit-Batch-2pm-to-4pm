// // // var currentHref =window.location
// // // console.log(window.location.pathname)
// // // // currentHref.href = 'https://www.google.co.uk/'
// // // // console.log(currentHref)



// // function goToAbout(){
// //    window.location.href = 'about.html'
// // }


// // function back(){
// //     window.history.back()
// // }


// // function forward(){
// //     window.history.forward()
// // }

// // function goToContact(){
// //     window.location.assign('contact.html')
// // }


// function dummy(){
//     // alert('hello')
//     try {
//         alet('hello')
//     } catch (error) {
//         console.log(error)
//     }
// }


// dummy()


// function foo(){
//     console.log("run")
// }

// foo()


var firstName = 'ali'
console.log('hello')
console.log('hello')
console.log('hello')
console.log('hello')
console.log('hello')
console.log('hello')

// for(initiliation ; Condition; iteration){

// }

for(var i=0; i <10; i = i+ 1){
    console.log(i)
}

if(1>10){
    console.log('true')
}else{
    console.log('false')
}




function foo(){
    console.log('name')
    return 123
}





var stdObj = {
    firstName: 'minhaj',
    rollNo: '123',
    sec: 'A',
    active: true,
    marks: 480

}

console.log(stdObj)
console.log(stdObj["marks"])
console.log(stdObj.sec)

var stdArr = ['minhaj','123','A', true, 123]
console.log(stdArr)

for(var i=0; i<stdArr.length; i++){
    console.log(stdArr[i])
}

for(var collection of stdArr){
    console.log(collection)
}

console.log(typeof(foo))




var p = document.getElementById('txt')
console.log(p)
p.innerHTML = 'welcome'