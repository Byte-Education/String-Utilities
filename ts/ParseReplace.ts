import { parseLink } from './LinkParser';
import { removeTag } from './HTMLRemover';

const getATag = (str: string) : any  => {
	
	let regex = new RegExp("<\s*a[^>]*>(.*?)<\s*/\s*a>");
	let matched = str.match(regex);
	return {link: matched[0], text: matched[1]};
}
const test = (actual: string, expected: string) : boolean => {
	const res = actual === expected;
	if(res){
		console.info(`Success!\nOutput: ${actual}`);
		return true;
	}
	console.warn(`Failed:\nExpected: ${expected}\nActual: ${actual}`);
	return false;
}

const parseAndReplace = (str: string) : string => {
	let {link, text} = getATag(str);
	link = parseLink(link);
	return `show(\"${link}\", \"${text}\")`;
}


let testString = "<h1>hello</h1><a href= \"https://www.edwardrees.info\">Edward</a>";
console.info(test(parseAndReplace(testString), "show(\"https://www.edwardrees.info\", \"Edward\")"));

