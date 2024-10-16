function getPara(ele){
    console.log(ele)
}

function getInputValue(fieldId){
    console.log(document.getElementById(fieldId).value)

}

var oldPara = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, quia vero? Nisi sint id est commodi laboriosam velit ipsa ab magnam,'
var newPara = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, quia vero? Nisi sint id est commodi laboriosam velit ipsa ab magnam, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, quia vero? Nisi sint id est commodi laboriosam velit ipsa ab magnam,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, quia vero? Nisi sint id est commodi laboriosam velit ipsa ab magnam,'

function expandPara(paraID, btnID){
    console.log(paraID, btnID)
    var para = document.getElementById(paraID)
    var btn = document.getElementById(btnID)
    console.log(btn.innerHTML)
    para.innerHTML = newPara
    if(btn.innerHTML =='see more'){
        btn.innerHTML = 'see less'
    }else {
        btn.innerHTML = 'see more'
    }
}