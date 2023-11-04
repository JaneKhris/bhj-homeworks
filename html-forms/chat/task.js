const widget = document.querySelector('.chat-widget')
const input = document.getElementById('chat-widget__input')
const messages = document.getElementById('chat-widget__messages')


widget.addEventListener('click', () => {
    widget.classList.add('chat-widget_active')
})

input.addEventListener('keydown',(event) =>{
    if (event.code == 'Enter' && input.value) {
        let time = new Date();
        let hh = time.getHours();
        let mm = time.getMinutes();
        if (mm<10) {
            mm = '0'+ mm
        }
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${hh}:${mm}</div>
            <div class="message__text">${input.value}</div>
        </div>
        <div class="message">
            <div class="message__time">${hh}:${mm}</div>
            <div class="message__text">${getAnswer()}</div>
        </div>
        `;
        input.value = ''
    }
    console.log(input.value)
})

function getAnswer() {
    const words = [
        'Здравствуйте!',
        'Досвидания',
        'Все операторы заняты',
        'Время работы до 17.00'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }