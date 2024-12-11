

// var firstName = 'Ali'
// var lastName = 'Khan'
// var rollNo = '123'

// var stdArr = ['Ali', 'Khan', '123']

var std1Obj = {
    firstName: 'Ali',
    lastName: 'khan',
    rollNo: '123',
    getFullName: function(){
        var fullName = this.firstName + " " + this.lastName
        console.log(fullName)
    }
}


console.log(std1Obj)

//array notation
console.log(std1Obj['rollNo'])

//dot notation
console.log(std1Obj.lastName)

std1Obj.getFullName()


//constructor
var stdObj =  function(firstName, lastName, rollNo){
    this.firstName = firstName
    this.lastName = lastName
    this.rollNo = rollNo
}

var std2Obj = new stdObj("haseeb", "sheikh", '456')
console.log(std2Obj)
var std3Obj = new stdObj('imran', 'khan', '804')
var std4Obj = new stdObj('talha', 'anjum', '333')