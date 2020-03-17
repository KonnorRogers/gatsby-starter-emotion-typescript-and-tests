import React from "react";
import { render } from "@react/testing-library";
import data from "~fixtures/layout-fixture";
import { PureLayout as Layout } from "~components/layout";

describe("Layout component", () => {
  test("Should render without error", () => {
    const { asFragment, debug } = render(<Layout data={data} />);
  });
});
