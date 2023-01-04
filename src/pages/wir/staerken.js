import React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/Layout";
import Content from "../../components/Content";
import { graphql } from "gatsby";

export default function Staerken({ data, pageContext, location }) {
  // Replace Placeholder Image when implement real Project (see GraphQL Query at the bottom)

  const toleranzImage =
    data.toleranzGatsbyImage.childImageSharp.gatsbyImageData;
  const coachingImage =
    data.coachingGatsbyImage.childImageSharp.gatsbyImageData;
  const famiImage = data.famiGatsbyImage.childImageSharp.gatsbyImageData;

  const stageContentArray = [
    {
      text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br/><br/>
      <ul style="padding-inline-start: 18px;">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>`,
      title: `Title Stärke 1`,
      image: toleranzImage,
    },
    {
      text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      <br/><br/>
      Erfolg ist lernbar!`,
      title: `Title Stärke 2`,
      subTitle: `„Lorem ipsum dolor sit amet“`,
      image: coachingImage,
    },
    {
      text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
      title: `Title Stärke 3`,
      image: famiImage,
    },
  ];

  return (
    <>
      <Seo title="Stärken" />
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
    toleranzGatsbyImage: file(relativePath: { eq: "content/placeholder.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          blurredOptions: { width: 100 }
          transformOptions: { fit: COVER }
        )
      }
    }
    coachingGatsbyImage: file(relativePath: { eq: "content/placeholder.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          blurredOptions: { width: 100 }
          transformOptions: { fit: COVER }
        )
      }
    }
    famiGatsbyImage: file(relativePath: { eq: "content/placeholder.png" }) {
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
