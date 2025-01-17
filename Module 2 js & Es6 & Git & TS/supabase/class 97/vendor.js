console.log('vendor')

const supabaseUrl = 'https://mfipdkqnaupvkkivwafp.supabase.co'

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)

const titleInp = document.getElementById('title')
const descInp = document.getElementById('desc')
const priceInp = document.getElementById('price')

async function addProduct(){
    title = titleInp.value
    desc = descInp.value
    price = priceInp.value
    console.log(title, price, desc)

    const { error } = await supabaseClient
  .from('products')
  .insert([
    {
        title: title,
        description: desc,
        price: price
    }
  ])

  if(!error){
    alert('product created successfully')
  }

  console.log(error)


}