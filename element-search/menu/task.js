const array_menu_sub = Array.from(document.querySelectorAll('.menu_sub'))
array_menu_sub.forEach((element) => {
    parent = element.closest('.menu__item')
    link = parent.querySelector('.menu__link')
    link.onclick = () => {
        element.className = 'menu menu_sub menu_active'
        parent_menu = element.closest('.menu_main')
        array_menu = parent_menu.querySelectorAll('.menu_sub')
        array_menu.forEach((el) => {
            if (el != element) {
                el.className = 'menu menu_sub'
            }
        })
        return false
    }
})
