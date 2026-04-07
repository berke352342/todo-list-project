const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", addTask);

 function addTask() {
     const taskText = input.value.trim();

      if(taskText === "") {
           alert("Please enter a task!");
            return;
        }

      //  create list item
    const li = document.createElement("li");
     li.textContent = taskText;

      // Mark as completed when clicked
       li.addEventListener("click", function () {
           li.classList.toggle("completed");
     });

    // Create delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", function (event) {
          event.stopPropagation();   // prevent li click
          li.remove();
      });

     li.appendChild(deleteBtn);
     todoList.appendChild(li);

       input.value = "";
}