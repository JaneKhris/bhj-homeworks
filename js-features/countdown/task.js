count = document.getElementById('timer')
let timerInSec = Number(count.textContent)
id = setInterval(() => {
    timerInSec-=1
    count.textContent = timeStr(timerInSec)
    if (timerInSec < 0) {
        clearInterval(id)
        console.log(location)
        alert('Вы победили в конкурсе')
    }
},1000)

function timeStr(sec) {
    let hh, mm, ss, hh_, mm_, ss_ 
    function dd(dd_) {
        if (dd_<10) return '0'+ dd_
        else return dd_
    }
    ss_ = sec%60
    ss = dd(ss_)
    mm_ = (sec%3600-ss_)/60
    mm = dd(mm_)
    hh_ = (sec-sec%3600)/3600
    hh = dd(hh_)
    return hh+':'+mm+':'+ss
}

