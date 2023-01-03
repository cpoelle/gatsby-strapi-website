import React from "react"
import { chakra, Flex, Link } from "@chakra-ui/react"
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function User({ person }) {
  return (
    <Flex
      w="full"
      mx="auto"
      mb={{ base: 2, sm: 8 }}
      bg="primary"
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      direction={{ base: "column", lg: "row" }}
    >
      <GatsbyImage
        image={getImage(person.bild[0].localFile)}
        alt={
          person.bild[0].alternativeText ? person.bild[0].alternativeText : ""
        }
      />

      <Flex
        py={4}
        px={6}
        width={{ lg: 300 }}
        direction="column"
        justify="space-between"
      >
        <chakra.p fontSize="xl" fontWeight="bold" color="gray.800">
          {person.vorname + " " + person.name}
        </chakra.p>

        <chakra.p py={2} color="gray.700">
          {person.funktion}
        </chakra.p>

        <Flex alignItems="center" mt={4} color="gray.700">
          <PhoneIcon h={6} w={6} mr={2} />

          <Link href={"tel:" + person.telefon} px={2} fontSize="sm" isExternal>
            {person.telefon}
          </Link>
        </Flex>
        <Flex alignItems="center" mt={4} color="gray.700">
          <EmailIcon h={6} w={6} mr={2} />

          <Link
            href={"mailto:" + person.mail}
            px={2}
            fontSize="sm"
            color={"brandBlue"}
            isExternal
          >
            {person.mail}
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}
