import { render, screen } from "@testing-library/react";
import MovieCard from "./MovieCard";

test("renders learn react link", () => {
  render(<MovieCard />);
  screen.getByTestId("thumb-image");
});
