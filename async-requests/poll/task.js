const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers')

let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let response = JSON.parse(xhr.response);
        pollTitle.textContent = response.data.title;
        let answers = Object.values(response.data.answers);
        answers.forEach(answer => {
            newButton = document.createElement('button');
            newButton.className = 'poll__answer'
            newButton.textContent = answer;
            pollAnswers.appendChild(newButton);
            newButton.addEventListener('click',(ev) => {
                alert('Спасибо за вош голос!')
            })
        });
    }
})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send()
