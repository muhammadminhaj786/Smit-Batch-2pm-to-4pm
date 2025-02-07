const supabaseUrl = "https://jfgvfybsnnlfsvrjffrj.supabase.co";

const titleInp = document.getElementById("title");
const descInp = document.getElementById("desc");
const priceInp = document.getElementById("price");
const imageInp = document.getElementById("imageInp");
const myCards = document.querySelector(".my-cards");
const productModal = new bootstrap.Modal(
  document.getElementById("exampleModal")
);
console.log(productModal);
let editProductId = null;
const listProduct = document.getElementById("listProduct");
const uidKey = JSON.parse(localStorage.getItem('sb-jfgvfybsnnlfsvrjffrj-auth-token'))
const uid = uidKey.user.id
console.log(uid)



// async function getUser() {
   
//   const userid = localStorage.setItem('uid', user.id)
//   const uid = localStorage.getItem('uid')

// }

// getUser();



async function fetchProducts() {
  ({data: { user }, } = await supabaseClient.auth.getUser());
  console.log(user.id);


  const { data, error } = await supabaseClient
    .from("products")
    .select()
    .eq("uid", uid);
  console.log(data);

  myCards.innerHTML = "";

  for (var i = 0; i < data.length; i++) {
    // console.log(data[i]);
    const product = data[i];

    const cardDiv = document.createElement("div");
    cardDiv.className = "col-md-3 col-sm-6";

    cardDiv.innerHTML = ` <div class="card" style="width: 18rem;">
  <img height='320px' src="${supabaseUrl}/storage/v1/object/${product.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.description}</p>
     <p class="card-text">${product.price}</p>
   <div class="d-flex gap-2 justify-content-center">
    <button onclick="updateProduct(${product.id})" class="btn btn-info">Update </button>
    <button onclick="deleteProduct(${product.id})" class="btn btn-danger">delete </button>
   </div>
  </div>
</div>`;

    myCards.appendChild(cardDiv);
  }
}

async function addProduct() {
  title = titleInp.value;
  desc = descInp.value;
  price = priceInp.value;
  file = imageInp.files[0];

  console.log(title, price, desc, file);

  if (editProductId) {
    const { error } = await supabaseClient
      .from("products")
      .update({
        title: title,
        description: desc,
        price: price,
      })
      .eq("id", editProductId);

    if (!error) {
      alert("Product update successfully");
    }
  } else {
    const fileName = `${Date.now()}-${file.name}`;

    const { data: imageData, error: imageError } = await supabaseClient.storage
      .from("images")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (imageData) {
      console.log("image upload", imageData);
    }

    const { data, error } = await supabaseClient
      .from("products")
      .insert([
        {
          title: title,
          description: desc,
          price: price,
          imageUrl: imageData.fullPath,
          uid: uid,
        },
      ])
      .select();

    console.log(data);
    if (!error) {
      alert("product add successfully");
    }
  }

  fetchProducts();
  productModal.hide();
  clearFields();
}

async function updateProduct(id) {
  listProduct.innerHTML = "edit product";
  console.log("update", id);
  productModal.show();
  editProductId = id;

  const { data, error } = await supabaseClient
    .from("products")
    .select()
    .eq("id", id)
    .single();
  console.log(data);

  titleInp.value = data.title;
  descInp.value = data.description;
  priceInp.value = data.price;
}

function clearFields() {
  titleInp.value = "";
  descInp.value = "";
  priceInp.value = "";
  listProduct.innerHTML = "list product";
}

async function deleteProduct(id) {
  console.log("delete");
  const response = await supabaseClient.from("products").delete().eq("id", id);
  fetchProducts();
}

fetchProducts();
