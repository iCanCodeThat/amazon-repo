export const cart = [];

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
}