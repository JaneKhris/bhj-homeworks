const array = Array.from(document.querySelector('.rotator').children)
let i = 0
setInterval(() => {
    let el= array[i];
    el.classList.remove('rotator__case_active');
    if (i<array.length-1) {
        el.nextElementSibling.classList.add('rotator__case_active');
        el.nextElementSibling.setAttribute("style", getColorString());
        i += 1;
    }
    else {
        array[0].classList.add('rotator__case_active');
        array[0].setAttribute("style", getColorString());
        i = 0
    }
},1000)

function getColorString() {
    const words = [
        'Red',
        'Blue',
        'Green',
        'Orange',
      ],
      index = Math.floor(Math.random() * words.length);
    return `color:${words[index]}`;
}
