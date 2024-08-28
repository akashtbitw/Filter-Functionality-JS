const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 16,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 74,
      cat: "Casual",
    },
  ];


  const productContainer = document.querySelector(".products")
  const categoryContainer = document.querySelector(".cats")
  const searchBox = document.querySelector(".search")
  const priceRange = document.querySelector(".priceRange")
  const priceValue = document.querySelector(".priceValue")



  const displayProducts = (filteredData) => {
    productContainer.innerHTML = filteredData.map(item => 
        `
        <div class="product">
            <img src="${item.img}" alt="">
            <span class="name">${item.name}</span>
            <span class="priceText">$${item.price}</span>
        </div>`
    ).join("")
  }

   const displayCategories = (data) => {
    const allCats = data.map(item => item.cat)
    const categories = ["All", ...allCats.filter((item, i) => allCats.indexOf(item) === i)]
    categoryContainer.innerHTML = categories.map(cat => 
        `
        <span class="cat">${cat}</span>
        `
    ).join("")

    categoryContainer.addEventListener("click", (e) => {
      e.target.textContent === "All" ? displayProducts(data) : displayProducts(data.filter(item => item.cat === e.target.textContent))
    })
   }

  displayProducts(data)
  displayCategories(data)

searchBox.addEventListener("keyup", (e) => {
  const searchInput = e.target.value.toLowerCase()
  if(searchInput) {
    displayProducts(data.filter(item => item.name.toLowerCase().indexOf(searchInput) !== -1))
  }
  else {
    displayProducts(data)
  }
})

const setPrice = () => {
  const priceList = data.map(item => item.price)
  const minValue = Math.min(...priceList)
  const maxValue = Math.max(...priceList)

  priceRange.min = minValue
  priceRange.max = maxValue
  priceRange.value = maxValue
  priceValue.textContent = "$" + maxValue

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "$" + e.target.value
    displayProducts(data.filter(item => item.price <= e.target.value))
  })
}

setPrice()


