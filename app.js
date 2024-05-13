function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Ne ise qeyd edin");
      return;
    }
  
    let taskList = document.getElementById("taskList");
  
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
  
    let taskTextSpan = document.createElement("div");
    taskTextSpan.textContent = taskText;
    taskTextSpan.classList.add("tasks");
  
    let deleteButton = document.createElement("span");
    deleteButton.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function() {
      taskDiv.remove();
    };
  
    taskDiv.appendChild(taskTextSpan);
    taskDiv.appendChild(deleteButton);
  
    taskList.appendChild(taskDiv);
  
    taskInput.value = "";
  }
  let ascending = true;

  function sortTasks() {
      let taskList = document.getElementById("taskList");
      let tasks = taskList.getElementsByClassName("task");
      
      let tasksArray = Array.from(tasks);
      
      tasksArray.sort((a, b) => {
          let textA = a.textContent.toLowerCase().trim();
          let textB = b.textContent.toLowerCase().trim();
          
          if (ascending) {
              return textA.localeCompare(textB);
          } else {
              return textB.localeCompare(textA);
          }
      });
      
      for (let task of tasksArray) {
          taskList.appendChild(task);
      }
      
      ascending = !ascending;
  }
  

