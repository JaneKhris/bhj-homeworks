const img = document.getElementById('cookie')
const clickerCounter = document.getElementById('clicker__counter')
const clickerSpeed = document.getElementById('clicker__speed')
let count = Number(clickerCounter.textContent)
let time_prev = new Date()
let speed_prev = 0
img.onclick = () => { 
    count++
    time_click = new Date()
    speed_click = (1000/(time_click-time_prev)+speed_prev*(count-1))/count
    clickerCounter.textContent = count
    clickerSpeed.textContent = speed_click
    time_prev = time_click
    speed_prev = speed_click
    if (count % 2) {
        img.width += 50
        img.height += 50
    } else {    
        img.width -= 50
        img.height -= 50
    }
}
