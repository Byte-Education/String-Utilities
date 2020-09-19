/**
 * Filler for Assert True assertion test
 * @param actual Actual string
 * @param expected Expected string
 * @returns true if actual matches expected, false if not. Will info out success, warn failure
 */
const assertTrue = (
  actual,
  expected,
  success = undefined,
  failure = undefined
) => {
  const res = actual === expected;
  if (res) {
    console.info(
      `Success!\n${
        success !== undefined ? success + "\n" : ""
      }Output: ${actual}\n`
    );
    return true;
  }
  console.warn(
    `Failed:\n${
      failure !== undefined ? failure + "\n" : ""
    }Expected: ${expected}\nActual: ${actual}\n`
  );
  return false;
};

/**
 * Returns the matched line, the text between the html or null if nothing is found
 * @param tag HTML tag to look for
 * @param str HTML code to get the a tag of
 * @returns Object with the matched line, the text between the html line, or null if nothing found
 */
const getTag = (tag, str) => {
  let regex = new RegExp(`<s*${tag}[^>]*>(.*?)<s*/s*${tag}>`);
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
  
};

/**
 * Recursively parse and replace a tag with text from @see getLink function call
 * @param str HTML Code to parse
 * @returns html code without a tags to allow for future stripping
 */
const parseAll = (str) => {
  let regex = new RegExp("<s*a[^>]*>(.*?)<s*/s*a>");
  
};

/**
 * Parses html, replaces a tag with show function, then strips rest of html
 * @param str HTML Code to parse, strip, and return
 * @returns string without html code, where a tags are replaced with function calls
 */
const getString = (str) => {
  
};

const assertGetTag = () => {
  console.info("Testing getTag");
  assertTrue(
    getTag("a", "<div></div>"),
    null,
    "Successfully recognized no <a> tag in <div></div>",
    "Recognized non-existent tag"
  );
  assertTrue(
    getTag("a", '<a href="www.google.com">google.com</a>').match,
    '<a href="www.google.com">google.com</a>',
    "Successfully found a tag",
    "Failed to find a tag"
  );
  assertTrue(
    getTag("a", '<a href="www.google.com">google.com</a>').text,
    "google.com",
    "Successfully pulled out text between a tag",
    "Failed to find text between text tags"
  );
};

const assertGetLink = () => {
  console.info("Testing getLink");
  assertTrue(
    getLink("<div> </div>"),
    "<div> </div>",
    "Successfully found no links",
    "Found a link or returned an invalid value"
  );
  assertTrue(
    getLink('<a href="www.google.com">Google</a>'),
    'show("www.google.com", "Google")',
    "Successfully converted html to function call",
    "Failed to convert html to function call"
  );
  assertTrue(
    getLink('<div><a href="www.google.com">Google</a></div>'),
    'show("www.google.com", "Google")',
    "Successfully converted nested html to function call",
    "Failed to convert nested html to function call"
  );
  assertTrue(
    getLink('<div><h1>Hello</h1> <a href="www.google.com">Google</a></div>'),
    'show("www.google.com", "Google")',
    "Successfully converted html to only function call\nSuccessfully ignored other text",
    "Failed to ignore other text or convert html to only function call"
  );
};

const assertParseAll = () => {
  console.info("Testing parseAll");
  assertTrue(
    parseAll("<div></div>"),
    "<div></div>",
    "Successful parsing of html",
    "Failure of parsing html"
  );
  assertTrue(
    parseAll("<h1>hello</h1>"),
    "<h1>hello</h1>",
    "Successfully parsed html",
    "Failed to parse html"
  );
  assertTrue(
    parseAll(
      '<h1>hello</h1> <a href="www.google.com">google</a> <a href="www.google.com">google</a>'
    ),
    '<h1>hello</h1> show("www.google.com", "google") show("www.google.com", "google")',
    "Successfully parsed html and converted links to function calls",
    "Failed to parse html or convert links to function calls"
  );
};

const assertGetString = () => {
  console.info("Testing getString");
  assertTrue(
    getString("<h1>Hello</h1>"),
    "Hello",
    "Successfully removed tag and kept string between tags",
    "Failed to remove tag or keep text"
  );
  assertTrue(
    getString("<div></div>"),
    "",
    "Successfully removed tags",
    "Failed to remove tags"
  );
  assertTrue(
    getString('<div><a href="www.google.com">google.com</a></div>'),
    'show("www.google.com", "google.com")',
    "Successfully converted html to function call without other tags",
    "Failed to convert html to function calls or included other tags"
  );
  let longHTML =
    '<div><h1>hello</h1> <a href="https://www.google.com">Google</a> <a href="www.google.com">Second link</a></div>';
  assertTrue(
    getString(longHTML),
    'hello show("https://www.google.com", "Google") show("www.google.com", "Second link")',
    "Successfully removed all html elements, maintaining text, and converting links to function calls",
    "Failed to remove all html elements, maintain text, or convert links to function calls"
  );
};

/** Function to test everything */
const main = () => {
  assertGetTag();
  assertGetLink();
  assertParseAll();
  assertGetString();
};

main();
