import { parseLink } from "./LinkParser";
import { removeTag } from "./HTMLRemover";

/**
 * Filler for Assert True assertion test
 * @param actual Actual string
 * @param expected Expected string
 * @returns true if actual matches expected, false if not. Will info out success, warn failure
 */
const assertTrue = (actual: string, expected: string): boolean => {
  const res = actual === expected;
  if (res) {
    console.info(`Success!\nOutput: ${actual}`);
    return true;
  }
  console.warn(`Failed:\nExpected: ${expected}\nActual: ${actual}`);
  return false;
};

/**
 * Returns the link and text related
 * @param str HTML code to get the a tag of
 * @returns object with {link, text} inside parsed from string
 */
const getATag = (str: string): any => {
  let regex = new RegExp("<s*a[^>]*>(.*?)<s*/s*a>");
  let matched = str.match(regex);
  return { link: matched[0], text: matched[1] };
};
/**
 * Replace single link
 * @param str String to parse
 *
 * @var link the link parsed from getATag
 * @var text the text parsed from getATag
 * @returns show(link, text)
 */
const getLink = (str: string): string => {
  let { link, text } = getATag(str);
  link = parseLink(link);
  return `show(\"${link}\", \"${text}\")`;
};

/**
 * Recursively parse and replace a tag with text from @see getLink function call
 * @param str HTML Code to parse
 * @returns html code without a tags to allow for future stripping
 */
const parseAll = (str: string): string => {
  let regex = new RegExp("<s*a[^>]*>(.*?)<s*/s*a>");
  let matched = str.match(regex);
  let replaced = str;
  if (matched === null) {
    return replaced;
  }
  replaced = str.replace(matched[0], getLink(str));
  return parseAll(replaced);
};

/**
 * Parses html, replaces a tag with show function, then strips rest of html
 * @param str HTML Code to parse, strip, and return
 * @returns string without html code, where a tags are replaced with function calls
 */
const getString = (str: string): string => {
  str = parseAll(str);
  str = removeTag(str);
  return str;
};

/** Function to test everything */
const main = () => {
  let longHTML =
    '<div><h1>hello</h1> <a href="https://www.google.com">Google</a> <a href="www.google.com">Second link</a></div>';
  assertTrue(
    getString(longHTML),
    'hello show("https://www.google.com", "Google") show("www.google.com", "Second link")'
  );
};
