const array_item = Array.from(document.querySelectorAll('.slider__item'))
const count = array_item.length

const dots = Array.from(document.querySelectorAll('.slider__dot'))

let slide_number = 0

const bottomPrev = document.querySelector('.slider__arrow_prev')
const bottomNext = document.querySelector('.slider__arrow_next')

numberUp = () => {
    if (slide_number < (count-1)) {slide_number += 1}
    else {slide_number = 0}
}


numberDown = () => {
    if (slide_number > 0) {slide_number -= 1}
    else {slide_number = (count-1)}
}

//  Основное задание

let interval = 500
let id

right = () => {
    id = setInterval(() => {
        array_item[slide_number].className = 'slider__item'
        numberUp()
        array_item[slide_number].className = 'slider__item slider__item_active'
        },interval)
    }


left = () => {
    id = setInterval(() => {
        array_item[slide_number].className = 'slider__item'
        numberDown()
        array_item[slide_number].className = 'slider__item slider__item_active'
        },interval)
    }


bottomPrev.onclick = () => {
    clearInterval(id)
    left()
}

bottomNext.onclick = () => {
    clearInterval(id)
    right()
}


right()

// // Дополнительное задание

// deactivateImg = (index) => {
//     array_item[index].className = 'slider__item'
//     dots[index].className = 'slider__dot'
// }


// activateImg = (index) => {
//     array_item[index].className = 'slider__item slider__item_active'
//     dots[index].className = 'slider__dot slider__dot_active'
// }

// findActive = () => {
//     let num
//     dots.forEach((dot,index) =>{
//         if (dot.className.includes( 'slider__dot_active' )) {slide_number = index}
//     })
// }


// dots.forEach((dot,index) => {
//     dot.onclick = () => {
//         console.log(index)
//         slide_number = index
//         for (let i = 0; i<count; i++) {
//             if (i == index) { activateImg(i)}
//             else {deactivateImg(i)}
//             }
//         }
//     })


// next = () => {
//     findActive()
//     deactivateImg(slide_number)
//     numberUp()
//     activateImg(slide_number)
// }

// prev = () => {
//     findActive()
//     deactivateImg(slide_number)
//     numberDown()
//     activateImg(slide_number)
// }


// bottomNext.onclick = () => {next()}

// bottomPrev.onclick = () => {prev()}