/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet, { HelmetProps } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export type SiteProps = {
  siteMetadata: {
    title: string;
    description: string;
    author: string;
  };
};

export type MetaProps = JSX.IntrinsicElements["meta"];

export interface Props extends HelmetProps {
  title?: string;
  description?: string;
  lang?: string;
  meta?: MetaProps[];
}

export interface PureSEOProps extends Props {
  site: SiteProps;
}

export const PureSEO = ({
  site,
  description,
  lang,
  meta,
  title,
}: PureSEOProps): React.ReactElement<PureSEOProps> => {
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

function SEO({ title, ...attrs }: Props): React.ReactElement<Props> {
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
