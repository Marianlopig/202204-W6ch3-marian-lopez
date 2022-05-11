import phoneReducer from "./phoneSlice";

describe("Given an slice with an addNumber reducer", () => {
  describe("When we pass a new number, 6", () => {
    test("Then it should return the actual number with a new 6 number added", () => {
      const actionType = "phone/addNumber";
      const newNumber = 6;

      const expectedResult = 6;

      const expectedReducer = phoneReducer(newNumber, actionType);

      expect(expectedReducer).toBe(expectedResult);
    });
  });
});
