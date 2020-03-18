import * as React from "react";
import { render, waitForDomChange } from "@testing-library/react";
import data from "~fixtures/seo-fixture";
import { PureSEO as SEO } from "~components/seo";

describe("SEO component", () => {
  test("Should properly render without errors", async () => {
    // https://github.com/testing-library/react-testing-library/issues/402 used to get this testing working
    render(<SEO title={data.title} site={data.site} />);
    await waitForDomChange();

    expect(document.querySelector("head")).toMatchSnapshot();
  });
});
