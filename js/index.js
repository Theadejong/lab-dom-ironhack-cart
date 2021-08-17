  <!-- Iteration 2: Add more products here -->
  </tbody>
  <tfoot>
    <!-- <tr class="create-product">
    <tr class="create-product">
      <td>
        <input type="text" placeholder="Product Name" />
        <input id="productName" type="text" placeholder="Product Name" />
      </td>
      <td>
        <input type="number" min="0" value="0" placeholder="Product Price" />
        <input id="productPrice" type="number" min="0" value="0" placeholder="Product Price" />
      </td>
      <td></td>
      <td></td>
      <td>
        <button id="create" class="btn">Create Product</button>
      </td>
    </tr> -->
    </tr>
  </tfoot>
</table>
<p class="calculate-total">
65  js/index.js 
View full
Viewed
@@ -2,41 +2,82 @@

function updateSubtotal(product) {
console.log('Calculating subtotal, yey!');
// step 1
const price = product.querySelector('.price span');
const quantity = product.querySelector('.quantity input');

//... your code goes here
const priceValue = price.innerText;
const quantityValue = quantity.value;

const subtotalPrice = priceValue * quantityValue;

let subtotal = product.querySelector('.subtotal span');

subtotal.innerText = subtotalPrice;

return subtotalPrice;
}

// ITERATIONS 2 & 3

function calculateAll() {
// code in the following two lines is added just for testing purposes.
// it runs when only iteration 1 is completed. at later point, it can be removed.
const singleProduct = document.querySelector('.product');
updateSubtotal(singleProduct);
// end of test
const productElements = document.querySelectorAll('.product');
let totalPrice = 0;

// ITERATION 2
//... your code goes here
productElements.forEach(function (oneProduct) {
var productTotal = updateSubtotal(oneProduct);
totalPrice += productTotal;
});

// ITERATION 3
//... your code goes here
var totalPriceElement = document.querySelector('#total-value span');
totalPriceElement.textContent = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
const target = event.currentTarget;
console.log('The target in remove is:', target);
//... your code goes here
target.parentElement.parentElement.remove();
}

// ITERATION 5

function createProduct() {
function createProduct(event) {
//... your code goes here
const target = event.currentTarget;
console.log('The target to create is:', target);
const productName = document.getElementById("productName")
const productPrice = document.getElementById("productPrice")
const list = document.querySelector("#cart>tbody");
const newElement = document.createElement("tr")
newElement.classList = "product"
newElement.innerHTML = `<td class="name">
<span>${productName.value}</span>
</td>
<td class="price">$<span>${productPrice.value}</span></td>
<td class="quantity">
<input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
<button class="btn btn-remove">Remove</button>
</td>`
list.appendChild(newElement)
const removeButton = newElement.querySelector(".btn-remove");
removeButton.addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
const calculatePricesBtn = document.getElementById('calculate');
calculatePricesBtn.addEventListener('click', calculateAll);
const removeProductBtns = document.getElementsByClassName('btn-remove');
for (let i = 0; i < removeProductBtns.length; i++) {
const button = removeProductBtns[i];
button.addEventListener('click', removeProduct);
};
const createProductBtn = document.getElementById('create');
createProductBtn.addEventListener('click', createProduct);

//... your code goes here
});