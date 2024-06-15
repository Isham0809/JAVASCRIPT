// Array of object/ product
const products = [
    {
        id: 0, name: "Foundation", price: "10", image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg"
    },
    {
        id: 1, name: "Face Serum", price: "20", image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4041392.jpg&fm=jpg"
    },
    {
        id: 2, name: "Full Makeup kit", price: "50", image: "https://jureursicphotography.com/wp-content/uploads/2020/10/2020_02_21_Sephora-Favurite-Box5247.jpg"
    },
    {
        id: 3, name: "Vanila Purfume", price: "80", image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtNDY4LXBmLXM1MC1wYWktMDAwNy1lMDEtcm00NjgtbW9ja3VwLmpwZw.jpg"
    },
    {
        id: 4, name: "Purfume for Women", price: "70", image: "https://static.vecteezy.com/system/resources/thumbnails/026/439/486/small_2x/perfume-luxury-bottle-product-design-perfumery-generative-ai-photo.jpg"
    },
    {
        id: 5, name: "Eye Makeup Kit", price: "60", image: "https://miro.medium.com/v2/da:true/resize:fit:1200/0*L8Ki7NuqWZK7pwM5"
    },
    {
        id: 6, name: "Blush", price: "90", image: "https://thebeautyeditor.com/cdn/shop/articles/STILA_1024x1024.jpg?v=1556784536"
    },
    {
        id: 7, name: "Highlighter", price: "40", image: "https://beautybrainsblush.com/wp-content/uploads/2021/01/beautybrainsblush-ult-guide-to-highlighter-rotated.jpg"
    }
]

let cart = JSON.parse(localStorage.getItem('cart')) || []

// Render products on the index page
if (document.getElementById("products")) {
    const productContainer = document.getElementById("products")
    products.forEach(product => {
        const productElement = document.createElement("div")
        productElement.className = 'col-md-3 mb-4';

        productElement.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        productContainer.appendChild(productElement)
    })
}

// Render cart on cart page
if (document.getElementById("my-cart")) {
    updateCart()
}

function addToCart(productId) {
    const product = products.find(p => p.id == productId)
    const cartItem = cart.find(item => item.id == productId)

    if (cartItem) {
        cartItem.quantity += 1
    } else {
        cart.push({...product, quantity: 1})
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    updateCartCount()
}

function updateCart() {
    const cartItemsContainer = document.getElementById("my-cart")
    const totalContainer = document.getElementById("total")

    if (cartItemsContainer && totalContainer) {
        cartItemsContainer.innerHTML = ""
        let total = 0
        cart.forEach((product, index) => {
            const cartItem = document.createElement("div")
            cartItem.className = "col-12 mb-3"
            cartItem.innerHTML = `
                <div class="card">
                    <div class="card-body d-flex justify-content-between align-items-center p-2">
                        <img src="${product.image}" class="img-thumbnail mr-3" style="width: 100px;" alt="${product.name}">
                        <div>
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">$${product.price} </p>
                        </div>
                        <div class="fw-bold fs-5">
                        x ${product.quantity}
                        </div>
                        <div>
                            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${product.id})">Remove</button>
                        </div>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem)

            total += product.price * product.quantity;
        })
        totalContainer.innerText = `Total: $${total.toFixed(2)}`;
    }
}

function updateCartCount() {
        const cartCountElement = document.getElementById("cart-count")
        if (cartCountElement) {
            let totalCount = 0;
            cart.forEach(item => {
                totalCount += item.quantity;
            });
            cartCountElement.innerHTML = totalCount;
        }
}

function removeFromCart(productId) {
    const cartItem = cart.find(item => item.id == productId)

    if (cartItem.quantity > 1) {
        cartItem.quantity -= 1
    } else {
        cart = cart.filter(product => product.id !== productId)
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    updateCart()
    updateCartCount()
}

// Initial load
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount()
    if (document.getElementById('my-cart')) {
        updateCart()
    }
})
