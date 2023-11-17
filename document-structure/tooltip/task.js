const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'))

console.log(hasTooltip)
hasTooltip.forEach((element) => {
    let div = document.createElement('div');
    div.className = 'tooltip';
    div.textContent = element.getAttribute('title');
    element.appendChild(div);
})

const tooltips = Array.from(document.querySelectorAll('.tooltip'));

function hideTooltips() {
    tooltips.forEach((el) => {
        el.className = 'tooltip';
    })
}

hasTooltip.forEach((element) => {
    element.addEventListener('click',(event) => {
        event.preventDefault();
        hideTooltips();
        let tooltip = element.querySelector('.tooltip');
        let { left, right, top, bottom } = element.getBoundingClientRect();
        let position = getPosition();
        tooltip.setAttribute("data-position", position);
        if (position == 'left') {
            tooltip.setAttribute("style",`right:${window.innerWidth - left}px; top:${top}px`);
        }
        else if (position == 'right') {
            tooltip.setAttribute("style",`left:${right}px; top:${top}px`);
        }
        else if (position == 'top') {
            tooltip.setAttribute("style",`left:${left}px; bottom:${window.innerHeight - top}px`);
        }
        else if (position == 'bottom') {
            tooltip.setAttribute("style",`left:${left}px; top:${bottom}px`);
        }
        tooltip.classList.add('tooltip_active');
        console.log(tooltip)
    })
})

window.addEventListener('scroll', () => {
    hideTooltips();
})

function getPosition() {
    const positions = [
        'top',
        'left',
        'right',
        'bottom'
      ],
      index = Math.floor(Math.random() * positions.length);

    return positions[index];
  }
