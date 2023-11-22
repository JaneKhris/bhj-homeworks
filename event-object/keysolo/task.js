class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();

  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    this.id = 1;
  }

  registerEvents() {
    this.currentSymbol = document.querySelector('.symbol_current');
    document.addEventListener('keyup',(event) => {
      console.log(event.key);
      if (event.key == 'Shift') { }
      else if (this.currentSymbol.textContent.toLowerCase() == event.key.toLowerCase()) {
        this.success();
      }
      else {
        this.fail();
      }
    })
  }

  timer() {
    const countDown = document.querySelector('.timer');
    countDown.textContent = Array.from(document.querySelectorAll('.symbol')).length;
    this.id = setInterval(() => {
      countDown.textContent = Number(countDown.textContent)-1;
      if (countDown.textContent < 0) {
        clearInterval(this.id);
        this.fail();
      }
    },2000)
  }

  timerReset() {
    clearInterval(this.id);
  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
    this.timerReset();
    this.timer();
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

