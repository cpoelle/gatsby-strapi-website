import React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/Layout"
import { StaticQuery, graphql } from "gatsby"
import { chakra, Box, SimpleGrid } from "@chakra-ui/react"
import Person from "../../components/Person"

export default function Menschen({ pageContext, location }) {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allStrapiDepartments {
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
      `}
      render={data => (
        <>
          <Seo title="Menschen" />
          <Layout pageContext={pageContext} location={location}>
            <Box maxW={"6xl"} my={{ base: 4, sm: 8 }}>
              {data.allStrapiDepartments.nodes.map((department, i) => (
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
                    {data.allStrapiPersons.nodes
                      .filter(
                        person => person.kategorie === department.kategorie
                      )
                      .map((person, i) => (
                        <Person key={i} person={person} />
                      ))}
                  </SimpleGrid>
                </div>
              ))}
            </Box>
          </Layout>
        </>
      )}
    />
  )
}
