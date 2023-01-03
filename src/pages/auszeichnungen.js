import React from "react";
import Seo from "../components/seo";
import Layout from "../components/Layout";
import Content from "../components/Content";
import { graphql } from "gatsby";

export default function Auszeichnungen({ data, pageContext, location }) {
  const famiImage = data.famiSiegelGatsbyImage.childImageSharp.gatsbyImageData;
  const lehrerpreisImage =
    data.lehrerPreisGatsbyImage.childImageSharp.gatsbyImageData;

  const stageContentArray = [
    {
      text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. `,
      title: `Unternehmenspreis 2022`,
      image: lehrerpreisImage,
    },
    {
      text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. `,
      title: `Hamburgs Bester Arbeitgeber`,
      image: famiImage,
    },
  ];
  return (
    <>
      <Seo title="Auszeichnungen" />
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
    famiSiegelGatsbyImage: file(
      relativePath: { eq: "content/wir_staerken_fami.jpeg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          blurredOptions: { width: 100 }
          transformOptions: { fit: COVER }
        )
      }
    }
    lehrerPreisGatsbyImage: file(
      relativePath: { eq: "content/auszeichnungen_lehrerpreis.png" }
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
