import { render, screen } from "@testing-library/react";
import Watchlist from ".";

test("renders learn react link", () => {
  render(<Watchlist />);
  screen.getByText("Your list");
});
