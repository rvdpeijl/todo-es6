import MainController from "js/controllers/MainController"

import "less/main.less"

document.addEventListener('DOMContentLoaded', () => {
	new MainController({
		element: document.getElementById("root")
	})
})