import { Props, SiteProps } from "~components/seo";

const propData: Props = {
  title: "Test Title",
  description: "Test description",
  lang: "en",
  meta: [
    { name: "description" },
    { content: "nonsense" },
    { charSet: "utf-8" },
  ],
};

const siteData: SiteProps = {
  site: {
    siteMetadata: {
      title: "Site Title",
      description,
    },
  },
};

export default data;
