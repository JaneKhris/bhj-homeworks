const productAdd = document.querySelectorAll('.product__add');
const cartProducts = document.querySelector('.cart__products');
const buttons_inc = document.querySelectorAll('.product__quantity-control_inc');
const buttons_dec = document.querySelectorAll('.product__quantity-control_dec');

cartVisible()

productAdd.forEach((product) => {
    product.addEventListener('click', () => {
        let actualProduct = product.closest('.product');
        let actualId = actualProduct.getAttribute('data-id');
        let actualValue = actualProduct.querySelector('.product__quantity-value').textContent;
        let productInCart = cartProducts.querySelector(`[data-id = "${actualId}"]`);

        if (productInCart) {
            let count = productInCart.querySelector('.cart__product-count');
            count.textContent = Number(count.textContent) + Number(actualValue);

        }
        else {
            let productNew = document.createElement('div');

            productNew.innerHTML = `
            <div class="cart__product" data-id=${actualId}>
                <img class="cart__product-image" src=${actualProduct.querySelector('.product__image').getAttribute('src')}>
                <div class="cart__product-count">${actualValue}</div>
                <a href="#" class="product__remove">×</a>
            </div>
            `;
            cartProducts.appendChild(productNew);
            cartVisible();

            let productRemove = productNew.querySelector('.product__remove');
            productRemove.addEventListener('click', (event) => {
                event.preventDefault();
                productRemove.closest('.cart__product').remove();
                cartVisible();
            })
        }
        productInCart = cartProducts.querySelector(`[data-id = "${actualId}"]`);
        console.log(productInCart.querySelector('.cart__product-image').getBoundingClientRect().left);
        console.log(actualProduct.querySelector('.product__image').getBoundingClientRect().top);
        let leftStart = actualProduct.querySelector('.product__image').getBoundingClientRect().left;
        let topStart = actualProduct.querySelector('.product__image').getBoundingClientRect().top;
        let leftFinish = productInCart.querySelector('.cart__product-image').getBoundingClientRect().left;
        let topFinish = productInCart.querySelector('.cart__product-image').getBoundingClientRect().top;
        let imageToCart = document.createElement('img');
        imageToCart.setAttribute('src', actualProduct.querySelector('.product__image').getAttribute('src'));
        imageToCart.setAttribute("style",`left:${leftStart}px; top:${topStart}px`);
        imageToCart.className = 'image_to_cart';
        cartProducts.appendChild(imageToCart);
        imageMove(imageToCart,topStart, leftStart, topFinish, leftFinish,30,10);
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

function cartVisible() {
    if (cartProducts.querySelector('.cart__product')) {
        cartProducts.parentElement.className = 'cart';
    }
    else {
        cartProducts.parentElement.className = 'cart cart_hide';
    }
}

function imageMove(img,topStart, leftStart, topFinish, leftFinish,n,speed) {
    let dTop = (topFinish - topStart)/n;
    let dLeft = (leftFinish - leftStart)/n;
    let top = topStart;
    let left = leftStart;
    let id = setInterval(() => {
        if (top <= (topFinish - dTop)) {
            img.remove();
            clearInterval(id);
        }
        top += dTop;
        left += dLeft;
        img.setAttribute("style",`left:${left}px; top:${top}px`);
    },speed)
}
