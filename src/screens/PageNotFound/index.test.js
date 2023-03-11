import { render, screen } from "@testing-library/react";
import PageNotFound from ".";

test("renders learn react link", () => {
  render(<PageNotFound />);
  screen.getByText("Page Not Found");
});
