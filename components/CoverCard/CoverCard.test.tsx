import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import CoverCard from "./CoverCard";

describe("CoverCard Component", () => {
  it("renders with no a11y issues.", async () => {
    const { container } = render(<CoverCard />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
