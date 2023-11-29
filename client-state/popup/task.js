const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');


if (document.cookie) {
    modal.className = 'modal';
} else {
    modal.className = ' modal modal_active';
    document.cookie = "modal=close";
}

modalClose.addEventListener('click', (e) => {
    modal.classList.remove('modal_active');
    // document.cookie = 'modal=close';
    // console.log(document.cookie)
})