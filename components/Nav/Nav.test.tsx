import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import Nav from "./Nav";

describe("Nav Component", () => {
  it("renders with no a11y issues.", async () => {
    const { container } = render(<Nav />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
