// funcção que adiciona tarefa
function addTask() {
    // titulo
    const taskTitle = document.querySelector('#task-title').value;

    if (taskTitle) {
        // clonar template
        const template = document.querySelector('.template');

        const newTask = template.cloneNode(true);

        // adiciona titulo
        newTask.querySelector('.task-title').textContent = taskTitle;

        // remover classes desnecessarias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adiciona na minha lista
        const list = document.querySelector('#task-list')
        list.appendChild(newTask);

        // adicionar o evento de remover
        const removerBtn = newTask.querySelector('.remove-btn').addEventListener('click', function () {
            removeTask(this);
        });

        // adicionar  evento completar tarefa 
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function () {
            concluirTask(this);
        })

        // limpar texto
        document.querySelector('#task-title').value = "";
    }
}


// função de remover a tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}


// função de completar a tarefa
function concluirTask(task) {
    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done");
}


// evento de adicionar a tarefa
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', function (e) {

    e.preventDefault();

    addTask();
});
