let cart = []
let total = 0 

function addToCart(itemName) {
  let price
  switch (itemName) {
    case 'Burger':
      price = 10
      break
    case 'Pizza':
      price = 15
      break
    case 'Noodles':
      price = 20
      break
    case 'Noodles Spicy':
      price = 22
      break
    case 'Paneer Spicy':
      price = 24
      break
    case 'Manchurium':
      price = 30
      break
    case 'Springroll':
      price = 35
      break
    case 'Chinese Momos':
      price = 15
      break
    default:
      price = 0
  }
  cart.push({name: itemName, price})
  total += price
  updateCart();

}

function updateCart() {
  let cartItem = document.getElementById('cart-items')
  cartItem.innerHTML = ''
  cart.forEach(item => {
    let li = document.createElement('li')
    li.textContent = `${item.name} - ${item.price}`
    cartItem.appendChild(li)
  });
  document.getElementById('total-price').textContent = total
}
