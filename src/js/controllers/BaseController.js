class BaseController {
	constructor(options) {
		this.el = options.element
		this.initialize(options)
		this.render()
	}

	initialize() {}

	addEvents() {
		var events = this.events()

		for (var string in events) {
			var event, selector;
			[event, selector] = string.split(" ")

			var elements = this.el.querySelectorAll(selector)

			for (var i = 0; i < elements.length; i++) {
				var func = events[string]
				elements[i].addEventListener(event, events[string].bind(this))
			}
		}
	}

	render() {
		if (typeof this.beforeRender === "function") {
			this.beforeRender()
		}

		this.el.innerHTML = this.template()

		if (typeof this.events === "function") {
			this.addEvents()
		}

		if (typeof this.afterRender === "function") {
			this.afterRender()
		}
	}
}

export default BaseController