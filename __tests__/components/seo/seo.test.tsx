import * as React from "react";
import { render } from "@react/testing-library";
import SEO from "~components/seo";

describe("SEO component", () => {
  test("Should properly render without errors", async () => {
    const Page = () => {
      <>
        <SEO></SEO>
      </>;
    };
  });
});
