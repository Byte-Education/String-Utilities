var { assertTrue, assertTry } = require("./Assertions");
var { getTag, getLink, parseAll, getString } = require("./ParseReplace");

const FUNCTION_NAME = "show";

const assertGetTag = () => {
  console.info("=====Testing getTag=====");
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
  assertTrue(
    getTag("h1", "<h1>hello</h1>").match,
    "<h1>hello</h1>",
    "Successfully found h1 tag",
    "Failed to find h1 tag"
  );
  assertTrue(
    getTag("h1", "<h1>hello</h1>").text,
    "hello",
    "Successfully pulled text between h1 tag",
    "Failed to pull text between h1 tag"
  );
};

const assertGetLink = () => {
  console.info("=====Testing getLink=====");
  assertTrue(
    getLink("<div> </div>"),
    "<div> </div>",
    "Successfully found no links",
    "Found a link or returned an invalid value"
  );
  assertTrue(
    getLink('<a href="www.google.com">Google</a>'),
    `${FUNCTION_NAME}("www.google.com", "Google")`,
    "Successfully converted html to function call",
    "Failed to convert html to function call"
  );
  assertTrue(
    getLink('<div><a href="www.google.com">Google</a></div>'),
    `${FUNCTION_NAME}("www.google.com", "Google")`,
    "Successfully converted nested html to function call",
    "Failed to convert nested html to function call"
  );
  assertTrue(
    getLink('<div><h1>Hello</h1> <a href="www.google.com">Google</a></div>'),
    `${FUNCTION_NAME}("www.google.com", "Google")`,
    "Successfully converted html to only function call\nSuccessfully ignored other text",
    "Failed to ignore other text or convert html to only function call"
  );
};

const assertParseAll = () => {
  console.info("=====Testing parseAll=====");
  assertTry(
    () => {
      parseAll("<div></div>");
    },
    "Base case found, no infinite recursion caused",
    "Possible problem with recursion, see error name and error message"
  );
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
    `<h1>hello</h1> ${FUNCTION_NAME}("www.google.com", "google") ${FUNCTION_NAME}("www.google.com", "google")`,
    "Successfully parsed html and converted links to function calls",
    "Failed to parse html or convert links to function calls"
  );
};

const assertGetString = () => {
  console.info("=====Testing getString=====");
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
    `${FUNCTION_NAME}("www.google.com", "google.com")`,
    "Successfully converted html to function call without other tags",
    "Failed to convert html to function calls or included other tags"
  );
  let longHTML =
    '<div><h1>hello</h1> <a href="https://www.google.com">Google</a> <a href="www.google.com">Second link</a></div>';
  assertTrue(
    getString(longHTML),
    `hello ${FUNCTION_NAME}("https://www.google.com", "Google") ${FUNCTION_NAME}("www.google.com", "Second link")`,
    "Successfully removed all html elements, maintaining text, and converting links to function calls",
    "Failed to remove all html elements, maintain text, or convert links to function calls"
  );
};

/** Function to test everything */
const main = () => {
  let args = process.argv.slice(2);
  if (args.length === 0) {
    assertGetTag();
    assertGetLink();
    assertParseAll();
    assertGetString();
    return;
  } else {
    let run = args[0].split("=");
    let action = run[1];
    switch (action) {
      case "getTag":
        assertGetTag();
        break;
      case "getLink":
        assertGetLink();
        break;
      case "parseAll":
        assertParseAll();
        break;
      case "getString":
        assertGetString();
        break;
      default:
        console.info("Invalid input, running all test cases");
        assertGetTag();
        assertGetLink();
        assertParseAll();
        assertGetString();
    }
  }
};
main();
