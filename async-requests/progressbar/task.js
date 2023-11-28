const progress = document.getElementById('progress');


document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded/event.total;
      };
    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    const formData = new FormData(document.forms[0]);

    xhr.send(formData);
})

