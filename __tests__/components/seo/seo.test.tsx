import * as React from "react";
import { render } from "@testing-library/react";
import data from "~fixtures/seo-fixture";
import { PureSEO as SEO } from "~components/seo";

describe("SEO component", () => {
  test("Should properly render without errors", () => {
    // const Page = () => {
    //   <>
    //     <SEO title={data.title} site={data.site}></SEO>
    //   </>;
    // };

    const { asFragment, debug } = render(
      <SEO title={data.title} site={data.site} />
    );

    debug();
  });
});
