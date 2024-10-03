let task = document.getElementById('task');
const list = document.getElementById('list');
let tasklen = document.getElementsByTagName('li');

function go() {
    if (tasklen.length > 11) {
        alert("please complete present tasks");
        return;
    }

    if (task.value === '') {
        alert("Enter something!!!");
    }
    else {
        let ni = document.createElement('li');
        let di = document.createElement('div');

        let checkb = document.createElement('input');
        checkb.type = 'checkbox';
        checkb.id = task.value;
        checkb.addEventListener('change', TaskCount);

        let labe = document.createElement('label');
        labe.htmlFor = task.value;
        labe.innerText = task.value;

        di.appendChild(checkb);
        di.appendChild(labe);
        ni.appendChild(di);
        list.appendChild(ni);
        let rem = document.createElement("button");
        rem.className = "but";

        rem.innerHTML = "x";
        ni.appendChild(rem);
        task.value = '';
        TaskCount();
    }
}

list.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove();
        TaskCount();
    }
})


function TaskCount() {
    const tasks = document.querySelectorAll("#list li");
    const completedTasks = document.querySelectorAll("#list input[type='checkbox']:checked");

    document.getElementById("completed").innerHTML = completedTasks.length;
    document.getElementById("incomplete").innerHTML = tasks.length - completedTasks.length;
}
