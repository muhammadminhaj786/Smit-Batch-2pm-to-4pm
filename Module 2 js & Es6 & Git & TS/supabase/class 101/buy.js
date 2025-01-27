const supabaseUrl = "https://jfgvfybsnnlfsvrjffrj.supabase.co";


const prodId  =  localStorage.getItem('prodId')
console.log(prodId)

const title = document.getElementById('title')
const img = document.getElementById('img')


async function fetchProducts(){
    const { data, error } = await supabaseClient
  .from('products')
  .select()
  .eq("id", prodId)
  .single()

  console.log(data)

  title.innerHTML = data.title
  img.setAttribute('src', `${supabaseUrl}/storage/v1/object/${data.imageUrl}`)

}

fetchProducts()