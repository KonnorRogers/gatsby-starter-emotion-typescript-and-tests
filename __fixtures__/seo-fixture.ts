import { PureSEOProps, SiteProps } from "~components/seo";

const siteData: SiteProps = {
  siteMetadata: {
    title: "Site Title",
    description: "My testing site",
    author: "Konnor Rogers",
  },
};

const propData: PureSEOProps = {
  title: "Test Title",
  description: "Test description",
  lang: "en",
  meta: [
    { name: "description" },
    { content: "nonsense" },
    { charSet: "utf-8" },
  ],
  site: siteData,
};

export default propData;
