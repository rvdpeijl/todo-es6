import BaseController from "js/controllers/BaseController"

import NewTodoController from "js/controllers/NewTodoController"
import ToolbarController from "js/controllers/ToolbarController"
import TodoListController from "js/controllers/TodoListController"

import TodoCollection from "js/collections/TodoCollection"

class MainController extends BaseController {
	template() {
		return `
			<div id="sections__container">
				<section id="logo"><img src="/img/digitas-lbi-logo.png"></section>
				<section id="new-todo__container"></section>
				<section id="toolbar__container"></section>
				<section id="todo-list__container"></section>
				<div class="push"></div>
			</div>
			<footer>
				<img class="footer__logo" src="/img/digitas-lbi-logotype.jpg">
			</footer>
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