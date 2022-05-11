import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Info from "./Info";

describe("Given an Info component", () => {
  describe("When it is invoke", () => {
    test("Then it should print the text 'Calling...'", () => {
      const showedText = "Calling...";

      render(
        <Provider store={store}>
          <Info />
        </Provider>
      );
      const textInfo = screen.getByText(showedText);

      expect(textInfo).toBeInTheDocument();
    });
  });
});
