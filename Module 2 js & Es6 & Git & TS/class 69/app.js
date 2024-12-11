

var data = [
    {
        img: 'https://img.drz.lazcdn.com/static/pk/p/5a526ce561df8653c0e985c79d9e442c.jpg_720x720q80.jpg_.webp',
        description: 'Men High Quality Winter Markhor Printed Hoodie + Trouser Track Suit for men' ,
        price: 'Rs 300',
        rating: 4
    },
    {
        img: 'https://img.drz.lazcdn.com/static/pk/p/d0da8b07d9d4743b8e5a5879e91ee580.jpg_720x720q80.jpg_.webp',
        description: 'EVENTO Slim and Light weight Canvas Wallet For Men | Premium Quality' ,
        price: 'Rs 400',
        rating: 3
    },
    {
        img: 'https://img.drz.lazcdn.com/static/pk/p/2b22797c4c6740bd6d506e2f00ea429c.jpg_720x720q80.jpg_.webp',
        description: 'Keratin Hair Mask Treatment 500ml: The Key to Stronger, Healthier Hair"' ,
        price: 'Rs 600',
        rating: 5
    },
    {
        img: 'https://img.drz.lazcdn.com/static/pk/p/2b22797c4c6740bd6d506e2f00ea429c.jpg_720x720q80.jpg_.webp',
        description: 'Keratin Hair Mask Treatment 500ml: The Key to Stronger, Healthier Hair"' ,
        price: 'Rs 600',
        rating: 5
    },
]
console.log(data)

// var postObj = {
//     img: 'https://img.drz.lazcdn.com/static/pk/p/5a526ce561df8653c0e985c79d9e442c.jpg_720x720q80.jpg_.webp',
//     description: 'Men High Quality Winter Markhor Printed Hoodie + Trouser Track Suit for men' ,
//     price: '300',
//     rating: 4
// }

// console.log(postObj["img"])

var parent = document.getElementById('parent')
function showData(){
    for(var i = 0; i<data.length; i++){
        parent.classList.add('d-flex','gap-5')
        var cartDiv = document.createElement('div')
        cartDiv.classList.add('card', 'cart')
        var imgDiv = document.createElement('div')
        var myImg = document.createElement('img')
        myImg.classList.add('card-img-top')
        myImg.setAttribute('src', data[i].img )
        imgDiv.appendChild(myImg)
        var contentDiv = document.createElement('div')
        contentDiv.classList.add('card-body')
        var para = document.createElement('p')
        para.classList.add('card-text')
        var paraText = document.createTextNode(data[i].description)
        var h5 = document.createElement('h5')
        h5.classList.add('card-title')
        var h5Text = document.createTextNode(data[i].price)
        h5.appendChild(h5Text)
        para.appendChild(paraText)
        contentDiv.appendChild(para)
        contentDiv.appendChild(h5)
        cartDiv.appendChild(imgDiv)
        cartDiv.appendChild(contentDiv)

        parent.appendChild(cartDiv)
    }
}

showData()


var arr = ['ali', 'imran', 'talha']
for(var i =0; i<arr.length; i++){
    console.log(arr[i])
}


var std1Obj = {
    firstName: 'ali',
    lastName: 'khan',
    age: '22',
    rollNo: '123'
}

for(var key in std1Obj){
    console.log(std1Obj[key])
}