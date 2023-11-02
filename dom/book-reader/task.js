const controlArray = Array.from(document.querySelectorAll('.font-size'));
const colorArray = Array.from(document.querySelectorAll('.color'));


controlArray.forEach((element) => {
    element.addEventListener('click', (e) => {
        let size = element.dataset.size;
        e.preventDefault();
        element.closest('.book__control').querySelector('.font-size_active').classList.remove('font-size_active');
        element.classList.add('font-size_active');
        element.closest('.book').classList.remove('book_fs-big');
        element.closest('.book').classList.remove('book_fs-small');
        if (size) {
            element.closest('.book').classList.add(`book_fs-${size}`);
        }
    })
});

colorArray.forEach((element) => {
    element.addEventListener('click', (e) => {
        let colorText = element.dataset.textColor;
        let colorBg = element.dataset.bgColor;
        e.preventDefault();
        element.closest('.book__controls').querySelector('.color_active').classList.remove('color_active');
        element.classList.add('color_active');
        let book = element.closest('.book');
        if (colorText) {
            book.classList.remove('book_color-gray');
            book.classList.remove('book_color-whitesmoke');
            book.classList.remove('book_color-black');
            book.classList.add(`book_color-${colorText}`);
        }
        if (colorBg) {
            book.classList.remove('book_bg-gray');
            book.classList.remove('book_bg-white');
            book.classList.remove('book_bg-black');
            book.classList.add(`book_bg-${colorBg}`);
        }
    })
});

