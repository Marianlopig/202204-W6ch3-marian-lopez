import { screen, render } from "@testing-library/react";
import PhoneContextProvider from "../../contexts/PhoneContextProvider";
import Info from "./Info";

describe("Given an Info component", () => {
  describe("When it is invoke", () => {
    test("Then it should print the text 'Calling...'", () => {
      const showedText = "Calling...";

      render(
        <PhoneContextProvider>
          <Info />
        </PhoneContextProvider>
      );
      const textInfo = screen.getByText(showedText);

      expect(textInfo).toBeInTheDocument();
    });
  });
});
