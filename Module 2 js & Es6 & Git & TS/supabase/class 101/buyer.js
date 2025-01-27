const supabaseUrl = "https://jfgvfybsnnlfsvrjffrj.supabase.co";

const parentDiv = document.querySelector(".my-cards");

async function fetchProducts() {
  const { data, error } = await supabaseClient.from("products").select();

  console.log(data);

  for (var i = 0; i < data.length; i++) {
    // console.log(data[i])
    const product = data[i];
    console.log(product);

    const imageSrc = `${supabaseUrl}/storage/v1/object`;

    // // create a parent div
    // const cardDiv = document.createElement('div')
    // cardDiv.classList.add('card')
    // cardDiv.style.width = "18rem";

    // // create a image
    // const img = document.createElement('img')
    // img.classList.add('card-img-top')
    // img.setAttribute('src', `images/${product.image}`)

    // //card body
    // const cardBody = document.createElement('div')
    // cardBody.classList.add('card-body')

    // //create h5
    // const h5 = document.createElement('h5')
    // h5.classList.add('card-title')
    // h5.innerHTML = product.title

    // //create description
    // const p = document.createElement('p')
    // p.classList.add('card-text')
    // p.innerHTML = product.description

    // //create price
    // const priceP = document.createElement('p')
    // priceP.innerHTML = `${product.price} PKR`

    // //create button div
    // const btnDiv = document.createElement("div")
    // const buyBtn = document.createElement('button')
    // // buyBtn.classList.add("btn", "btn-success")
    // buyBtn.className = "btn btn-success"
    // buyBtn.innerHTML = 'Buy Now'

    // const cartBtn = document.createElement('button')
    // cartBtn.className = "btn btn-info"
    // cartBtn.innerHTML = 'Add to cart'

    // cardDiv.appendChild(img)
    // btnDiv.appendChild(cartBtn)
    // btnDiv.appendChild(buyBtn)
    // cardBody.appendChild(btnDiv)

    // cardBody.appendChild(priceP)

    // cardBody.appendChild(p)

    // cardBody.appendChild(h5)
    // cardDiv.appendChild(cardBody)

    // parentDiv.appendChild(cardDiv)

    const cardDiv = document.createElement("div");
    cardDiv.className = "col-md-3 col-sm-6";
    cardDiv.innerHTML = `
         <div class="card" style="width: 18rem;">
            <img src="${imageSrc}/${product.imageUrl}" class="card-img-top my-height" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}.</p>
              
                <p>
                    ${product.price} <span>PKR</span>
                </p>

               <div>
                <button onclick="buyNow(${product.id})" class="btn btn-success">
                    Buy Now
                </button>
                <button class="btn btn-info">
                    Add To Cart
                </button>
               </div>

            </div>
        </div>
        `;

    parentDiv.appendChild(cardDiv);
  }
}

fetchProducts();

async function buyNow(id) {
  console.log("buy", id);

  localStorage.setItem('prodId', id)



  window.location.href = '/buy.html'

}
