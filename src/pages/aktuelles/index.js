import React, { useState } from "react";
import Layout from "../../components/Layout";
import Teaser from "../../components/Teaser";
import Seo from "../../components/seo";

import { graphql } from "gatsby";
import {
  SimpleGrid,
  Box,
  chakra,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Collapse,
} from "@chakra-ui/react";

export default function Aktuelles({ data, pageContext, location }) {
  const bannerInfo = {
    title: "Title Aktuelles",
    subTitle: "Subtitle Aktuelles.",
  };

  const news = data.allStrapiNewsticker.nodes;
  const visibleNews = news.slice(0, 6);
  const hiddenNews = news.slice(6);
  const termine = data.allStrapiTermine.nodes;

  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <Seo title="Aktuelles" />
      <Layout
        pageContext={pageContext}
        location={location}
        bannerInfo={bannerInfo}
      >
        <Box my={{ base: 8, md: 10, lg: 15 }}>
          <chakra.h2
            fontSize={{ base: "28", sm: "32" }}
            fontWeight="bold"
            color={"brandBlue"}
          >
            News
          </chakra.h2>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {visibleNews.map((news, id) => (
              <Teaser key={id} news={news} />
            ))}
          </SimpleGrid>
        </Box>

        <Collapse in={show} animateOpacity>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {hiddenNews.map((news, id) => (
              <Teaser key={id} news={news} />
            ))}
          </SimpleGrid>
        </Collapse>

        <Box display="flex" justifyContent="center" pt={8}>
          <Button
            backgroundColor={"brandBlue"}
            _hover={{
              bg: "brandBlueHover",
            }}
            color="white"
            size="md"
            onClick={handleToggle}
          >
            {show ? "Weniger " : "Alle News"} anzeigen
          </Button>
        </Box>

        <Box
          my={{ base: 8, md: 10, lg: 32 }}
          w={{ base: "full", lg: "66%" }}
          id="termine"
        >
          <chakra.h2
            fontSize={{ base: "28", sm: "32" }}
            fontWeight="bold"
            color={"brandBlue"}
          >
            Termine
          </chakra.h2>
          <Accordion allowToggle direction="column" mt={{ base: 4, lg: 6 }}>
            {termine.map((termine, id) => (
              <AccordionItem
                key={id}
                border="none"
                bg="white"
                rounded="lg"
                shadow="lg"
                mb={6}
                _last={{ mb: 0 }}
                transition={"background .3s ease"}
              >
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        borderTopRadius="lg"
                        borderBottomRadius={isExpanded ? "none" : "lg"}
                        bg={isExpanded ? "brandBlue" : "white"}
                        color={isExpanded ? "white" : "black"}
                        _hover={{
                          bg: isExpanded ? "brandBlue" : "white",
                          color: isExpanded ? "white" : "black",
                        }}
                        px={2}
                        py={4}
                        border="1px solid"
                        borderColor="gray.200"
                      >
                        <Box flex="1" textAlign="left">
                          {termine.date} | {termine.title}
                        </Box>
                        <AccordionIcon fontSize="24px" />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>{termine.text}</AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Layout>
    </>
  );
}

export const query = graphql`
  query NewsQuery {
    allStrapiNewsticker(sort: { fields: [orderID, date], order: [ASC, DESC] }) {
      nodes {
        title
        subTitle
        date(formatString: "DD.MM.YYYY")
        badgeText
        badgeColor
        slug
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 400
                height: 300
                placeholder: BLURRED
                blurredOptions: { width: 100 }
                transformOptions: { fit: COVER }
              )
            }
          }
        }
      }
    }
    allStrapiTermine(sort: { fields: date, order: ASC }) {
      nodes {
        text
        title
        date(formatString: "DD.MM.YYYY")
      }
    }
  }
`;
