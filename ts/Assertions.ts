/**
 * Filler for Assert True assertion test
 * @param actual Actual string
 * @param expected Expected string
 * @returns true if actual matches expected, false if not. Will info out success, warn failure
 */
const assertTrue = (
  actual: string,
  expected: string,
  success?: string,
  failure?: string
): boolean => {
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
 * return true if no exceptions are thrown, false if any exception is thrown
 * @param func function to assert
 * @returns true if no exceptions thrown, false otherwise
 */
const assertTry = (func: Function): boolean => {
  try {
    func();
    console.info("Successfully caught all exceptions!");
    return true;
  } catch (e) {
    console.warn(
      `Failed to catch exception [${e.name}]\nMessage: ${e.message}`
    );
    return false;
  }
};

/**
 * Compare both values, return true only if both values are the same in type and value, false otherwise
 * @param first first value to compare
 * @param second second value to compare
 * @returns true if both are the same in value and type, false otherwise
 */
const assertEquals = (first: any, second: any): boolean => {
  if (typeof first === typeof second) {
    if (first === second) {
      console.info(`${first} and ${second} are the same!`);
      return true;
    } else {
      console.warn(
        `${first} and ${second} are the same type, but have different values!`
      );
      return false;
    }
  }
  console.warn(
    `${first} and ${second} are different types, therefore cannot be the same`
  );
  return false;
};


export { assertTrue, assertTry, assertEquals };
