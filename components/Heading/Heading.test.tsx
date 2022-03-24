import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import Heading from "./Heading";

describe("Heading Component", () => {
  it("renders with no a11y issues.", async () => {
    const { container } = render(<Heading>Foobar</Heading>);

    expect(await axe(container)).toHaveNoViolations();
  });
});
