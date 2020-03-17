import React from "react";
import { render } from "@testing-library/react";
import data from "Fixtures/astronautImage-fixture";
import { PureAstronautImage as AstronautImage } from "~components/astronautImage";

describe("AstronautImage", () => {
  test("Should render without error", () => {
    const { asFragment, getByAltText } = render(
      <AstronautImage data={data} data-testid="astronaut-image" />
    );

    expect(getByAltText(/An image of an astronaut/)).toBeTruthy();
    expect(asFragment).toMatchSnapshot();
  });
});
