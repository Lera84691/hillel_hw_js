import inputJson from "./form-data.json";
import { 
	FormParser,
	SelectParser,
	InputTextParser,
	InputNumberParser
} from "./parsers";

const parsers = {
	text: new InputTextParser(),
	select: new SelectParser(),
	number: new InputNumberParser()
};
const formParser = new FormParser(parsers);
if(formParser.parse(inputJson)) {
	const form = formParser.render(inputJson);
	document.body.appendChild(form);
}

