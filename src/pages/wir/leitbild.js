import React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/Layout";
import Content from "../../components/Content";
import { graphql } from "gatsby";

export default function Leitbild({ data, pageContext, location }) {
  const stageImage =
    data.wirLeitbildGatsbyImage.childImageSharp.gatsbyImageData;

  const stageContentArray = [
    {
      text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
      subTitle: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr.`,
      image: stageImage,
    },
    {
      text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
      subTitle: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr.`,
    },
  ];

  const bannerInfo = {
    title: "Banner Leitbild",
    subTitle: "Hier steht ein SubTitle zum Leitbild der Firma.",
  };
  return (
    <>
      <Seo title="Leitbild" />
      <Layout
        pageContext={pageContext}
        location={location}
        bannerInfo={bannerInfo}
      >
        {stageContentArray.map((stageContent, id) => (
          <Content key={id} content={stageContent} />
        ))}
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    wirLeitbildGatsbyImage: file(
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
