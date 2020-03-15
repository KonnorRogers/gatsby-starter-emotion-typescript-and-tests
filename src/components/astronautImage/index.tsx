import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";

type Data = {
  data: {
    placeholderImage: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
};

/** Refer to https://www.gatsbyjs.org/packages/gatsby-image/#gatsby-image-props for props */
export const PureAstronautImage: React.FC<Data> = ({ data, ...attrs }) => {
  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="An image of an astronaut"
      {...attrs}
    />
  );
};

const AstronautImage: React.FC = ({ ...attrs }) => {
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

  return <PureAstronautImage data={data} {...attrs} />;
};

export default AstronautImage;
