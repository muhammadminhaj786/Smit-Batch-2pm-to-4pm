//method
var stdObj = {
    firstName: 'Ali',
    lastName: 'khan',
    rollNo: '123',
    subjects:[
        {
            name: 'Math',
            marks: 90
        },
        {
            name: 'Eng',
            marks: 90
        },
        {
            name: 'Urdu',
            marks: 67

        }
    ],
    getFullName: function(){
        var fullName = this.firstName + " " + this.lastName
        return fullName
    },
    age: function(dob) {
        var currentMili = new Date().getTime()
        console.log(currentMili)
        var birthMili = new Date(dob).getTime()
        console.log(birthMili)
        var diffMili = currentMili - birthMili
        console.log(diffMili)
        var currentAge = Math.floor(diffMili / (1000 * 60 * 60 * 24 * 365))
       return currentAge
    },
    getTotal: function(){
        // console.log(this.subjects[0].marks)
        var totalMarks = 0
        for(var i=0; i<this.subjects.length;i++){
            console.log(this.subjects[i].marks)
            totalMarks = totalMarks + this.subjects[i].marks
        }
        return totalMarks
    },
    percentage: function (){
        return (this.getTotal() / 300 ) * 100
    }

}

console.log(stdObj.firstName)
console.log(stdObj["lastName"])
console.log(stdObj.getFullName())
var stdAge = stdObj.age('june 18 2008')
console.log(stdAge)
var stdTotal = stdObj.getTotal()
console.log(stdTotal)
var stdPercentage = stdObj.percentage()
console.log(stdPercentage)

// constructor
function Std (firstName , lastName, rollNo){
    this.firstName = firstName
    this.lastName = lastName
    this.rollNo = rollNo
}

var std1 = new Std('minhaj', 'wahid', '123')
var std2 = new Std('Ali', 'khan', '456')
console.log(std1.lastName)
var arr = []
arr.push(std1)
arr.unshift(std2)
console.log(arr)
