console.log("class 61");

// console.log(document.write('<h1>hello</h1>'))

var para1 = document.getElementById("para1");
console.log(para1);
para1.innerHTML = "PAKISTAN";
para1.style.color = "green";
para1.className = "dummy";

var paraEle = document.getElementsByTagName("p");
console.log(paraEle);
paraEle[3].style.color = "pink";

var para2 = document.getElementById("para2");
var newPara =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas dicta corporis impedit aperiam voluptatum quisquam deleniti fuga doloribus expedita dolores, molestias aut aliquam iste consectetur alias eos omnis velit ullam!Perferendis ipsum nemo dolorum inventore corporis, quisquam aliquam asperiores maxime. Sed alias fuga, nisi nobis exercitationem, quibusdam ducimus, eaque suscipit nihil magnam nam excepturi. Magni omnis sit reiciendis exercitationem repudiandae?";

function expand() {
  console.log("click");
  console.log(para2.innerHTML);
  para2.innerHTML = newPara
}

("DOM");
("D => Document");
("O => Object");
("M => Model");

console.log(document.childNodes[1].childNodes[2].childNodes[1])
