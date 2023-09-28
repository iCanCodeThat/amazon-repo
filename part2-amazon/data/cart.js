export let cart = JSON.parse(localStorage.getItem('cart')); 

if(!cart){
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
  },{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
  }];
}



// localstorage
function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

//  Function Add to Cart
export function addToCart(productId){
  //  variable to store the matching item
  let matchingItem;

  //  check if the productName is already in the cart
  cart.forEach((cartItem)=>{
    if(productId === cartItem.productId){
      matchingItem = cartItem;  //if we find a matching item, where gonna save it to the global variable
    }
  });
  //  if we did find a matching item, it will be an object
  //  which is a truthy value
  if(matchingItem){
    matchingItem.quantity+=1;
  } //  if the product is not in the cart, we will add it on the cart
  else {
    cart.push({
      //productId: productId,
      productId,
      quantity: 1
    });
  }
  saveToStorage();
}


//  Delete an Item
export function removeProductFromCart(productId){  
  //  create new array
  const newCart = [];
  //  Loop through the cart
  cart.forEach((cartItem)=>{
    //  add each product to the new array, except for the productId
    if(cartItem.productId !== productId){
      newCart.push(cartItem); //  result is that it gonna contain all the cart item that dont match the productId above, same thing as removing this from the cart
    }
  });
  //  replace the cart above
  cart = newCart;

  saveToStorage();
}