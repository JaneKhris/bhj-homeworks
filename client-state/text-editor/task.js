const storedText = localStorage.getItem('text');
const editor = document.getElementById('editor');

editor.value = storedText;

window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    localStorage.setItem('text', editor.value );
})

const button = document.createElement('button');
button.className = 'button_clear';
button.innerHTML = 'Очистить поле';
document.querySelector('main').appendChild(button);
button.addEventListener('click', (e) => {
    e.preventDefault();
    editor.value = '';
})