const SupportedAttributeTypes = {
	"string" : true,
	"number" : true
};

export class SelectParser {

	parse(inputJson) {
		if (inputJson.type !== "select") {
			console.error(`SelectParser invoked for an item of type ${inputJson.type}`);
			return false;
		}

		if (!inputJson.options) {
			console.error("No options specified for a select element.");
			return false;
		}

		for (const option of inputJson.options) {
			if (!option.value) {
				console.error("Missing value for one of the options.");
				return false;
			}
		}

		return true;
	}

	render(inputJson) {
		const result = document.createElement("select");
		for (const option of inputJson.options) {
			const tag = document.createElement("option");
			tag.setAttribute("value", option.value);
			const text = document.createTextNode(option.displayName || option.value);

			tag.appendChild(text);
			result.appendChild(tag);
		}

		return result;
	}
}