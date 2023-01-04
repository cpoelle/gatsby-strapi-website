import React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/Layout";
import Content from "../../components/Content";
import { graphql } from "gatsby";

export default function Angebote({ data, pageContext, location }) {
  // Replace Placeholder Image when implement real Project (see GraphQL Query at the bottom)
  const stageImage =
    data.angeboteMainGatsbyImage.childImageSharp.gatsbyImageData;

  const bannerInfo = {
    title: "Banner Interessenten",
    subTitle:
      "Hier steht ein Subtitle zu den Informationen für Interessierte an der Firma.",
  };

  const stageContent = {
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
    closerText: `
      Wir beraten Sie persönlich und vertraulich.`,
    image: stageImage,
  };

  return (
    <>
      <Seo title="Für Interessenten" />
      <Layout
        pageContext={pageContext}
        location={location}
        bannerInfo={bannerInfo}
      >
        <Content content={stageContent} />
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    angeboteMainGatsbyImage: file(
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
  }
`;
