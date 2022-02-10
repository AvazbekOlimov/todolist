const todoInput =  document.querySelector('.todo-input')
const todoButton =  document.querySelector('.todo-button')
const todoList =  document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')
const all = document.querySelector('.all')

todoButton.addEventListener('click', addTodo) 
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)

function addTodo(e) {
    e.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item') ;
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complate-btn')
    todoDiv.appendChild(completedButton)

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)

    todoInput.value = ""
}

function deleteCheck(e) {
    const item = e.target

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement
        todo.classList.add('fall') 
        todo.addEventListener('transitionend', function(){
            todo.remove()
        })       
    }


    if (item.classList[0] === "complate-btn") {
        const todo = item.parentElement
        todo.classList.toggle('complated')
    }
} 

function filterTodo(e) {
    const todos = todoList.childNodes
    todos.forEach(function(todo){
        switch(e.target.value){
            case "complated":
                if(todo.classList.contains('complated')){
                    todo.style.display =  'flex'   
                }else{
                    todo.style.display = "none"
                }  
                break;
            case "all":
                  todo.style.display = "flex"
        }           
        
    })
}