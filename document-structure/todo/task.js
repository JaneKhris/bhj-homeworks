const button = document.getElementById('tasks__add');
const input = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');

button.addEventListener('click', (event) => {
    event.preventDefault();
    if (input.value.trim()) {
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="task">
            <div class="task__title">${input.value}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>
        `
        input.value = '';
        console.log(div);
        taskList.appendChild(div);
        let taskRemove = div.querySelector('.task__remove');
        taskRemove.addEventListener('click', (event) => {
            event.preventDefault();
            taskRemove.closest('.task').remove();
        })
    }
    else {
        input.value = '';
    }
})