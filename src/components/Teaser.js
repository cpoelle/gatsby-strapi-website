import React from "react"
import { Box, Flex, Badge } from "@chakra-ui/react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Teaser = ({ news }) => {
  return (
    <Link to={"/aktuelles/" + news.slug}>
      <Flex
        w="full"
        alignItems="center"
        justifyContent="center"
        pt={{ base: 8, lg: 10 }}
        h="full"
      >
        <Box
          bg="white"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          overflow="hidden"
          h="full"
          maxW={{ base: "full", sm: "350", md: "full" }}
        >
          {news.image[0] !== undefined ? (
            <GatsbyImage
              image={getImage(news.image[0].localFile)}
              style={{ height: "300px", width: "100%" }}
              alt={
                news.image[0].alternativeText
                  ? news.image[0].alternativeText
                  : ""
              }
            />
          ) : (
            <Box h="300px" w="500px"></Box>
          )}

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge rounded="full" px="2" colorScheme={news.badgeColor}>
                {news.badgeText}
              </Badge>
            </Box>

            <Box
              fontSize="lg"
              mt={2}
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
            >
              {news.title}
            </Box>
            <Box mt={4} as="p" lineHeight="tight">
              {news.subTitle}
            </Box>
            <Box fontSize={"10"} mt={4}>
              {news.date}
            </Box>
          </Box>
        </Box>
      </Flex>
    </Link>
  )
}

export default Teaser
