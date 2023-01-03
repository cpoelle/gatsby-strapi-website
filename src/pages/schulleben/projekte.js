import React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/Layout";
import Content from "../../components/Content";
import { graphql } from "gatsby";

export default function Projekte({ data, pageContext, location }) {
  const foerderkreisImage =
    data.foerderkreisGatsbyImage.childImageSharp.gatsbyImageData;
  const kulturImage = data.kulturGatsbyImage.childImageSharp.gatsbyImageData;

  const stageContentArray = [
    {
      text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
      title: `Projekt 1`,
      image: foerderkreisImage,
    },
    {
      text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
      title: `Projekt 2`,
      image: kulturImage,
    },
  ];

  return (
    <>
      <Seo title="Projekte" />
      <Layout pageContext={pageContext} location={location}>
        {stageContentArray.map((stageContent, id) => (
          <Content key={id} content={stageContent} />
        ))}
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    foerderkreisGatsbyImage: file(
      relativePath: { eq: "content/placeholder.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          blurredOptions: { width: 100 }
          transformOptions: { fit: COVER }
        )
      }
    }
    kulturGatsbyImage: file(relativePath: { eq: "content/placeholder.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          blurredOptions: { width: 100 }
          transformOptions: { fit: COVER }
        )
      }
    }
  }
`;
