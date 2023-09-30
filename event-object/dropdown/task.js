const btns = Array.from(document.querySelectorAll('.dropdown__value'))
const links = Array.from(document.querySelectorAll('.dropdown__link'))


btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log(btn)
        const list = btn.closest('.dropdown').querySelector('.dropdown__list')
        console.log(list)
        if (list.className.includes('dropdown__list_active')) {
            list.className = 'dropdown__list'
        }
        else {
            list.className = 'dropdown__list dropdown__list_active'
        }
    })
})


links.forEach((link) => {
    link.addEventListener('click', (ev) => {
        link.closest('.dropdown').querySelector('.dropdown__value').textContent = link.textContent
        link.closest('.dropdown__list').className = 'dropdown__list'
        ev.preventDefault()
    })
})