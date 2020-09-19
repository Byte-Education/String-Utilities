
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

const assertTry = (func : Function) : boolean => {
  try{
    func();
    console.info("Successfully caught all exceptions!")
    return true;
  }
  catch(e){
    console.warn(`Failed to catch exception [${e.name}]\nMessage: ${e.message}`)
    return false;
  }
}


export { assertTrue, assertTry };