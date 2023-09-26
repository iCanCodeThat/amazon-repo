//  To Save the Data
//  we will use an array because the data represents a list.
//  Array
//  -   represents a list
//  Object
//  -   it represent each product in the project
//  -   it groups multiple values together
/*
const products = [{
  image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
  name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
  rating: {
    stars: 4.5,
    count: 87
  },
  priceCents: 1090
}, {
  image: 'images/products/intermediate-composite-basketball.jpg',
  name: 'Intermediate Size Basketball',
  rating: {
    stars: 4,
    count: 127
  },
  priceCents: 2095
}, {
  image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name: 'Adults Plain Cotton T-Shirt - 2 Pack',
  rating: {
    stars: 4.5,
    count: 96
  },
  priceCents: 799
},{
  image: 'images/products/black-2-slot-toaster.jpg',
  name: '2 Slot Toaster - Black',
  rating: {
    stars: 5,
    count: 2197
  },
  priceCents: 1899
}];
*/

//  Accumulator Pattern
//  Combine this HTML together and put it on the webpage
//  -   each time we go through the loop 
//  -   we're gonna add this html here
let productsHTML = '';  //  Accumulator variable

//  Generate HTML
//  -   we can loop through an array
//  -   foreach of the products, we will create html
products.forEach((arrProduct)=>{

  //  add html to the variable on top
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image" src="${arrProduct.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${arrProduct.name}        
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${arrProduct.rating.stars *10}.png">
        <div class="product-rating-count link-primary">
          ${arrProduct.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(arrProduct.priceCents / 100).toFixed(2)} 
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart-button" data-product-id = "${arrProduct.id}">
        Add to Cart
      </button>
    </div>
  `; 
  
});
//console.log(productsHTML);

//  put on the webpage using DOM

document.querySelector('.js-products-grid')
  .innerHTML = productsHTML;


//  ADD PRODUCTS TO THE CART
//  instead of querySelector
//  we will use querySelectorAll to give us the list of all the add to cart button in the page
document.querySelectorAll('.js-add-to-cart-button')
  .forEach((button)=>{  // use foreach because it is a list
    button.addEventListener('click', ()=>{
      //  DataSet
      //  gives us all the data attributes attached to a certain element
      const productId = button.dataset.productId;
      
      //  variable to store the matching item
      let matchingItem;

      //  check if the productName is already in the cart
      cart.forEach((item)=>{
        if(productId === item.productId){
          matchingItem = item;  //if we find a matching item, where gonna save it to the global variable
        }
      });
      //  if we did find a matching item, it will be an object
      //  which is a truthy value
      if(matchingItem){
        matchingItem.quantity+=1;
      } //  if the product is not in the cart, we will add it on the cart
      else {
        cart.push({
          productId: productId,
          quantity: 1
        });
      }

      //  CALCULATE TOTAL QUANTITY
      //  -   after we update our cart
      //  -   we are going to calculate the total quantity

      //  create variable to store the Total Quantity
      let cartQuantity = 0;

      //  - by looping through the cart
      //  -   we are gonna add the myQuantity quantity to the cartQuantity
      cart.forEach((myQuantity)=>{
        cartQuantity += myQuantity.quantity;
      });
      console.log(cartQuantity);
      /*
        //  add the variable button to the cart
        //  using push to add it on the cart array
        //  we will push an object
        cart.push({
          productName: productName,
          quantity: 1
        });
      */

      //  Add the CartQuantity to the webpage by using DOM
      document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;
      
      console.log(cart);
    });
  });




  //  Data Attribute
  //  -   just another html attribute
  //  -   allows us to attach any information to an element

  //  Syntax Rule for Data Attribute
  //  -   just an html attribute
  //  -   have to start with "data-"