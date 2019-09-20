var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector('ul');
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var editBtn = document.querySelector(".edit");

//function to delete todo if delete span is clicked
function deleteTodo(event) {
    for(let span of spans){
        span.addEventListener("click", function(){
            span.parentElement.remove();
            event.stopPropagation();
        });
    }
}

//function to load if list is found in local storage.
function loadTodo(){
    if(localStorage.getItem('todoList')){
        ul.innerHTML = localStorage.getItem('todoList');
        deleteTodo();
    }
}

//event listener for input to add new todo to the list
input.addEventListener("keypress", function(keyPressed){
    if(keyPressed.which === 13) {
        
        var li = document.createElement("li");
        var spanElement = document.createElement("span");
        var icon = document.createElement("i");

        var newTodo = this.value;
        this.value = " ";

        icon.classList.add('fa', 'fa-trash');
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement, newTodo);
        
        deleteTodo();
    }

});

// event listener for edit to adit li post
editBtn.addEventListener('click', function(){
   var listItem = document.querySelectorAll(li).value;
   
});

// event listener to linethrough list if clicked
ul.addEventListener('click', function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
    }
 },false
);

//save todolist state so user can access it later
saveBtn.addEventListener("click", function(){
    localStorage.setItem('todoList', ul.innerHTML );

});

//clear all todo when clear button is clicked
clearBtn.addEventListener('click', function(){
    ul.innerHTML= "";
    localStorage.removeItem('todoList', ul.innerHTML );
});

//delete todo
deleteTodo();

//load todo
loadTodo();




