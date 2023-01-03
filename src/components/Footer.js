import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby";

export default function LargeWithLogoLeft() {
  const data = useStaticQuery(graphql`
    query {
      footerLogo: file(relativePath: { eq: "placeholder-logo.svg" }) {
        publicURL
      }
    }
  `);

  const logo = data.footerLogo;

  return (
    <Box bg={"#F9FAFB"} color={"gray.700"}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <img
                src={logo.publicURL}
                alt="Logo der Firma mit dem Slogan Lorem Ipsum"
              />
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Über uns
            </Text>
            <Link
              as={GatsbyLink}
              _hover={{
                textDecoration: "underline",
              }}
              to="/angebote/beratung"
            >
              Beratung
            </Link>
            <Link
              as={GatsbyLink}
              _hover={{
                textDecoration: "underline",
              }}
              to="/bildungsangebote"
            >
              Bildung
            </Link>

            <Link
              as={GatsbyLink}
              _hover={{
                textDecoration: "underline",
              }}
              to="/auszeichnungen"
            >
              Auszeichnungen
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Folgen Sie uns
            </Text>
            <Box
              _hover={{
                textDecoration: "underline",
              }}
            >
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </Box>
            <Box
              _hover={{
                textDecoration: "underline",
              }}
            >
              {" "}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
