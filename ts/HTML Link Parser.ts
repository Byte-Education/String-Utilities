export const parseLink = (str: string) : string => {
	str = str.toLowerCase();
	let regex = /href\s*=\s*\".*\"/g 
	let matched = str.match(regex)[0].match(/\".*\"/g)[0];
	return matched.replace(/"/g, "");;
}
