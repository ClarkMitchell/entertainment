import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import Grid from "./Grid";

describe("Grid Component", () => {
  it("renders with no a11y issues.", async () => {
    const { container } = render(<Grid />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
