/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Global } from "@emotion/core";

import Header from "../header";
import * as styles from "./styles";

export interface Props extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export const PureLayout: React.FC<Props> = ({ children, data, ...rest }) => {
  return (
    <div {...rest}>
      <Global styles={styles.layout} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  );
};

const Layout: React.FC<Props> = ({ children, ...rest }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <PureLayout data={data} {...rest}>
      {children}
    </PureLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
