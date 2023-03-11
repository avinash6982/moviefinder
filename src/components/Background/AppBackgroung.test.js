import { render, screen } from "@testing-library/react";
import AppBackground from "./AppBackground";

test("renders learn react link", () => {
  render(<AppBackground />);
  screen.getByTestId("svgElement");
});
