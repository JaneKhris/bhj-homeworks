const modalMain = document.getElementById('modal_main')
const modalSccess = document.getElementById('modal_success')

modalMain.className = 'modal modal_active'


const closeArray = Array.from(document.getElementsByClassName('modal__close'))
closeArray.forEach((element) => {
    element.onclick = () => {
        modalMain.className = 'modal'
        modalSccess.className = 'modal'
    }
})

const success = document.getElementsByClassName('show-success')
const success_array = Array.from(success)
success_array.forEach((element) => {
    element.onclick = () => {
        modalMain.className = 'modal'
        modalSccess.className = 'modal modal_active'
    }
})

