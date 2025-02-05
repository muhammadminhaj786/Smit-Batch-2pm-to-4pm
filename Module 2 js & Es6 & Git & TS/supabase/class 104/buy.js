



const prodID = localStorage.getItem('prodID')
console.log(prodID)
const ID = JSON.parse(localStorage.getItem('sb-jfgvfybsnnlfsvrjffrj-auth-token'))
const userID = ID.user.id

const img = document.getElementById('img')
const title = document.getElementById('title')
const desc = document.getElementById('desc')
const price = document.getElementById('price')

async function fetchProducts(){
    const { data, error } = await supabaseClient
  .from('products')
  .select()
  .eq("id", prodID)
  .single()

  console.log(data)

  localStorage.setItem('title', data.title)
  localStorage.setItem('price', data.price)
 
  img.setAttribute('src', `${supabaseUrl}/storage/v1/object/${data.imageUrl}`)
  title.innerHTML = data.title
  desc.innerHTML = data.description
  price.innerHTML = data.price

}

fetchProducts()

async function buyNow(){
  const { error } = await supabaseClient
  .from('sells')
  .insert([{
    title: localStorage.getItem('title'),
    price: localStorage.getItem('price'),
    userID: userID,
    productID: prodID 
  }])

  if(error){
    alert('failed to placed order')
    console.log(error)
  }else{
    alert('Order Placed Successfully')
    window.location.href = '/buyer.html'
  }

}