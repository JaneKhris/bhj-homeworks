const productAdd = document.querySelectorAll('.product__add');
const cartProducts = document.querySelector('.cart__products');
const buttons_inc = document.querySelectorAll('.product__quantity-control_inc');
const buttons_dec = document.querySelectorAll('.product__quantity-control_dec');

console.log(buttons_dec);

productAdd.forEach((product) => {
    product.addEventListener('click', () => {
        let actualProduct = product.closest('.product');
        let actualId = actualProduct.getAttribute('data-id');
        let actualValue = actualProduct.querySelector('.product__quantity-value').textContent;
        let productInCart = cartProducts.querySelector(`[data-id = "${actualId}"]`)

        if (productInCart) {
            let count = productInCart.querySelector('.cart__product-count');
            count.textContent = Number(count.textContent) + Number(actualValue);
        }
        else {
            cartProducts.innerHTML += `
            <div class="cart__product" data-id=${actualId}>
                <img class="cart__product-image" src=${actualProduct.querySelector('.product__image').getAttribute('src')}>
                <div class="cart__product-count">${actualValue}</div>
            </div>
            `
        }
    })
})

buttons_inc.forEach((button) => {
    button.addEventListener('click', () => {
        let amount = button.parentElement.querySelector('.product__quantity-value');
        amount.textContent = Number(amount.textContent) + 1;
    })
})

buttons_dec.forEach((button) => {
    button.addEventListener('click', () => {
        let amount = button.parentElement.querySelector('.product__quantity-value');
        if (amount.textContent > 1) {
            amount.textContent = Number(amount.textContent) - 1;
        }
        else {
            amount.textContent = 1;
        }
    })
})