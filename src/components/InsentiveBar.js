import React from "react"
import { Box, Flex } from "@chakra-ui/react"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function InsentiveBar() {
  const data = useStaticQuery(graphql`
    query {
      allStrapiAlert(filter: { active: { eq: true } }) {
        nodes {
          active
          text
          newsticker {
            slug
          }
        }
      }
    }
  `)

  const alert = data.allStrapiAlert.nodes[0]

  return (
    <Link to={"/aktuelles/" + alert.newsticker.slug}>
      <Box bg="brandRed" minH={"24px"} w={"full"}>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center" }}
          color="white"
          px={{ base: 4 }}
          py={{ base: 2 }}
          fontSize="sm"
        >
          <Box>{alert.text}</Box>
        </Flex>
      </Box>
    </Link>
  )
}
