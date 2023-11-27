const loader = document.querySelector('.loader');
const items = document.getElementById('items')

let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        valuteArray = Object.values(JSON.parse(xhr.response)['response'].Valute);
        valuteArray.forEach(val => {
            let newValItem = document.createElement('div');
            newValItem.className = 'item';
            newValItem.innerHTML = 
            `
            <div class="item__code">
            ${val['CharCode']}
            </div>
            <div class="item__value">
            ${val['Value']}
            </div>
            <div class="item__currency">
            руб.
            </div>
            `
            items.appendChild(newValItem);
            
        });
        loader.classList.remove('loader_active');

    }
})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send()
