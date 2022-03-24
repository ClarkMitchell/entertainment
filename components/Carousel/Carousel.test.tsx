import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import Carousel from "./Carousel";

describe("Carousel Component", () => {
  it("renders with no a11y issues.", async () => {
    const { container } = render(<Carousel />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
