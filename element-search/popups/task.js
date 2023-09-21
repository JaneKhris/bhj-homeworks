const modal_main = document.getElementById('modal_main')
const modal_success = document.getElementById('modal_success')

modal_main.className = 'modal modal_active'

const close = document.getElementsByClassName('modal__close')

const close_array = Array.from(close)
close_array.forEach((element) => {
    element.onclick = () => {
        modal_main.className = 'modal'
        modal_success.className = 'modal'
    }
})

const success = document.getElementsByClassName('show-success')
const success_array = Array.from(success)
success_array.forEach((element) => {
    element.onclick = () => {
        modal_success.className = 'modal modal_active'
    }
})

