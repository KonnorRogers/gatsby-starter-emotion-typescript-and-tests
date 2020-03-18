/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export interface SiteProps {
  siteMetadata: {
    title: string;
    description: string;
    author: string;
  };
}

type MetaProps = JSX.IntrinsicElements["meta"];

export interface Props {
  title?: string;
  description?: string;
  lang?: string;
  meta?: MetaProps[];
  site: SiteProps;
}

export const PureSEO = ({
  site,
  description,
  lang,
  meta,
  title,
}: Props): JSX.Element => {
  const metaDescription = description || site.siteMetadata.description;
  const metaData: MetaProps[] = meta || [];

  const metaTags: MetaProps[] = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={metaTags.concat(metaData)}
    />
  );
};

function SEO({ title, ...attrs }: HelmetProps): JSX.Element {
  const site: SiteProps = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  ).site;

  return <PureSEO title={title} site={site} {...attrs} />;
}

export default SEO;
