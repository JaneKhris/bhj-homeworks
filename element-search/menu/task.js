const arrayMenuSub = Array.from(document.querySelectorAll('.menu_sub'))
arrayMenuSub.forEach((element) => {
    parent = element.closest('.menu__item')
    link = parent.querySelector('.menu__link')
    link.onclick = () => {
        if (element.className.includes('menu_active')) {
            element.className = 'menu menu_sub'
        }
        else {
            element.className = 'menu menu_sub menu_active'
            parentMenu = element.closest('.menu_main')
            arrayMenu = parentMenu.querySelectorAll('.menu_sub')
            arrayMenu.forEach((el) => {
                if (el != element) {
                    el.className = 'menu menu_sub'
                }
            }) 
        }   
        return false
    }
})
