let getProducts = JSON.parse(localStorage.getItem("products")); /// lấy về data sản phẩm
////// Render data sản phẩm ra màn hình website

const divProducts = document.getElementById("products");
for (let key of getProducts) {
  if (key.stars == 1) {
    star = `<i class="fa-solid fa-star"></i>`
  }
  else if (key.stars == 2) {
    star = `
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    `
  }
  else if (key.stars == 3) {
    star = `
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    `
  }
  else if (key.stars == 4) {
    star = `
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    `
  }
  else {
    star = `
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    `
  }
  divProducts.innerHTML += `
        <div class="card">
          <div class="image-container">
            <img src="${"../assets/products/" + key.image}" alt="">
          </div>
          <div class="container">
           <h4>${key.name}</h4>
           <div class="sale">
            <p>${key.old}</p}
            <p>${key.price}</p>
            </div>
           
           
            <button class="btn btn-add-to-cart">Buy now</button>
          </div>
        </div>
`
}