import React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/Layout";
import Content from "../../components/Content";
import Person from "../../components/Person";
import { graphql } from "gatsby";
import { chakra, Box, SimpleGrid } from "@chakra-ui/react";

export default function Beratung({ data, pageContext, location }) {
  // Replace Placeholder Image when implement real Project (see GraphQL Query at the bottom)
  const stageImage =
    data.angeboteBeratungGatsbyImage.childImageSharp.gatsbyImageData;

  const departments = data.allStrapiDepartments.nodes;

  const persons = data.allStrapiPersons.nodes;

  const stageContent = {
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.`,
    title: `Beratungsangebote der Schule`,
    closerText: `
    Wir beraten Sie persönlich und vertraulich. <br />
            Wir finden gemeinsam Ihren Weg. <br />
            Wir stärken und begleiten Sie.
    `,
    image: stageImage,
  };

  return (
    <>
      <Seo title="Beratung" />
      <Layout pageContext={pageContext} location={location}>
        <Content content={stageContent} />
        <Box maxW={"6xl"} my={{ base: 4, sm: 8 }}>
          {departments.map((department, i) => (
            <div key={i}>
              <chakra.h2
                fontSize={{ base: "28", sm: "32" }}
                fontWeight="bold"
                color={"brandBlue"}
                mb={{ base: "5", sm: "8" }}
              >
                {department.kategorie}
              </chakra.h2>
              <SimpleGrid
                columns={{ base: 1, sm: 2 }}
                spacing={{ base: 4, lg: 10 }}
                mb={{ base: 8, lg: 10 }}
                department={department.kategorie}
              >
                {persons
                  .filter((person) => person.kategorie === department.kategorie)
                  .map((person, i) => (
                    <Person key={i} person={person} />
                  ))}
              </SimpleGrid>
            </div>
          ))}
        </Box>
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    angeboteBeratungGatsbyImage: file(
      relativePath: { eq: "content/angebot_beratung.jpeg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          blurredOptions: { width: 100 }
          transformOptions: { fit: COVER }
        )
      }
    }
    allStrapiDepartments(
      filter: {
        kategorie: {
          in: ["Schullaufbahnberatung", "Inklusion", "Schulsozialarbeit"]
        }
      }
    ) {
      nodes {
        kategorie
        id
      }
    }
    allStrapiPersons {
      nodes {
        vorname
        name
        funktion
        telefon
        mail
        kategorie
        bild {
          url
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 200
                height: 200
                placeholder: BLURRED
                blurredOptions: { width: 100 }
                transformOptions: { fit: COVER }
              )
            }
          }
        }
      }
    }
  }
`;
