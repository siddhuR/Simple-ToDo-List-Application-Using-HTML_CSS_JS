const lists = document.querySelector("#todo-list");

function addTodo() {
  const task = document.querySelector(".todo-field").value;
  document.querySelector(".todo-field").value = "";
  if (task.length === 0) {
    alert("task shouldn't be empty!");
    return;
  }
  //operation

  const todoItem = document.createElement("li");
  //add this li in <ul></ul>
  lists.append(todoItem);

  //create p tag
  const todoText = document.createElement("p");
  //add class 'todo-text
  todoText.classList.add("todo-text");
  //add task which we have taken from input field
  todoText.innerText = task;
  //append this p in li
  todoItem.append(todoText);

  //doneBtn
  //create button
  const doneBtn = document.createElement("button");
  doneBtn.classList.add("todo-btn");
  doneBtn.innerText = "Done";
  todoItem.append(doneBtn);

  doneBtn.addEventListener("click", () => {
    todoText.style.textDecoration = "line-through";
  });

  //deleteBtn

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("todo-btn");
  deleteBtn.innerText = "Delete";
  todoItem.append(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    todoItem.remove();
  });
}
