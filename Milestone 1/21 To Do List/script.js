function addTodo() {
    var todoInput = document.getElementById("todo-input");
    var todoList = document.getElementById("todo-list");
  
    var todoText = todoInput.value.trim();
    if (todoText !== "") {
      var newTodo = document.createElement("li");
      newTodo.textContent = todoText;
      todoList.appendChild(newTodo);
      todoInput.value = "";
    }
  }
  