import React from "react"
import { chakra, Box, Flex, Link } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Paragraph({ content }) {
  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Box
        bg="white"
        mx={{ md: 8 }}
        display={{ lg: "flex" }}
        maxW={{ md: "5xl" }}
        shadow={{ md: "lg" }}
        rounded={{ md: "lg" }}
        overflow={{ base: "initial", md: "hidden" }}
      >
        <Box
          width={{ base: "100vw", md: "100%", lg: "50%" }}
          position="relative"
          ml={{ base: "-50vw", md: 0 }}
          left={{ base: "50%", md: 0 }}
        >
          <Box>
            <GatsbyImage
              style={{ width: "100%" }}
              image={getImage(content.image[0].localFile)}
              alt={
                content.image[0].alternativeText
                  ? content.image[0].alternativeText
                  : ""
              }
            />
          </Box>
        </Box>

        <Box py={12} px={6} maxW={{ base: "xl", md: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h2
            fontSize={{ base: "2xl", lg: "3xl" }}
            color="gray.800"
            fontWeight="bold"
          >
            {content.title}
          </chakra.h2>
          <chakra.p mt={4} color="gray.600">
            {content.topStoryText ? content.topStoryText : content.subTitle}
          </chakra.p>

          <Box mt={8}>
            <Link
              as={GatsbyLink}
              bg="brandBlue"
              color="white"
              to={"/aktuelles/" + content.slug}
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{ bg: "brandBlueHover" }}
            >
              {content.buttonText}
            </Link>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}
