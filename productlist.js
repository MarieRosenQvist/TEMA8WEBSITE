const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const url = `https://kea-alt-del.dk/t7/api/products?category=${category}&limit=20`;

let allProducts = [];
function getProducts() {
  fetch(listURL)
    .then(response => response.json())
    .then((products)=>{
      allProducts = products; // gem orginaldata
          showProducts(allProducts);
    });
  {
    
  }

function showProducts(products) {
  listContainer.innerHTML = "";

  products.forEach((product)=>{
    listContainer.innerHTML += `
  <article class="productCard">
    <h3>${product.productdisplayname}</h3>
    <p>Pris:${product.price}</p>
  </article>
  `;
});
}
 

products.forEach(product => {
  const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  const isSoldOut = product.soldout ? "soldout" : "";
  const saleBadge = product.discount ? `<span class="badge sale">Sale</span>` : "";
  const soldBadge = product.soldout ? `<span class="badge sold">Sold Out</span>` : "";

  container.innerHTML += `
    <a href="productdetails.html?id=${product.id}" class="product ${isSoldOut}">
      ${saleBadge}
      ${soldBadge}
      <img src="${imagePath}" alt="${product.productdisplayname}">
      <h2>${product.productdisplayname}</h2>
      <p class="brand">${product.brandname}</p>
      <p class="price">${product.price} kr.</p>
    </a>
  `;
});
}




const listContainer = document.querySelector("#productListContainer");
const sortByPriceBtn = document.querySelector("#prissortering");
function sortByPriceAsc (){
  console.log(sortByPriceAsc);
}

sortByPriceBtn.addEventListener("click", sortByPriceAsc);


 const container = document.querySelector(".products");