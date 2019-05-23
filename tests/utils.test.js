import { equalizeArray } from "../src/utils/index";
describe("utility tests", () => {
  it("should grow an array given an element", () => {
    // test best case growing array
    const initialArray = ["hello", "world"];
    const equalizedArray = equalizeArray(initialArray, 4);
    expect(equalizedArray.length).toBe(4);
    expect(equalizedArray[3]).toBe(null);
  });

  it("should not grow array given an array length equal to the growth amount", () => {
    // test case where array is equal to the equalize amount
    const equalArray = ["hello", "world"];
    const test2 = equalizeArray(equalArray, 2);
    expect(test2.length).toBe(2);
  });
});
