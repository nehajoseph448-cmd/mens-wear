// ADD TO CART
let buttons = document.querySelectorAll(".add-cart");
buttons.forEach(function(btn){
btn.addEventListener("click",function(e){
e.preventDefault();
let name = btn.getAttribute("data-name");
let price = btn.getAttribute("data-price");
let product = {
name:name,
price:Number(price)
};
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push(product);
localStorage.setItem("cart",JSON.stringify(cart));
alert("Product Added To Cart");
updateCartCount();
});
});
function loadCart(){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartBox = document.getElementById("cart-items");
let totalBox = document.getElementById("total");
if(cartBox){
cartBox.innerHTML="";
let total=0;
cart.forEach(function(item,index){
total += item.price;
cartBox.innerHTML += `
<div class="card p-3 mb-3">
<h4>${item.name}</h4>
<p>
Rs. ${item.price}
</p>
<button onclick="removeItem(${index})"
class="btn btn-danger">
Remove
</button>
</div>
`;
});
totalBox.innerHTML = total;
}
}
function removeItem(index){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.splice(index,1);
localStorage.setItem("cart",JSON.stringify(cart));
loadCart();
updateCartCount();
}
function updateCartCount(){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let count = document.querySelector(".badge");
if(count){
count.innerHTML = cart.length;
}
}
function confirmOrder(){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
if(cart.length==0){
alert("Cart is Empty");
}
else{
alert("Your Order Confirmed ❤️");
localStorage.removeItem("cart");
loadCart();
updateCartCount();
}
}
window.onload=function(){
loadCart();
updateCartCount();
};