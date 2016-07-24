import BaseController from "js/controllers/BaseController"

class TodoController extends BaseController {
	template() {
		return `
			<ul class="todo-list">
				${
					this.list.todos.map(function(todo) {
						return `
							<li class="todo-list__item ${todo.completed ? 'todo-list__item--completed' : ''}">
								<div class="todo-list__checkbox" data-id=${todo._id}></div>
								<span class="todo-list__text">${todo.todo}</span>
							</li>
						`
					}).join("\n")
				}
			</ul>
		`
	}

	initialize(options) {
		this.list = options.collection

		this.list.subscribe(() => {
			this.render()
		})
	}

	events() {
		return {
			// "click .todo": this.removeTodo,
			"click .todo-list__checkbox": this.toggleComplete
		}
	}

	toggleComplete(e) {
		this.list.complete(e.target.dataset.id)
	}

	removeTodo(e) {
		this.list.remove(e.target.dataset.id)
	}
}

export default TodoController