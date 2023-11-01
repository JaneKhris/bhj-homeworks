const reveal = Array.from(document.querySelectorAll('.reveal'))

function inVisible(el) {
    const { top,bottom } = el.getBoundingClientRect()
    console.log(top,bottom)

    if (bottom <0) {
        return false
    }

    if (top<window.innerHeight) {
        return true
    }
}


reveal.forEach((element) => {
        document.addEventListener('scroll',()=> {
            // console.log(inVisible(element))
            if (inVisible(element)) {
                element.classList.add('reveal_active')
            }
            else {
                element.classList.remove('reveal_active')
            }
        },1000);  
    });