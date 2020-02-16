function addTask() {
    let newTask = document.getElementById('task').value;

    // add to list containing all tasks whether completed or not
    addToTaskList(newTask);

    // create the elements necessary and display to the web app
    createItem(newTask);
    
    // clear the input field
    document.getElementById('task').value = '';
}

// array to hold all tasks
let taskList = [];
// array to hold completed tasks
let tasksCompleted = [];
// array to hold remaining tasks
let tasksRemaining = [];

function addToTaskList(newTask) {
    taskList.push(newTask);
    
    console.log('All tasks: ' + taskList);
}

function markCompletedOrRemaining() {
    this.classList.toggle('completed');
    //console.table(taskList);

    if(this.className == 'remaining') {
        tasksRemaining.push(this.textContent);

        let taskToRemove = this.textContent;
        let index = tasksCompleted.indexOf(taskToRemove);
        tasksCompleted.splice(index, 1);

        console.log('Tasks remaining ' + tasksRemaining);
    } else {
        tasksCompleted.push(this.textContent);

        let taskToRemove = this.textContent;
        let index = tasksRemaining.indexOf(taskToRemove);
        tasksRemaining.splice(index, 1);

        console.log('Tasks commpleted ' + tasksCompleted);
    }
}

function removeTask() {
    // remove from task list array
    let taskToRemove = this.parentNode.childNodes[0].textContent;
    let index = taskList.indexOf(taskToRemove);
    taskList.splice(index, 1);
    //console.table(taskList);

    // remove from tasks div
    this.parentNode.remove();
}

function displayCompleted() {
    let taskDiv = document.getElementById('tasks');

    // get list of all divs
    let list = taskDiv.getElementsByTagName('div');
    //console.log(list[0].children[0].className);

    // if first child of div has a class of 'completed' then display it through innerHTML of taskDiv
    for(let i = 0; i < list.length; i++) {
        if(list[i].children[0].className != 'remaining completed') {
            list[i].style.display='none';
        }
    }
}

function displayRemaining() {
    let taskDiv = document.getElementById('tasks');

    // get list of all divs
    let list = taskDiv.getElementsByTagName('div');
    //console.log(list[0].children[0].className);

    // if first child of div has a class of 'completed' then display it through innerHTML of taskDiv
    for(let i = 0; i < list.length; i++) {
        if(list[i].children[0].className != 'remaining') {
            list[i].style.display='none';
        }
    }
}

function displayAll() {
    let taskDiv = document.getElementById('tasks');
   
    // create elements to display
    for(let i = 0; i < taskList.length; i++) {
        if(!(taskList.includes(tasksCompleted[i]))) {
            createItem(taskList[i]);
        }
    }  

    // if the item is in the completed list, skip re-adding it.
}

function createItem(newTask) {

    // create div to hold task and remove button
    let taskDiv = document.createElement('div');

    // create p element
    let item = document.createElement('p');

    // create button element
    let removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remove';
    removeButton.addEventListener('click', removeTask);

    // assign task value to p element
    item.innerHTML = newTask;

    // add class to make pretty
    item.classList.add('remaining');

    // if the element is touched -> mark it as completed
    item.addEventListener('click', markCompletedOrRemaining);

    // add the elements to the taskDiv
    taskDiv.appendChild(item);
    taskDiv.appendChild(removeButton);
    
    // add taskDiv to parent div that is holding all task divs
    document.getElementById('tasks').appendChild(taskDiv);
}

