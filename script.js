const list = [
    {
        id: 'id1',
        title: 'Learn JS',
        done: true
    },
    {
        id: 'id2',
        title: 'Learn React',
        done: false
    },
    {
        id: 'id3',
        title: 'Get a JOB!!!',
        done: false
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


