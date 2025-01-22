console.log("vendor");



const titleInp = document.getElementById("title");
const descInp = document.getElementById("desc");
const priceInp = document.getElementById("price");
const imageInp = document.getElementById("imageInp");

async function getUser(){
  const { data: { user } } = await supabaseClient.auth.getUser()
  console.log(user)
}

getUser()

async function addProduct() {
  title = titleInp.value;
  desc = descInp.value;
  price = priceInp.value;
  console.log(title, price, desc);

  const file = imageInp.files[0];
  console.log(file);

  const fileName = `${Date.now()}-${file.name}`;

  const { data, error } = await supabaseClient.storage
    .from("images")
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    alert("Image upload failed");
    console.log(error);
    return;
  }

  console.log(data);

  const {data: productData, error: productError } = await supabaseClient
    .from("products")
    .insert([{
      title: title,
      description: desc,
      price: price,
      imageUrl: data.fullPath
    }]).select()

    if(productError){
      alert('Product failed')
      console.log(productError)
      return
    }

    console.log(productData)

}


async function fetchProducts(){
  const { data, error } = await supabaseClient
  .from('products')
  .select()
  .eq('uid', "ea3b63aa-98ee-4b7b-b337-71c91134abd9")

  console.log(data)

}

fetchProducts()