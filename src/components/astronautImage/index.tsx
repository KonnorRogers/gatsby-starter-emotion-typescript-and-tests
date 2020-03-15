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

export const PureAstronautImage: React.FC<Data> = ({ data }) => {
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

const AstronautImage: React.FC = props => {
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

  return <PureAstronautImage {...props} data={data} />;
};

export default AstronautImage;
