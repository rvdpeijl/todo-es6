class TodoCollection {

	constructor(todos = []) {
		this.todos = todos

		this.updatedTodos = new Event("updatedTodos")
	}

	generateId() {
		return '_' + Math.random().toString(36).substr(2, 9)
	}

	add(todo) {
		if (todo === "") return

		var newTodo = {
			todo,
			_id: this.generateId(),
			completed: false
		}

		this.todos.push(newTodo)
		window.dispatchEvent(this.updatedTodos)
	}

	complete(id) {
		this.todos.forEach((todo) => {
			if (todo._id === id) {
				todo.completed = !todo.completed
			}
		})

		window.dispatchEvent(this.updatedTodos)
	}

	completeAll() {
		this.todos.forEach((todo) => {
			todo.completed = true
		})

		window.dispatchEvent(this.updatedTodos)
	}

	clearCompleted() {
		this.todos = this.todos.filter((todo, i) => {
			return todo.completed === false
		})

		window.dispatchEvent(this.updatedTodos)
	}

	remove(id) {
		this.todos = this.todos.filter((todo) => {
			return todo._id !== id
		})

		window.dispatchEvent(this.updatedTodos)
	}

	subscribe( cb = () => {} ) {
		cb()
		window.addEventListener("updatedTodos", cb)
	}

	unsubscribe() {
		window.removeEventListener("updatedTodos")
	}
}

export default TodoCollection