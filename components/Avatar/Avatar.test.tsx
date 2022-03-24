import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import Avatar from "./Avatar";

describe("Avatar Component", () => {
  it("renders with no a11y issues.", async () => {
    const { container } = render(<Avatar />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
