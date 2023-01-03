import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Flex, Box, chakra } from "@chakra-ui/react"

export default function NewsDetails({ data, pageContext, location }) {
  const { title, text, subTitle, date, image } = data.strapiNewsticker
  return (
    <Layout pageContext={pageContext} location={location}>
      <Flex direction={{ base: "column", lg: "row" }}>
        <Box
          width={{ base: "full", lg: "60%" }}
          py={{ base: 6, lg: 10 }}
          pr={{ lg: 10 }}
          order={{ base: 2, lg: 1 }}
        >
          {title !== undefined ? (
            <chakra.h2
              fontSize={{ base: "28", sm: "32" }}
              fontWeight="bold"
              color={"brandBlue"}
              mb={{ base: "16px", lg: "32px" }}
            >
              {title}
            </chakra.h2>
          ) : null}

          <chakra.p mb={4}>{date}</chakra.p>
          {{ subTitle } !== undefined ? (
            <chakra.p mb={4} fontWeight="bold" color={"brandBlue"}>
              {subTitle}
            </chakra.p>
          ) : null}

          <Box mb={4}>
            <ReactMarkdown className={"markdown"}>{text}</ReactMarkdown>
          </Box>
        </Box>
        <Box
          width={{ base: "full", lg: "40%" }}
          py={{ base: 6, lg: 10 }}
          order={{ base: 1, lg: 2 }}
        >
          <Box rounded="lg" overflow="hidden">
            {image[0] !== undefined ? (
              <GatsbyImage
                image={getImage(image[0].localFile)}
                style={{ width: "100%" }}
                alt={image[0].alternativeText ? image[0].alternativeText : ""}
              />
            ) : null}
          </Box>
        </Box>
      </Flex>
    </Layout>
  )
}

export const query = graphql`
  query NewsPage($slug: String) {
    strapiNewsticker(slug: { eq: $slug }) {
      title
      text
      subTitle
      date(formatString: "DD.MM.YYYY")
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              blurredOptions: { width: 100 }
              transformOptions: { fit: COVER }
            )
          }
        }
      }
    }
  }
`
