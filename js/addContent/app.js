const form = document.querySelector('form');
const product = form.elements.product
const qty = form.elements.qty

const ul = document.querySelector("ul");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    ul.insertAdjacentHTML('beforeend', `<li>${qty.value} ${product.value}</li>`)
    resetValues(qty, product)
})

function resetValues(...as) {
    for(let a of as) {
        a.value = '';
    }
}