const arrayItem = Array.from(document.querySelectorAll('.slider__item'))
const count = arrayItem.length

const dots = Array.from(document.querySelectorAll('.slider__dot'))

const bottomPrev = document.querySelector('.slider__arrow_prev')
const bottomNext = document.querySelector('.slider__arrow_next')

findActive = () => {
	let ind
	arrayItem.forEach((dot, index) => {
		if (dot.className.includes('slider__item_active')) {
			ind = index
		}
	})
	return ind
}

deactivateImg = (index) => {
	arrayItem[index].className = 'slider__item'
	dots[index].className = 'slider__dot'
}


activateImg = (index) => {
	arrayItem[index].className = 'slider__item slider__item_active'
	dots[index].className = 'slider__dot slider__dot_active'
}


numberUp = (index) => {
	if (index < (count - 1)) {
		index += 1
	} else {
		index = 0
	}
	return index
}


numberDown = (index) => {
	if (index > 0) {
		index -= 1
	} else {
		index = (count - 1)
	}
	return index
}

mainTask = () => { //  Основное задание
	let interval = 500
	let id

	right = () => {
		let indexActive = findActive()
		id = setInterval(() => {
			deactivateImg(indexActive)
			indexActive = numberUp(indexActive)
			activateImg(indexActive)
		}, interval)
	}


	left = () => {
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


addTask = () => { // Дополнительное задание
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


	next = () => {
		let indexActive = findActive()
		deactivateImg(indexActive)
		indexActive = numberUp(indexActive)
		activateImg(indexActive)
	}

	prev = () => {
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