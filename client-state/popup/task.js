const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');



if (!getCookie('modal')) {
    modal.className = ' modal modal_active';
}

modalClose.addEventListener('click', (e) => {
    modal.classList.remove('modal_active');
    document.cookie = 'modal=close';
})

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }