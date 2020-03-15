import React from "react";
import { render } from "@testing-library/react";
import Header from "~components/header";

describe("Header component", () => {
  test("Should render a header with the given testid", () => {
    const { asFragment, getByTestId } = render(
      <Header siteTitle="test-title" className="header" data-testid="header" />
    );

    const header = getByTestId("header");
    expect(header).toHaveClass("header");
    expect(header).toHaveTextContent("test-title");
    expect(asFragment()).toMatchSnapshot();
  });
});
