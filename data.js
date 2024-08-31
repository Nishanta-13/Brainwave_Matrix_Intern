export let cart=[];
export function addToCart(productName, productPrice,productimage) {
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1,image:productimage });
    }
   
}