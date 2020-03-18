import React from "react";
import { render } from "@testing-library/react";

import data from "~fixtures/layout-fixture";
import { PureLayout as Layout } from "~components/layout";

describe("Layout component", () => {
  test("Should render without error", () => {
    const { asFragment, getByText, getByTestId } = render(
      <Layout data={data} data-testid="layout" />
    );

    expect(getByTestId(/layout/)).toBeTruthy();
    expect(getByText(/Test Title/)).toBeTruthy();
    expect(asFragment).toMatchSnapshot();
  });
});
