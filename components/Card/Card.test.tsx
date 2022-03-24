import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import Card from "./Card";

describe("Card Component", () => {
  it("renders with no a11y issues.", async () => {
    const { container } = render(<Card />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
