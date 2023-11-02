const control_array = Array.from(document.querySelectorAll('.font-size'))

control_array.forEach((element) => {
    element.addEventListener('click', (e) => {
        let size = element.dataset.size;
        e.preventDefault();
        element.closest('.book__control').querySelector('.font-size_active').classList.remove('font-size_active')
        element.classList.add('font-size_active')
        element.closest('.book').className = 'book'
        if (size) {
            element.closest('.book').classList.add(`book_fs-${size}`)
        }
    })
});
