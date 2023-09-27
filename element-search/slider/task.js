const addition = false

const arrayItem = Array.from(document.querySelectorAll('.slider__item'))
const count = arrayItem.length

const dots = Array.from(document.querySelectorAll('.slider__dot'))

const bottomPrev = document.querySelector('.slider__arrow_prev')
const bottomNext = document.querySelector('.slider__arrow_next')

let findActive = () => {
	let ind
	arrayItem.forEach((dot, index) => {
		if (dot.className.includes('slider__item_active')) {
			ind = index
		}
	})
	return ind
}

let deactivateImg = (index) => {
	arrayItem[index].className = 'slider__item'
	dots[index].className = 'slider__dot'
}


let activateImg = (index) => {
	arrayItem[index].className = 'slider__item slider__item_active'
	dots[index].className = 'slider__dot slider__dot_active'
}


let numberUp = (index) => {
	if (index < (count - 1)) {
		index += 1
	} else {
		index = 0
	}
	return index
}


let numberDown = (index) => {
	if (index > 0) {
		index -= 1
	} else {
		index = (count - 1)
	}
	return index
}

let mainTask = () => { //  Основное задание
	let interval = 500
	let id

	let right = () => {
		let indexActive = findActive()
		id = setInterval(() => {
			deactivateImg(indexActive)
			indexActive = numberUp(indexActive)
			activateImg(indexActive)
		}, interval)
	}


	let left = () => {
		let indexActive = findActive()
		id = setInterval(() => {
			deactivateImg(indexActive)
			indexActive = numberDown(indexActive)
			activateImg(indexActive)
		}, interval)
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
}


let addTask = () => { // Дополнительное задание
	dots.forEach((dot, index) => {
		dot.onclick = () => {
			for (let i = 0; i < count; i++) {
				if (i == index) {
					activateImg(i)
				} else {
					deactivateImg(i)
				}
			}
		}
	})


	let next = () => {
		let indexActive = findActive()
		deactivateImg(indexActive)
		indexActive = numberUp(indexActive)
		activateImg(indexActive)
	}

	let prev = () => {
		let indexActive = findActive()
		deactivateImg(indexActive)
		indexActive = numberDown(indexActive)
		activateImg(indexActive)
	}


	bottomNext.onclick = () => {
		next()
	}

	bottomPrev.onclick = () => {
		prev()
	}
}

if (addition) {
    addTask()
}
else {
    mainTask()
}