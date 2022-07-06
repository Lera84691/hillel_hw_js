export class FormParser {

	constructor(inputParsers, defaultParser) {
		this.inputParsers = inputParsers || {};
	}

	parse(inputJson) {
		for (const item of inputJson) {
			if (!item.type) {
				console.error("An item without a type encountered.");
				return false;
			}
			const inputParser = this.inputParsers[item.type];
			if (!inputParser) {
				console.error(`No parser for ${item.type} items found.`);
				return false;
			}

			if (!inputParser.parse(item)) {
				return false;
			}
		}

		return true;
	}

	render(inputJson) {
		const result = document.createElement("form");
		for (const item of inputJson) {
			const inputParser = this.inputParsers[item.type];
			result.appendChild(inputParser.render(item));
		}
		return result;
	}
}