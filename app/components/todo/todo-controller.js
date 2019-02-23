import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	let template = ''
	let todos = _todoService.Todos
	todos.forEach(t => {
		let button = `<button class="btn btn-primary" onclick="app.controllers.todoController.removeTodo('${t.id}')">DONE</button>`
		template += t.getCard(button)
	})
	document.querySelector('#todos').innerHTML = template
	//WHAT IS MY PURPSE?
	//do this
}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		// Don't forget to add your subscriber!!!!!!!!!!!!!!

		_todoService.getTodos()
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			// DONT FORGET TO BUILD YOUR TODO OBJECT
			description: form.description.value
		}
		_todoService.addTodo(todo)
		form.reset()
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}



}
