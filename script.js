const list = [
    {
        id: 1,
        title: 'Learn JS',
    },
    {
        id: 2,
        title: 'Learn React',
    },
    {
        id: 3,
        title: 'Get a JOB!!!',
    }
]

const listElement = document.getElementById('list');
const todoInput = document.getElementById('todoInput');
render();

function render(){
    listElement.innerHTML = null;
list.forEach(el => {
    const listItem = document.createElement('li');
    const listItemText = document.createTextNode(el.title);
    listItem.appendChild(listItemText);

    const buttonItem = document.createElement('button');
    const buttonItemText = document.createTextNode('Done');
    buttonItem.appendChild(buttonItemText);


    listItem.appendChild(buttonItem);

    listElement.appendChild(listItem);
})
}


function addToList(){
    list.push({
        id: Math.random(),
        title: todoInput.value,
    })

    render();
    todoInput.value = '';
}


