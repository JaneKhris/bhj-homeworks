const array = Array.from(document.querySelector('.rotator').children);
let i = 0;


setInterval(() => {
    let el= array[i];
    el.classList.remove('rotator__case_active');
    if (i<array.length-1) {
        let next = el.nextElementSibling;
        elemActivate(next)
        i += 1;
    }
    else {
        let first = array[0];
        elemActivate(first)
        i = 0;
    }
},1000)

function getColor(elem) {
    return `color:${elem.dataset.color}`;
}

 function elemActivate(elem) {
    elem.classList.add('rotator__case_active');
    elem.setAttribute("style", getColor(elem));
 }

