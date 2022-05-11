import { render, screen } from "@testing-library/react";
import Key from "./Key";
describe("Given a Key component", () => {
  describe("When it receives a 'Call' text", () => {
    test("Then it should show 'Call'", () => {
      const showedText = "Call";
      const expectedText = "Call";
      render(<Key text={expectedText} />);

      const textInfo = screen.getByText(showedText);

      expect(textInfo).toBeInTheDocument();
    });
  });
});
