const list = JSON.parse(localStorage.getItem('list'));
//     [
//     {
//         id: 'id1',
//         title: 'Learn JS',
//         done: true
//     },
//     {
//         id: 'id2',
//         title: 'Learn React',
//         done: false
//     },
//     {
//         id: 'id3',
//         title: 'Get a JOB!!!',
//         done: false
//     }
// ]


const listElement = document.getElementById('list');
const todoInput = document.getElementById('todoInput');
render();

function render(){
    listElement.innerHTML = null;
list.forEach(el => {
    const listItem = document.createElement('li');
    listItem.setAttribute('class', el.done ? 'done' : 'progress');
    const listItemText = document.createTextNode(el.title);
    listItem.appendChild(listItemText);

    const buttonItem = document.createElement('button');
    buttonItem.setAttribute('id', el.id);
    const buttonItemText = document.createTextNode('Done');
    buttonItem.appendChild(buttonItemText);

    const deleteButtonItem = document.createElement('button');
    deleteButtonItem.setAttribute('class', el.id);
    const deleteButtonItemText = document.createTextNode('Delete');
    deleteButtonItem.appendChild(deleteButtonItemText);


    listItem.appendChild(buttonItem);
    listItem.appendChild(deleteButtonItem);

    listElement.appendChild(listItem);
})
}


function addToList(){
    list.push({
        id: Math.random().toString(),
        title: todoInput.value,
        done: false
    })
    updateLocalStorage();
    render();
    todoInput.value = '';
}



listElement.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
        if (event.target.innerText === 'Done') {
            const item = list.find(el => el.id === event.target.id);
            item.done = !item.done;
        }
        if (event.target.innerText === 'Delete') {
            const item = list.find(el => el.id === event.target.className);
            list.splice(list.indexOf(item), 1);
        }
    }
    updateLocalStorage();
    render();
})



function updateLocalStorage(){
    localStorage.setItem('list', JSON.stringify(list));
}


