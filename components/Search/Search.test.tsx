import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import Search from "./Search";

describe("Search Component", () => {
  it("renders with no a11y issues.", async () => {
    const { container } = render(<Search />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
