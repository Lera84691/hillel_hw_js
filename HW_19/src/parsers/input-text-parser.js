export class InputTextParser {
	parse(inputJson) {
		if (inputJson.type !== "text") {
			console.error(`InputTextParser invoked for an item of type ${inputJson.type}`);
			return false;
		}

		return true;
	}

	render(inputJson) {
		const result = document.createElement("input");
		result.setAttribute("type", "text");

		if (inputJson.placeholder) {
			result.setAttribute("placeholder", inputJson.placeholder);
		}

		return result;
	}
}