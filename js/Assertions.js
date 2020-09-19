
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


module.exports = assertTrue;