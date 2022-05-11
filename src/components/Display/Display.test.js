import { screen, render } from "@testing-library/react";
import PhoneContext from "../../contexts/PhoneContext";
import Display from "./Display";

describe("Given a Display component", () => {
  describe("When it take a 627955776 number", () => {
    test("Then it should print the next number 627955776", () => {
      const showedNumber = "627955776";
      const value = {
        phoneNumber: "627955776",
      };

      render(
        <PhoneContext.Provider value={value}>
          <Display />
        </PhoneContext.Provider>
      );
      const textInfo = screen.getByText(showedNumber);

      expect(textInfo).toBeInTheDocument();
    });
  });
});
