import React from "react";
import { render } from "@testing-library/react";
import Header from "~components/header";

describe("Unit testing", () => {
  test("Should render a header with the given testid", () => {
    const { getByTestId } = render(
      <Header siteTitle="test-title" className="header" data-testid="header" />
    );

    const header = getByTestId("header");
    expect(header).toHaveClass("header");
    expect(header).toHaveTextContent("test-title");
  });
});

describe("Snapshot testing", () => {
  test("Should render a header without error", () => {
    const { asFragment } = render(
      <Header siteTitle="test-title" className="header" data-testid="header" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("Renders a header without a siteTitle defined", () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });
});
