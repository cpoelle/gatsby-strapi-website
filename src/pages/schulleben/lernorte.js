import React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/Layout";
import Content from "../../components/Content";
import { graphql } from "gatsby";

export default function Lernorte({ data, pageContext, location }) {
  const allgemeinImage =
    data.allgemeinRaumGatsbyImage.childImageSharp.gatsbyImageData;
  const fachraumImage =
    data.fachraumGatsbyImage.childImageSharp.gatsbyImageData;
  const aulaImage = data.aulaGatsbyImage.childImageSharp.gatsbyImageData;

  const stageContentArray = [
    {
      text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
      title: `Allgemeine Unterichtsräume`,
      image: allgemeinImage,
    },
    {
      text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
      title: `Fachräume`,
      image: fachraumImage,
    },
    {
      text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
      title: `Aula mit Bühne`,
      image: aulaImage,
    },
  ];

  return (
    <>
      <Seo title="Lernorte" />
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
    allgemeinRaumGatsbyImage: file(
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
    aulaGatsbyImage: file(relativePath: { eq: "content/placeholder.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          blurredOptions: { width: 100 }
          transformOptions: { fit: COVER }
        )
      }
    }
    fachraumGatsbyImage: file(relativePath: { eq: "content/placeholder.png" }) {
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
