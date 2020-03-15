import { render } from "@react/testing-library";
import data from "~fixtures/astronautImage.fixture";
import { PureAstronautImage as AstronautImage } from "~components/astronautImage";

describe("AstronautImage", () => {
  test("Should render without error", () => {
    console.log(data);
  });
});
