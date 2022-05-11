import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Display from "./Display";

describe("Given a Display component", () => {
  describe("When it take a 627955776 number", () => {
    test("Then it should print the next number 627955776", () => {
      const showedNumber = "627955776";

      const mockState = {
        phone: {
          calling: false,
          numbers: [6, 2, 7, 9, 5, 5, 7, 7, 6],
        },
      };

      const mockStore = {
        ...store,
        getState: () => {
          return mockState;
        },
      };

      render(
        <Provider store={mockStore}>
          <Display />
        </Provider>
      );
      const textInfo = screen.getByText(showedNumber);

      expect(textInfo).toBeInTheDocument();
    });
  });
});
