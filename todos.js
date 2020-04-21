// renderizar todos = OK
// adicionar todos = ok
// deletar todos = ok
// salvar no localstorage

var todosList = document.querySelector('ul');
var addButton = document.querySelector('button');

var todos = JSON.parse(localStorage.getItem('todo_list')) || []; // transforma a string em array

function renderTodo() {
  todosList.innerHTML = ""; // limpa os itens que foram rendereziando anteriormente

  for(todo of todos) {
    var todoItem = document.createElement('li');
    var deleteItem = document.createElement('a');
    var todoText = document.createTextNode(todo);
    var deleteText = document.createTextNode("Excluir");

    todoItem.appendChild(todoText);
    todosList.appendChild(todoItem);

    deleteItem.setAttribute("href", "#");
    deleteItem.appendChild(deleteText);
    todoItem.appendChild(deleteItem)

    position = todos.indexOf(todo);
    deleteItem.setAttribute('onclick', 'deleteTodo(' + position + ')'); // para cada "excluir" atribui uma posição para a função deleteTodo
  };
};

function addTodo() {
  var newTodo = document.querySelector('input').value;
  todos.push(newTodo);
  renderTodo();
  document.querySelector('input').value = "";

  saveToStorage();
};

renderTodo();
addButton.onclick = addTodo;

function deleteTodo(position) {
  todos.splice(position, 1);
  renderTodo();

  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('todo_list', JSON.stringify(todos)); // salva a lista "todo" como uma string do JSON
}