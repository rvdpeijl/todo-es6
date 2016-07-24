import BaseController from "js/controllers/BaseController"

class NewTodoController extends BaseController {
	template() {
		return `
			<div class="new-todo">
				<div class="new-todo__form">
					<form action="javascript:void(0);">
						<input id="new-todo__input" type="text" placeholder="add a new todo..."/>
						<button type="submit" class="new-todo__button">add</button>
					</form>
				</div>
			</div>
		`
	}

	events() {
		return {
			"click .new-todo__button": this.addTodo
		}
	}

	initialize(options) {
		this.list = options.collection

		this.list.subscribe(() => {
			this.render()
		})
	}

	afterRender() {
		this.todoField = document.getElementById("new-todo__input")
	}

	addTodo() {
		this.list.add(this.todoField.value)
		this.todoField.focus()
	}
}

export default NewTodoController