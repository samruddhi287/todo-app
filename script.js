let tasks =
JSON.parse(
localStorage.getItem("tasks")
) || [];

const taskList =
document.getElementById("taskList");

const counter =
document.getElementById("counter");

function saveTasks(){

    localStorage.setItem(
    "tasks",
    JSON.stringify(tasks));
}

function renderTasks(){

    taskList.innerHTML="";

    tasks.forEach((task,index)=>{

        taskList.innerHTML += `

        <li>

        <span class="taskText
        ${task.completed ? 'completed' : ''}">

        ${task.text}

        </span>

        <div class="actions">

        <button
        class="completeBtn"
        onclick="completeTask(${index})">

        ✔

        </button>

        <button
        class="editBtn"
        onclick="editTask(${index})">

        ✏

        </button>

        <button
        class="deleteBtn"
        onclick="deleteTask(${index})">

        🗑

        </button>

        </div>

        </li>
        `;
    });

    counter.innerText =
    `Total Tasks: ${tasks.length}`;
}

function addTask(){

    const input =
    document.getElementById("taskInput");

    if(input.value.trim()==="") return;

    tasks.push({

        text:input.value,
        completed:false
    });

    saveTasks();

    input.value="";

    renderTasks();
}

function completeTask(index){

    tasks[index].completed =
    !tasks[index].completed;

    saveTasks();

    renderTasks();
}

function editTask(index){

    const updated =
    prompt(
    "Edit Task",
    tasks[index].text);

    if(updated){

        tasks[index].text =
        updated;

        saveTasks();

        renderTasks();
    }
}

function deleteTask(index){

    tasks.splice(index,1);

    saveTasks();

    renderTasks();
}

document
.getElementById("taskInput")
.addEventListener(
"keypress",

function(e){

if(e.key==="Enter"){

addTask();

}

});

renderTasks();