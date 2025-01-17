const supabaseUrl = 'https://mfipdkqnaupvkkivwafp.supabase.co'

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)

async function fetchProducts(){
    const { data, error } = await supabaseClient
    .from('products')
    .select()

    console.log(data)
   

}

fetchProducts()