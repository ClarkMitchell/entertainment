import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import Header from "./Header";

describe("Header Component", () => {
  it("renders with no a11y issues.", async () => {
    const { container } = render(<Header />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
