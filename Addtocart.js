import{cart,addToCart} from '/data.js';
let nav = document.querySelector(".tmplt")

async function loadtmplt(){
    let x=await fetch('/template.html');
    let loader= await x.text();
    nav.innerHTML=loader;
}
loadtmplt();



function updateCartUI() {
    const cartItemsElement = document.querySelector('.cart-items');
    const cartTotalElement = document.querySelector('.cart-total');
    cartItemsElement.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'cart-item';

        listItem.innerHTML = `
             <div class="itmbox">
                        <div class="itm">
                            <div class="itmimg">

                                <img class="img"
                                    src="${item.image}"
                                    alt="">


                            </div>
                        </div>

                        <div class="sbox">
                            <div class="itmname">${item.name}</div>
                            <div class="itmabt"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                                iusto
                                voluptatem esse impedit nihil? Quibusdam perspiciatis dicta delectus consectetur beatae
                                veniam
                                adipisci velit eaque ipsum.</div>

                        </div>
                    </div>
                    <div class="qty">
                        <button onclick="decreaseQuantity(${index})">-</button>
                              ${item.quantity}
                        <button onclick="increaseQuantity(${index})">+</button>
                    </div>
                    <div class="itmprice" data-id="${element.id}">
                        <p>${item.price.toFixed(2)}</p>
                    </div>
        `;

        cartItemsElement.appendChild(listItem);
        total += item.price * item.quantity;
    });

    cartTotalElement.textContent = total.toFixed(2);
    increaseQuantity(index);
    decreaseQuantity(index);
    showNotification();
}

function increaseQuantity(index) {
    cart[index].quantity++;
    updateCartUI();
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1); // Remove item if quantity is 1 and decrease button is clicked
    }
    updateCartUI();
}


function showNotification() {
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}
