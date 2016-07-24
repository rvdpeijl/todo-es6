import BaseController from "js/controllers/BaseController"

import NewTodoController from "js/controllers/NewTodoController"
import ToolbarController from "js/controllers/ToolbarController"
import TodoListController from "js/controllers/TodoListController"

import TodoCollection from "js/collections/TodoCollection"

class MainController extends BaseController {
	template() {
		return `
			<div>
				<div id="logo"><img src="/img/digitas-lbi-logo.png"></div>
				<div id="new-todo__container"></div>
				<div id="toolbar__container"></div>
				<div id="todo-list__container"></div>
			</div>
		`
	}

	afterRender() {
		var todoCollection = new TodoCollection

		new NewTodoController({
			collection: todoCollection,
			element: document.getElementById("new-todo__container")
		})

		new ToolbarController({
			collection: todoCollection,
			element: document.getElementById("toolbar__container")
		})

		new TodoListController({
			collection: todoCollection,
			element: document.getElementById("todo-list__container")
		})
	}
}

export default MainController