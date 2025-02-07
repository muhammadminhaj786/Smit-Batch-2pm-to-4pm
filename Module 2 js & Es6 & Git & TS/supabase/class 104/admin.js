

const tBody = document.getElementById("tBody");

async function fetchSells() {
  const { data, error } = await supabaseClient.from("sells").select();

  console.log(data);

  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);

    const product = data[i]

    const tr = document.createElement("tr");
    tr.innerHTML = `
     <th scope="row">${i + 1}</th>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.productID}</td>
            <td>${product.userID}</td>
    `;


    tBody.appendChild(tr)

  }
}

fetchSells();
