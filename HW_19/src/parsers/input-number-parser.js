export class InputNumberParser {
	parse(inputJson) {
		if (inputJson.type !== "number") {
			console.error(`InputNumberParser invoked for an item of type ${inputJson.type}`);
			return false;
		}

		return true;
	}

	render(inputJson) {
		const result = document.createElement("input");
		result.setAttribute("type", "number");

		if (inputJson.minValue) {
			result.setAttribute("minValue", inputJson.minValue);
		}

		if (inputJson.maxValue) {
			result.setAttribute("maxValue", inputJson.maxValue);
		}

		return result;
	}
}