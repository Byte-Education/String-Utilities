var parseLink = require("./LinkParser");
var removeTag = require("./HTMLRemover");

/**
 * Returns the matched line, the text between the html or null if nothing is found
 * @param tag HTML tag to look for
 * @param str HTML code to get the a tag of
 * @returns Object with the matched line, the text between the html line, or null if nothing found
 */
const getTag = (tag, str) => {
  let regex = new RegExp(`<s*${tag}[^>]*>(.*?)<s*/s*${tag}>`);
  return { match: null, text: null };
};
/**
 * Replace single link
 * @param str String to parse
 *
 * @var link the link parsed from match from getTag
 * @var text the text parsed from getTag
 * @returns show(link, text)
 */
const getLink = (str) => {
  return str;
};

/**
 * Recursively parse and replace a tag with text from @see getLink function call
 * @param str HTML Code to parse
 * @returns html code without a tags to allow for future stripping
 */
const parseAll = (str) => {
  let regex = new RegExp("<s*a[^>]*>(.*?)<s*/s*a>");
  return str;
};

/**
 * Parses html, replaces a tag with show function, then strips rest of html
 * @param str HTML Code to parse, strip, and return
 * @returns string without html code, where a tags are replaced with function calls
 */
const getString = (str) => {
  return str;
};

module.exports = {
  getTag,
  getLink,
  parseAll,
  getString,
};
