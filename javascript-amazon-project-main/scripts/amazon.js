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

      <button class="add-to-cart-button button-primary">
        Add to Cart
      </button>
    </div>
  `; 
  
});
//console.log(productsHTML);

//  put on the webpage using DOM

document.querySelector('.js-products-grid')
  .innerHTML = productsHTML;
