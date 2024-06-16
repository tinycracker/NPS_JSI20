let getProducts = JSON.parse(localStorage.getItem("products")); /// lấy về data sản phẩm
////// Render data sản phẩm ra màn hình website

const divProducts = document.getElementById("products");
for (let key of getProducts) {
  divProducts.innerHTML += `
        <div class="card">
          <div class="image-container">
            <img src="${key.image}" alt="">
          </div>
          <div class="container">
           <a><h4>${key.name}</h4></a>
           <div class="sale">
            <p>${key.price}</p>
            </div>
        </div>
`
}








let getProduct = JSON.parse(localStorage.getItem("product")); /// lấy về data sản phẩm
////// Render data sản phẩm ra màn hình website

const divProductList = document.getElementById("product-list");
for (let ky of getProduct) {
  divProductList.innerHTML += `
        <div class="top">
          <div class="img-container">
            <img src="${ky.img}" alt="">
          </div>
          <div class="tainer">
          <div class="sales">
            <p>Sales: ${ky.sales}+</p>
            </div> <a><h5>${ky.nam}</h5></a>
           
            </div>
        </div>
`
}






let getPro = JSON.parse(localStorage.getItem("pro")); /// lấy về data sản phẩm


////// Render data sản phẩm ra màn hình website
let star;
const divPro = document.getElementById("daily");
for (let ke of getPro) {
  if (ke.stars == 1) {
    star = `<i class="fa-solid fa-star" style="color: #cda22d;"></i>`
  }
  else if (ke.stars == 2) {
    star = `
    <i class="fa-solid fa-star" style="color: #cda22d;"></i>
    <i class="fa-solid fa-star" style="color: #cda22d;"></i>
    `
  }
  else if (ke.stars == 3) {
    star = `
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
    `
  }
  else if (ke.stars == 4) {
    star = `
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
    `
  }
  else {
    star = `
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
<i class="fa-solid fa-star" style="color: #cda22d;"></i>
    `
  }
  divPro.innerHTML += `

       <a> <div class="pro">
          <div class="im">
            <img src="${ke.im}" alt="">
          </div>
          <div class="con">
            <h5>${ke.na}</h5>
            <div class="stars">
            ${star}
            </div>
            <h5>
              <span class="old-price">${ke.pri}</span>
            </h5>
            <div class="button">
            <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
          </div>
        </div></a>
`
}













