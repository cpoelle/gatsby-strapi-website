import React, { useState } from "react";
import Seo from "../../components/seo";
import Layout from "../../components/Layout";
import Content from "../../components/Content";
import Filter from "../../components/Filter";
import LinkCard from "../../components/LinkCard";
import { SimpleGrid, chakra } from "@chakra-ui/react";
import { graphql } from "gatsby";

export default function Orientierung({ data, pageContext, location }) {
  const iconOrientierung = data.iconOrientierung.publicURL;
  const orientationImage =
    data.orientationGatsbyImage.childImageSharp.gatsbyImageData;

  const bannerInfo = {
    title: "Banner Orientierung",
    subTitle: "Hier steht ein Subtitle für das Orientierungsangebot.",
    color: "orientationColor",
    icon: iconOrientierung,
  };
  const stageContent = {
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <br/> <br/> Sie lernen in kleinen Ihren Bedürfnissen angepassten Lerngruppen.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
    image: orientationImage,
  };

  const [bildungsAngebote, setBildungsAngebote] = useState(
    data.allStrapiBildungsangebote.nodes
  );

  let originBa = data.allStrapiBildungsangebote.nodes;

  return (
    <>
      <Seo title="Orientierung" />
      <Layout
        pageContext={pageContext}
        location={location}
        bannerInfo={bannerInfo}
      >
        <Content content={stageContent} />
        <chakra.h2
          fontSize={{ base: "28", sm: "32" }}
          fontWeight="bold"
          color="brandBlue"
          mt={{ base: 14, md: 20 }}
          mb={{ base: 4, md: 8 }}
          w={{ base: "100%", md: "50%" }}
        >
          Übersicht
        </chakra.h2>
        <Filter
          originalData={originBa}
          setBildungsAngebote={setBildungsAngebote}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={6}
            mb={{ base: 16, md: 32 }}
          >
            {bildungsAngebote
              .filter(
                (angebot) =>
                  angebot.categories.find(
                    (item) => item.category === "Orientierung"
                  ) !== undefined
              )
              .map((angebot, id) => (
                <LinkCard
                  key={id}
                  cardInfo={angebot}
                  cardColor="orientationColor"
                  data-component="filter-item"
                  eingangsvoraussetzung={angebot.eingangsvoraussetzung}
                  erreichbarer_abschluss={angebot.erreichbarer_abschluss}
                  fachrichtung={angebot.fachrichtung}
                />
              ))}
          </SimpleGrid>
        </Filter>
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    allStrapiBildungsangebote {
      nodes {
        slug
        title
        id
        categories {
          category
        }
        eingangsvoraussetzung
        erreichbarer_abschluss
        fachrichtung
      }
    }
    orientationGatsbyImage: file(
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
    iconOrientierung: file(
      relativeDirectory: { eq: "icons" }
      name: { eq: "placeholder-icon" }
    ) {
      publicURL
    }
  }
`;
