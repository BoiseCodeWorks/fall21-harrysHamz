let inventory = {
  bun: {
    name: 'bun',
    price: 5.00,
    img: "https://images.unsplash.com/photo-1588861472194-6883d8b5e552?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  },
  patty: {
    name: "krabby patty",
    price: 2.50,
    img: 'https://images.unsplash.com/photo-1596573052395-36c9b8192f13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
  },
  lettuce: {
    name: "lettuce",
    price: 2.00,
    img: 'https://images.unsplash.com/photo-1543056295-d585ba290712?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  cheese: {
    name: "cheeze",
    price: 4.50,
    img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80'
  },
  ham: {
    name: "ham",
    price: 10.00,
    img: 'https://images.unsplash.com/photo-1524438418049-ab2acb7aa48f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80'
  }
}

let cart = []

// function addBunToCart(bun){
//   cart.push(inventory[bun])
//   console.log(cart)
//   drawCart()
//   totalCartPrice()
// }

// function addPattyToCart(patty){
//   cart.push(inventory[patty])
//   console.log(cart)
//   drawCart()
//   totalCartPrice()
// }

function totalCartPrice(){
  let total = 0
  for(let i = 0; i < cart.length; i++){
    let item = cart[i]
    total += item.price
  }
  drawCartPrice(total)
  return total
}

function purchase(){
  cart = []
  totalCartPrice()
  drawCart()
  Swal.fire({
    toast: true,
    text: 'Here is your burger i guezz',
    position: 'top-right',
    timer: 3000,
    timerProgressBar: true,
    imageUrl: 'https://i.ytimg.com/vi/k5e1HPeusiA/hqdefault.jpg'
  })
}

function addItemToCart(itemName){
  console.log(itemName)
  cart.push(inventory[itemName])
  console.log('cart after add', cart)
  drawCart()
  totalCartPrice()
  playSpecial()
}

function drawInventory(){
  let template = ''
  for(let key in inventory){
    console.log('for in loop key',key)
    let item = inventory[key]
    template += /*html*/ `
    <div class="col-md-2">
      <div class="bg-light shadow rounded">
        <img class="p-2 img-dimensions" src="${item.img}" alt="${item.name} for dayzzz">
        <h4 class="p-2">${item.name}</h4>
        <h6 class="p-2">Price: $${item.price}</h6>
        <button type="button" class="btn btn-info btn-block" onclick="addItemToCart('${key}')">Add To Cart</button>
      </div>
    </div>
    `
  }
  document.getElementById('inventory').innerHTML = template
}

function drawCartPrice(totalPrice){
  document.getElementById('total').innerText = totalPrice
}

function drawCart(){
  let template = ''
  cart.forEach(i => template += /*html*/ `<li>Item: ${i.name} | Price: $${i.price}</li>`)
  document.getElementById('cart').innerHTML = template
}

drawInventory()










// #region
function playSpecial(){
  let filteredItems = cart.filter(s => s.name == "ham")
  if(filteredItems.length >= 10){
    playJohnCena()
  }
}

function playJohnCena(){
  let clipToPlay = document.getElementById('john-cena')
  clipToPlay.play()
  goHam()
  setTimeout(() => {
    clipToPlay.pause()
  }, 6000)
}
// #endregion

// Adds spin effect to all divs
// #region

function goHam(){
  setTimeout(() => {
    document.querySelectorAll('div').forEach(d => d.classList.add('spin'))
    // document.querySelectorAll('div').forEach(d => d.classList.add('shake'))
  }, 2000)
  
  setTimeout(() => {
    document.querySelectorAll('div').forEach(d => d.classList.remove('spin'))
    // document.querySelectorAll('div').forEach(d => d.classList.remove('shake'))
  }, 6000)

}
// #endregion