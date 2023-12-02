const welcome = document.getElementById('welcome');
const signIn = document.getElementById('signin');
const form = document.getElementById('signin__form');

welcome.innerHTML += `
<div>
<button class="btn" id="signout__btn">Выйти</button>
</div>
`
const btnSignout = welcome.querySelector('.btn');

btnSignout.addEventListener('click',(e) => {
    e.preventDefault();
    localStorage.removeItem('user_id');
    signinActive();
    form.reset();
})

if (localStorage.getItem('user_id')) {
    welcomeActive(localStorage.getItem('user_id'))
}

document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
        let response = xhr.response;
        if (!response.success) {
            alert('Неверный логин/пароль');
            form.reset()
        } else {
            let id = response.user_id;
            localStorage.setItem('user_id',id);
            welcomeActive(id);
        }
    });
    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

    const formData = new FormData(document.forms[0]);
    xhr.responseType = 'json';
    xhr.send(formData);
})

function welcomeActive(user_id) {
    welcome.classList.add('welcome_active');
    signIn.classList.remove('signin_active');
    const userId = document.getElementById('user_id');
    userId.innerHTML = user_id;
}

function signinActive() {
    welcome.classList.remove('welcome_active');
    signIn.classList.add('signin_active');
}