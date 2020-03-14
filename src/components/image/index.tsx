import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

type Data = {
  data: {
    placeholderImage: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
};

export const PureImage: React.FC<Data> = ({ data }) => {
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

const Image: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <PureImage data={data} />;
};

export default Image;
