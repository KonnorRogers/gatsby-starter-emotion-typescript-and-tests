import React from "react";
import { render } from "@testing-library/react";
import data from "~fixtures/astronautImage.fixture";
import { PureAstronautImage as AstronautImage } from "~components/astronautImage";

describe("AstronautImage", () => {
  test("Should render without error", () => {
    const image = render(<AstronautImage data={data} />);
    expect(image).toMatchSnapshot();
  });
});
