const progress = document.getElementById('progress');


document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange',() => {
        if (xhr.readyState == 0) {
            progress.value = 0;
        }
        else if (xhr.readyState == 1) {
            progress.value = 0.25;
        }
        else if (xhr.readyState == 2) {
            progress.value = 0.5;
        }
        else if (xhr.readyState == 3) {
            progress.value = 0.75;
        }
        else if (xhr.readyState == 4) {
            progress.value = 1;
        }
    })
    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    const formData = new FormData(document.forms[0]);

    xhr.send(formData);
})

