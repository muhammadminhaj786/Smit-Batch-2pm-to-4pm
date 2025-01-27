console.log("vendor");
const supabaseUrl = "https://jfgvfybsnnlfsvrjffrj.supabase.co";


const titleInp = document.getElementById("title");
const descInp = document.getElementById("desc");
const priceInp = document.getElementById("price");
const imageInp = document.getElementById("imageInp");
const myCards = document.querySelector(".my-cards");

// async function getUser(){
//   const { data: { user } } = await supabaseClient.auth.getUser()
//   console.log(user)
// }

// getUser()

const key = localStorage.getItem("sb-jfgvfybsnnlfsvrjffrj-auth-token");

const parsedKey = JSON.parse(key);
console.log(parsedKey.user.id);

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

  const { data: productData, error: productError } = await supabaseClient
    .from("products")
    .insert([
      {
        title: title,
        description: desc,
        price: price,
        imageUrl: data.fullPath,
        uid: parsedKey.user.id,
      },
    ])
    .select();

  if (productError) {
    alert("Product failed");
    console.log(productError);
    return;
  }

  console.log(productData);


  showToUi(productData[0])


  // if(productData){
  //   window.location.reload()
  // }

}

async function fetchVendorsPro() {
  const { data, error } = await supabaseClient
    .from("products")
    .select()
    .eq("uid", parsedKey.user.id);

  console.log(data);

  // for (var i = 0; i < data.length; i++) {

  //   const product = data[i]
  //   console.log(product)
  //   showToUi(product)

   
  // }

  for(var i=0 ; i<data.length;i++){
    
    console.log(data[i])
    const product = data[i]

    showToUi(product)
  }

  

}
fetchVendorsPro();

function showToUi(product){

  // console.log(product)

  // myCards.innerHTML += " "

  const cardDiv = document.createElement("div");
  cardDiv.className = "col-md-3 col-sm-6";

  cardDiv.innerHTML = `
       <div class="card" style="width: 18rem;">
          <img src="${supabaseUrl}/storage/v1/object/${product.imageUrl}" class="card-img-top my-height" alt="...">
          <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">${product.description}.</p>
            
              <p>
                  ${product.price}<span>PKR</span>
              </p>

             <div>
              <button class="btn btn-info">
                  Update
              </button>
              <button onclick="deleteProduct(${product.id})" class="btn btn-danger">
                  Delete
              </button>
             </div>

          </div>
      </div>
      `;

  myCards.appendChild(cardDiv);
}

async function deleteProduct(productId){

  console.log(productId)
  const {data, error} = await supabaseClient
  .from('products')
  .delete()
  .eq('id', productId)
  .select()

  if(!error){
    window.location.reload()
  }

  


}
