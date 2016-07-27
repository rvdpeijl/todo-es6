import BaseController from "js/controllers/BaseController"

class ToolbarController extends BaseController {
	template() {
		var itemsLeft = 0

		this.list.todos.forEach((todo) => {
			if (!todo.completed) itemsLeft++
		})

		return `
			<div id="toolbar">
				<div class="toolbar__section toolbar__section--left">
					<div class="button button--default complete-all">Complete all</div>
				</div>
				<div class="toolbar__section toolbar__section--right">
					<div class="button button--default clear-completed">Clear completed</div>
				</div>
				<div class="toolbar__section toolbar__section--center items-left--large">
					<span class="items-left">${itemsLeft} todo items left (out of ${this.list.todos.length})</span>
				</div>
				<div class="toolbar__section toolbar__section--center items-left--compact">
					<span class="items-left">${itemsLeft} / ${this.list.todos.length}</span>
				</div>
			</div>
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
			"click .complete-all": this.completeAll,
			"click .clear-completed": this.clearCompleted
		}
	}

	completeAll() {
		this.list.completeAll()
	}

	clearCompleted() {
		this.list.clearCompleted()
	}
}

export default ToolbarController