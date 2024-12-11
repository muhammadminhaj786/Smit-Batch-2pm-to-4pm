var firstName = "Ali";
var lastName = "khan";
var sec = "A";
var rollNo = "123";
var city = "karachi";

var std1 = ['Ali', 'khan','A','123', 'karachi']
console.log(std1[0])
std1[2] = 'B'
console.log(std1)
std1.shift()
console.log(std1)

// object
// var obj = {
//   property: value
// };

var std1Obj = {
  firstName: "Ali",
  lastName: "khan",
  sec: "A",
  city: "karachi",
  skills: ['html', 'css', 'js']
};

// console.log(std1Obj);
//array notation
// console.log(std1Obj["firstName"])

//dot notation
// console.log(std1Obj.firstName)

// stdObj['sec'] = 'B'
std1Obj.sec = 'B'
console.log(std1Obj)

delete std1Obj.firstName
console.log(std1Obj)
var newArr = std1Obj.skills
console.log(newArr)

var stdObjs = [
   {
        firstName: "Ali",
        lastName: "khan",
        sec: "A",
        city: "karachi",
        skills: ['html', 'css', 'js']
      },
      {
        firstName: "haseeb",
        lastName: "khan",
        sec: "B",
        city: "karachi",
        skills: ['html', 'css', 'js']
      },
]

var postObjs = [
    {
         img: "https://img.drz.lazcdn.com/static/pk/p/53719d588e3e5419b05e353c1e7f812d.jpg_720x720q80.jpg_.webp",
         desc: 'dummmy',
         price: 500,
         rating: 5
       },
       {
        img: 'https://img.drz.lazcdn.com/static/pk/p/acd6b6946eaa3fa6267296014dc3503a.jpg_720x720q80.jpg_.webp',
        desc: 'testing',
        price: 800,
        rating: 3
      },
      {
        img: 'https://img.drz.lazcdn.com/static/pk/p/acd6b6946eaa3fa6267296014dc3503a.jpg_720x720q80.jpg_.webp',
        desc: 'testing',
        price: 800,
        rating: 3
      },
 ]

 for(var i=0; i<postObjs.length; i++){
    console.log(postObjs[i].img)
 }

 var parent = document.getElementById('parent')
 function showData(){
    for(var i=0; i<postObjs.length; i++){
        // console.log(postObjs[i].img)
        var div = document.createElement("div")
        var divImg = document.createElement('img')
        divImg.setAttribute('src', postObjs[i].img)
        divImg.setAttribute('class', 'height')
        div.appendChild(divImg)
        parent.appendChild(div)
     }
 }

 showData()