const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let response = JSON.parse(xhr.response);
        pollTitle.textContent = response.data.title;
        let answers = Object.values(response.data.answers);
        let indexTitle = response.id;
        answers.forEach(answer => {
            newButton = document.createElement('button');
            newButton.className = 'poll__answer'
            newButton.textContent = answer;
            pollAnswers.appendChild(newButton);
            newButton.addEventListener('click',(ev) => {
                let indexAnswer = answers.indexOf(answer);
                alert('Спасибо за вош голос!')
                const xhrAnswer = new XMLHttpRequest();
                xhrAnswer.addEventListener('readystatechange', () => {
                    if (xhrAnswer.readyState === xhrAnswer.DONE) {
                        pollAnswers.innerHTML = '';
                        let statAnswer = Object.values(JSON.parse(xhrAnswer.response).stat);
                        let totalVotes = 0;
                        statAnswer.forEach((ans) => {
                            totalVotes += Number(ans.votes);
                        })
                        statAnswer.forEach((ans) => {
                            pollAnswers.innerHTML += `
                            <div>
                            ${ans.answer}:${(ans.votes*100/totalVotes).toFixed(2)}%
                            `
                        })
                    }
                })
                xhrAnswer.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
                xhrAnswer.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                xhrAnswer.send( `vote=${indexTitle}&answer=${indexAnswer}` );
            })
        });
    }
})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
