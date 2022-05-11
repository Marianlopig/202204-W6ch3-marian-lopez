import phoneReducer, { addNumbersActionCreator } from "./phoneSlice";

describe("Given an slice with an addNumber reducer", () => {
  describe("When we pass a new number, 6", () => {
    test("Then it should return the actual number with a new 6 number added", () => {
      const initialValue = {
        numbers: [],
        calling: false,
      };
      const receivedNumber = 6;

      const action = addNumbersActionCreator(receivedNumber);
      const expectedResult = {
        numbers: [6],
        calling: false,
      };

      const numberAdded = phoneReducer(initialValue, action);

      expect(numberAdded).toEqual(expectedResult);
    });
  });
});
