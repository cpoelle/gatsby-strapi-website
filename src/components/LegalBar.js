import React from "react";
import { Box, Container, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Link } from "gatsby";

export default function InsentiveBar() {
  return (
    <Box bg={"brandBlue"} color={"white"}>
      <Container as={Stack} maxW={"6xl"} py={2}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr" }}
          spacing={{ base: 0, md: 8 }}
        >
          <Stack>
            <Text fontSize={"sm"}>© 2021 | XYZ GmbH</Text>
          </Stack>

          <Stack
            fontSize={"sm"}
            align={"flex-end"}
            direction="row"
            gridColumn="3"
          >
            <Link to="/impressum">Impressum</Link>
            <Text fontSize={"sm"}>|</Text>
            <Link to="/datenschutz">Datenschutz</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
