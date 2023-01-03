import React from "react";
import Layout from "../components/Layout";
import Content from "../components/Content";
import ReactMarkdown from "react-markdown";
import Person from "../components/Person";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  chakra,
  SimpleGrid,
  Link,
  Container,
  Button,
} from "@chakra-ui/react";
import {
  ChevronRightIcon,
  ExternalLinkIcon,
  DownloadIcon,
} from "@chakra-ui/icons";
import { Link as GatsbyLink } from "gatsby";

import "../styles/markdown.css";

import { graphql } from "gatsby";

export default function NewsDetails({ data, pageContext, location }) {
  const {
    title,
    bannerText,
    introText,
    person,
    subTitle,
    ba_mores,
    ba_profiles,
    ba_links,
    stagePicture,
  } = data.strapiBildungsangebote;

  const stageImage =
    stagePicture !== null
      ? stagePicture.localFile.childImageSharp.gatsbyImageData
      : data.workGatsbyImage.childImageSharp.gatsbyImageData;

  const bannerInfo = {
    title: bannerText,
    subTitle: subTitle,
    color: setBgColor(),
  };

  const iconAbschluss = data.iconAbschluss.publicURL;
  const iconModell = data.iconModell.publicURL;
  const iconBewerbung = data.iconBewerbung.publicURL;
  const iconPerspektive = data.iconPerspektive.publicURL;
  const iconDauer = data.iconDauer.publicURL;
  const iconZulassung = data.iconZulassung.publicURL;

  function getIcon(titleName) {
    switch (titleName) {
      case "Erforderlicher_Abschluss":
        return <img src={iconAbschluss} alt="" style={{ height: "60px" }} />;
      case "Modell":
        return <img src={iconModell} alt="" style={{ height: "60px" }} />;
      case "Bewerbung":
        return <img src={iconBewerbung} alt="" style={{ height: "60px" }} />;
      case "Perspektive":
        return <img src={iconPerspektive} alt="" style={{ height: "60px" }} />;
      case "Dauer":
        return <img src={iconDauer} alt="" style={{ height: "60px" }} />;
      case "Alternative_Zulassung":
        return <img src={iconZulassung} alt="" style={{ height: "60px" }} />;
      default:
        return null;
    }
  }

  function setBgColor() {
    if (window.location.href.indexOf("/orientierung/") > -1) {
      return "orientationColor";
    } else if (window.location.href.indexOf("/beruf/") > -1) {
      return "workColor";
    } else if (window.location.href.indexOf("/schule/") > -1) {
      return "schoolColor";
    }
  }

  function handleToggle(itemId) {
    const accordionButton = document.getElementById(itemId).firstChild;
    accordionButton.click();
  }

  return (
    <Layout
      pageContext={pageContext}
      location={location}
      bannerInfo={bannerInfo}
    >
      <Box mb={12}>
        <Content
          content={{ title: title, text: introText, image: stageImage }}
        />
        <GatsbyLink to="/angebote/anmeldung">
          <Button
            rightIcon={<ChevronRightIcon w={6} h={6} />}
            p="0"
            bg="none"
            _hover={{ color: setBgColor() }}
            justifyContent="space-between"
          >
            Jetzt anmelden
          </Button>
        </GatsbyLink>
      </Box>
      {ba_profiles.length > 0 ? (
        <Box
          bg={setBgColor()}
          w="100vw"
          position="relative"
          ml="-50vw"
          mb={{ base: 14, md: 20 }}
          left="50%"
        >
          <Container maxW={"6xl"} color={"white"} p="60px 16px">
            <chakra.h2
              fontSize={{ base: "28", sm: "32" }}
              fontWeight="bold"
              mb={{ base: 14, md: 20 }}
              w={{ base: "100%", md: "50%" }}
            >
              Kurzprofil
            </chakra.h2>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {ba_profiles.map((item, id) => (
                <Flex key={id} mb={{ base: 4 }}>
                  <Box minW="90px">{getIcon(item.title)}</Box>
                  <Box mb={{ base: 2, md: 4 }}>
                    <chakra.h2
                      fontSize={{ base: "24", sm: "28" }}
                      fontWeight="bold"
                      mb={{ base: 2, md: 4 }}
                    >
                      {item.title.replace("_", " ")}
                    </chakra.h2>
                    <Box mb={2}>
                      <ReactMarkdown className={"markdown"}>
                        {item.text}
                      </ReactMarkdown>
                    </Box>

                    {item.ba_more !== null ? (
                      <Link
                        href={"#more-" + item.ba_more}
                        textDecoration="underline"
                        onClick={() => {
                          handleToggle("more-" + item.ba_more);
                        }}
                      >
                        Weitere Infos
                      </Link>
                    ) : null}
                  </Box>
                </Flex>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      ) : null}

      <chakra.h2
        fontSize={{ base: "28", sm: "32" }}
        fontWeight="bold"
        color={"brandBlue"}
        mb={{ base: 4, md: 4 }}
        w={{ base: "100%", md: "50%" }}
      >
        Mehr erfahren
      </chakra.h2>

      {ba_mores.length > 0 ? (
        <Accordion allowToggle mb={{ base: 24, md: 32 }} w={{ base: "full" }}>
          {ba_mores.map((item, id) => (
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
                  <h2 id={"more-" + item.id}>
                    <AccordionButton
                      borderTopRadius="lg"
                      borderBottomRadius={isExpanded ? "none" : "lg"}
                      bg={isExpanded ? setBgColor() : "white"}
                      color={isExpanded ? "white" : "black"}
                      _hover={{
                        bg: isExpanded ? setBgColor() : "white",
                        color: isExpanded ? "white" : "black",
                      }}
                      p={4}
                      border="1px solid"
                      borderColor="gray.200"
                    >
                      <Box
                        flex="1"
                        textAlign="left"
                        fontWeight="bold"
                        fontSize={{ base: "16", sm: "20" }}
                      >
                        {item.title}
                      </Box>
                      <AccordionIcon fontSize="24px" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel p={{ base: 4, md: 6 }}>
                    <ReactMarkdown className={"markdown"}>
                      {item.text}
                    </ReactMarkdown>

                    {item.files.length > 0 ? (
                      <Flex direction={"column"}>
                        <chakra.p fontWeight="bold" my={2}>
                          Download:
                        </chakra.p>
                        {item.files.map((pdf, id) => (
                          <Link
                            key={id}
                            href={pdf.localFile.publicURL}
                            isExternal
                          >
                            {pdf.caption}
                            <DownloadIcon mx={2} />
                          </Link>
                        ))}
                      </Flex>
                    ) : null}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      ) : null}

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={6}
        my={{ base: 14, md: 16 }}
      >
        {ba_links.length > 0 ? (
          <Flex direction="column" mb={{ base: 4, md: 8 }}>
            <chakra.h2
              fontSize={{ base: "28", sm: "32" }}
              fontWeight="bold"
              color={"brandBlue"}
              mb={{ base: 2, md: 4 }}
              w={{ base: "100%", md: "50%" }}
            >
              Links
            </chakra.h2>
            {ba_links.map((link, id) => (
              <Link key={id} href={link.url} isExternal mb={4}>
                {link.title}
                <ExternalLinkIcon mx={2} />
              </Link>
            ))}
          </Flex>
        ) : null}

        {person ? (
          <Flex direction="column" mb={{ base: 4, md: 8 }}>
            <chakra.h2
              fontSize={{ base: "28", sm: "32" }}
              fontWeight="bold"
              color={"brandBlue"}
              mb={{ base: 2, md: 4 }}
            >
              Ansprechpartner/-in
            </chakra.h2>
            <Box>
              <Person person={person} />
            </Box>
          </Flex>
        ) : null}
      </SimpleGrid>
    </Layout>
  );
}

export const query = graphql`
  query bildungsangebotePage($slug: String) {
    iconAbschluss: file(
      relativeDirectory: { eq: "icons" }
      name: { eq: "placeholder-icon" }
    ) {
      publicURL
    }
    iconModell: file(
      relativeDirectory: { eq: "icons" }
      name: { eq: "placeholder-icon" }
    ) {
      publicURL
    }
    iconBewerbung: file(
      relativeDirectory: { eq: "icons" }
      name: { eq: "placeholder-icon" }
    ) {
      publicURL
    }
    iconPerspektive: file(
      relativeDirectory: { eq: "icons" }
      name: { eq: "placeholder-icon" }
    ) {
      publicURL
    }
    iconDauer: file(
      relativeDirectory: { eq: "icons" }
      name: { eq: "placeholder-icon" }
    ) {
      publicURL
    }
    iconZulassung: file(
      relativeDirectory: { eq: "icons" }
      name: { eq: "placeholder-icon" }
    ) {
      publicURL
    }
    workGatsbyImage: file(relativePath: { eq: "content/placeholder.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          blurredOptions: { width: 100 }
          transformOptions: { fit: COVER }
        )
      }
    }
    strapiBildungsangebote(slug: { eq: $slug }) {
      slug
      title
      bannerText
      introText
      subTitle
      stagePicture {
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
      ba_mores {
        id
        title
        text
        files {
          caption
          localFile {
            publicURL
          }
        }
      }
      ba_profiles {
        id
        title
        text
        ba_more
      }
      ba_links {
        title
        url
      }
      person {
        vorname
        telefon
        name
        mail
        funktion
        bild {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                transformOptions: { fit: COVER }
              )
            }
          }
        }
      }
    }
  }
`;
