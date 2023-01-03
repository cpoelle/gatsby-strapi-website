import React, { useState } from "react";
import Seo from "../../components/seo";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import LinkCard from "../../components/LinkCard";
import Filter from "../../components/Filter";
import Content from "../../components/Content";
import { SimpleGrid, Box, chakra } from "@chakra-ui/react";
import { graphql } from "gatsby";

export default function Bildungsangebote({ data, pageContext, location }) {
  // Placeholder Icon needs to be replaced with correct icons when implement real Project (see GraphQL Query at the bottom)
  const iconSchule = data.iconSchule.publicURL;
  const iconBeruf = data.iconBeruf.publicURL;
  const iconOrientierung = data.iconOrientierung.publicURL;
  const orientationImage =
    data.orientationGatsbyImage.childImageSharp.gatsbyImageData;

  const bannerInfo = {
    title: "Banner Angebote",
    subTitle: "Hier steht ein Subtitle zu den Angeboten der Firma.",
  };

  const stageContent = {
    title: "Titel Stage",
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
    image: orientationImage,
  };

  const cards = [
    {
      icon: iconOrientierung,
      title: "Orientierung",
      copy: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
      backgroundColor: "orientationColor",
      url: "/bildungsangebote/orientierung",
    },
    {
      icon: iconBeruf,
      title: "Beruf",
      copy: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      backgroundColor: "workColor",
      url: "/bildungsangebote/beruf",
    },
    {
      icon: iconSchule,
      title: "Schule",
      copy: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      backgroundColor: "schoolColor",
      url: "/bildungsangebote/schule",
    },
  ];

  const [bildungsAngebote, setBildungsAngebote] = useState(
    data.allStrapiBildungsangebote.nodes
  );

  let originBa = data.allStrapiBildungsangebote.nodes;

  return (
    <>
      <Seo title="Bildungsangebote" />
      <Layout
        pageContext={pageContext}
        location={location}
        bannerInfo={bannerInfo}
      >
        <Content content={stageContent} />
        <chakra.h2
          fontSize={{ base: "28", sm: "32" }}
          color="brandBlue"
          fontWeight="bold"
          mt={{ base: 14, md: 20 }}
          mb={{ base: 4, md: 8 }}
          w={{ base: "100%", md: "50%" }}
        >
          Übersicht:
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
            <Box>
              {cards
                .filter((angebot) => angebot.title === "Orientierung")
                .map((card, id) => (
                  <Card key={id} cardInfo={card} />
                ))}
              <Box pt={{ base: 8, md: 10 }} pb={{ base: 20, md: 16 }}>
                {bildungsAngebote
                  .filter(
                    (angebot) =>
                      angebot.categories.find(
                        (item) => item.category === "Orientierung"
                      ) !== undefined
                  )
                  .map((angebot, id) => (
                    <Box
                      data-component="filter-item"
                      key={id}
                      mb={4}
                      eingangsvoraussetzung={angebot.eingangsvoraussetzung}
                      erreichbarer_abschluss={angebot.erreichbarer_abschluss}
                      fachrichtung={angebot.fachrichtung}
                    >
                      <LinkCard
                        cardInfo={angebot}
                        cardColor="orientationColor"
                      />
                    </Box>
                  ))}
              </Box>
            </Box>
            <Box>
              {cards
                .filter((angebot) => angebot.title === "Beruf")
                .map((card, id) => (
                  <Card key={id} cardInfo={card} />
                ))}
              <Box pt={{ base: 8, md: 10 }} pb={{ base: 20, md: 16 }}>
                {bildungsAngebote
                  .filter(
                    (angebot) =>
                      angebot.categories.find(
                        (item) => item.category === "Beruf"
                      ) !== undefined
                  )
                  .map((angebot, id) => (
                    <Box
                      key={id}
                      mb={4}
                      data-component="filter-item"
                      eingangsvoraussetzung={angebot.eingangsvoraussetzung}
                      erreichbarer_abschluss={angebot.erreichbarer_abschluss}
                      fachrichtung={angebot.fachrichtung}
                    >
                      <LinkCard cardInfo={angebot} cardColor="workColor" />
                    </Box>
                  ))}
              </Box>
            </Box>
            <Box>
              {cards
                .filter((angebot) => angebot.title === "Schule")
                .map((card, id) => (
                  <Card key={id} cardInfo={card} />
                ))}
              <Box pt={{ base: 8, md: 10 }} pb={{ base: 20, md: 16 }}>
                {" "}
                {bildungsAngebote
                  .filter(
                    (angebot) =>
                      angebot.categories.find(
                        (item) => item.category === "Schule"
                      ) !== undefined
                  )
                  .map((angebot, id) => (
                    <Box
                      key={id}
                      mb={4}
                      data-component="filter-item"
                      eingangsvoraussetzung={angebot.eingangsvoraussetzung}
                      erreichbarer_abschluss={angebot.erreichbarer_abschluss}
                      fachrichtung={angebot.fachrichtung}
                    >
                      <LinkCard cardInfo={angebot} cardColor="schoolColor" />
                    </Box>
                  ))}
              </Box>
            </Box>
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
    iconSchule: file(
      relativeDirectory: { eq: "icons" }
      name: { eq: "placeholder-icon" }
    ) {
      publicURL
    }
    iconBeruf: file(
      relativeDirectory: { eq: "icons" }
      name: { eq: "placeholder-icon" }
    ) {
      publicURL
    }
    iconOrientierung: file(
      relativeDirectory: { eq: "icons" }
      name: { eq: "placeholder-icon" }
    ) {
      publicURL
    }
  }
`;
