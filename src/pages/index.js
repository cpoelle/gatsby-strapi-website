import React from "react";
import Layout from "../components/Layout";
import Teaser from "../components/Teaser";
import Card from "../components/Card";
import Seo from "../components/seo";
import Paragraph from "../components/Paragraph";
import { Link, graphql } from "gatsby";
import { SimpleGrid, Flex, Box, chakra, Button, Icon } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  BsEnvelope,
  BsCalendar,
  BsPersonCheck,
  BsCardText,
} from "react-icons/bs";

export default function Home({ data, pageContext, location }) {
  // Replace Placeholder Icon when implement real Project (see GraphQL Query at the bottom)
  const iconSchule = data.iconSchule.publicURL;
  const iconBeruf = data.iconBeruf.publicURL;
  const iconOrientierung = data.iconOrientierung.publicURL;

  const topStory = data.allStrapiNewsticker.nodes[0];

  const cards = [
    {
      icon: iconOrientierung,
      title: "Orientierung",
      copy: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
      backgroundColor: "orientationColor",
      url: "/bildungsangebote/orientierung",
    },
    {
      icon: iconBeruf,
      title: "Beruf",
      copy: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      backgroundColor: "workColor",
      url: "/bildungsangebote/beruf",
    },
    {
      icon: iconSchule,
      title: "Schule",
      copy: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      backgroundColor: "schoolColor",
      url: "/bildungsangebote/schule",
    },
  ];

  const contacts = {
    name: "Firma XYZ GmbH Digital Technologies",
    street: "Langer Weg 43",
    plz: "22763",
    town: "Hamburg",
    telMain: "04000 1094-0",
    telSub: "04000 1094-01",
    faxMain: "04000 1094-011",
    faxSub: "04000 1094-044",
    mail: "info@xyz-gmbh.de",
  };

  const news = data.allStrapiNewsticker.nodes.slice(1, 4);

  return (
    <>
      <Seo title="Startseite" />
      <Layout pageContext={pageContext} location={location} isHome={true}>
        <Box my={{ base: "64px", md: "96px" }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
          >
            <Box w={{ base: "full", md: "50%" }} mb={8}>
              <chakra.h2
                fontSize={{ base: "28", sm: "48" }}
                fontWeight="bold"
                color={"brandBlue"}
                mb={4}
              >
                Willkommen
              </chakra.h2>
              <chakra.p mb={4} fontWeight="bold">
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </chakra.p>
              <chakra.p mb={4}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam{" "}
                <a
                  style={{ color: "brandBlue", textDecoration: "underline" }}
                  href="#bildungsangebote"
                >
                  hier
                </a>
                .
              </chakra.p>
            </Box>
            <Box
              bg={{ base: "brandBlue", md: "none" }}
              px={{ base: 4, md: 2 }}
              py={{ base: 8, md: 2 }}
              ml={{ base: "-16px", md: "0" }}
              mr={{ base: "-16px", md: "0" }}
              shadow={{ base: "lg", md: "none" }}
            >
              <chakra.h2
                fontSize={{ base: "16px", sm: "18px" }}
                fontWeight="bold"
                mb={4}
                color={{ base: "white", md: "black" }}
              >
                Quick Links
              </chakra.h2>

              <SimpleGrid
                columns={{ base: 1, sm: 2, md: 1 }}
                color="white"
                spacing={"4px"}
              >
                <Link to="/aktuelles#termine">
                  <Button
                    leftIcon={<BsCalendar />}
                    bg="none"
                    color={{ base: "white", md: "brandBlue" }}
                    _hover={{ color: "brandBlueHover" }}
                    justifyContent="space-between"
                  >
                    Termine
                  </Button>
                </Link>
                <Link to="/angebote/anmeldeprozess">
                  <Button
                    leftIcon={<BsPersonCheck />}
                    bg="none"
                    color={{ base: "white", md: "brandBlue" }}
                    _hover={{ color: "brandBlueHover" }}
                    justifyContent="space-between"
                  >
                    Anmeldung
                  </Button>
                </Link>
                <Link to="/bildungsangebote">
                  <Button
                    leftIcon={<BsCardText />}
                    bg="none"
                    color={{ base: "white", md: "brandBlue" }}
                    _hover={{ color: "brandBlueHover" }}
                    justifyContent="space-between"
                  >
                    Angebote
                  </Button>
                </Link>

                <Link to="/krankmeldung">
                  <Button
                    leftIcon={<BsEnvelope />}
                    bg="none"
                    color={{ base: "white", md: "brandBlue" }}
                    _hover={{ color: "brandBlueHover" }}
                    justifyContent="space-between"
                  >
                    Krankmeldung
                  </Button>
                </Link>
              </SimpleGrid>
            </Box>
          </Flex>
        </Box>

        <Box
          mb={{ base: "64px", md: "96px" }}
          py={{ base: 16, md: 32 }}
          backgroundImage={{
            base: "none",
            md: "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
          }}
          w="100vw"
          position="relative"
          ml="-50vw"
          left="50%"
        >
          <Paragraph content={topStory} />
        </Box>

        <Box mb={{ base: "64px", md: "96px" }}>
          <chakra.h2
            fontSize={{ base: "28", sm: "32" }}
            fontWeight="bold"
            color={"brandBlue"}
          >
            News
          </chakra.h2>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
            {news.map((news, id) => (
              <Teaser key={id} news={news} />
            ))}
          </SimpleGrid>

          <Link to={"/aktuelles"}>
            <Flex
              direction="row"
              justifyContent="space-between"
              maxW="350px"
              align="center"
              role={"group"}
              bg="brandBlue"
              color="white"
              my={8}
              mx={"auto"}
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              transition={"all .3s ease"}
              _hover={{ bg: "brandBlueHover" }}
            >
              <Box fontSize="16px">Weitere News finden Sie hier</Box>

              <Flex
                transition={"all .3s ease"}
                transform={{ lg: "translateX(0)" }}
                _groupHover={{
                  transform: "translateX(10px)",
                }}
                justify={"flex-end"}
                align={"center"}
              >
                <Icon w={6} h={6} as={ChevronRightIcon} />
              </Flex>
            </Flex>
          </Link>
        </Box>

        <Box id="bildungsangebote" mb={{ base: "64px", md: "96px" }}>
          <chakra.h2
            fontSize={{ base: "28", sm: "32" }}
            fontWeight="bold"
            color={"brandBlue"}
          >
            Unsere Angebote
          </chakra.h2>
          <chakra.p mb={{ base: 8, lg: 10 }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </chakra.p>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {cards.map((card, id) => (
              <Card key={id} cardInfo={card} />
            ))}
          </SimpleGrid>
        </Box>

        <Flex py={{ base: 12, lg: 14 }} justify="space-between" flexWrap="wrap">
          <Box
            flex="0 0 auto"
            w={{ base: "100%", md: "280px" }}
            h="230px"
            rounded="lg"
            shadow="lg"
            overflow="hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.9207289654746!2d9.979646131499337!3d53.54132961611541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f066770c44f%3A0xb2e4ab2a68984286!2sElbphilharmonie%20Hamburg!5e0!3m2!1sde!2sde!4v1672744988485!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Karte zum Standort der XYZ GmbH"
            ></iframe>
          </Box>

          <Flex
            fontSize="sm"
            w={{ base: "100%", sm: "calc(100% - 300px)" }}
            justify="flex-start"
            flexWrap="wrap"
            mt={{ base: 6, md: 0 }}
          >
            <Flex direction="column" minW="218px" mx={{ base: 0, md: 5 }}>
              <chakra.h3 fontSize="md" fontWeight="bold">
                Postanschrift:{" "}
              </chakra.h3>
              <chakra.p>{contacts.name}</chakra.p>
              <chakra.p>{contacts.street}</chakra.p>
              <chakra.p>{contacts.plz + " " + contacts.town}</chakra.p>
            </Flex>
            <Flex
              direction="column"
              minW="218px"
              mx={{ base: 0, md: 5 }}
              mt={{ base: 4, lg: 0 }}
            >
              <chakra.h3 fontSize="md" fontWeight="bold">
                Telefon:{" "}
              </chakra.h3>
              <chakra.p>{contacts.telMain + " (Hauptgebäude)"}</chakra.p>
              <chakra.p>{contacts.telSub + " (Nebengebäude)"}</chakra.p>
              <chakra.h3 mt={4} fontSize="md" fontWeight="bold">
                Telefax:{" "}
              </chakra.h3>
              <chakra.p>{contacts.faxMain + " (Hauptgebäude)"}</chakra.p>
              <chakra.p>{contacts.faxSub + " (Nebengebäude)"}</chakra.p>
            </Flex>

            <Flex
              direction="column"
              minW="218px"
              mx={{ base: 0, md: 5 }}
              mt={{ base: 4, lg: 0 }}
            >
              <chakra.h3 fontSize="md" fontWeight="bold">
                E-Mail:{" "}
              </chakra.h3>
              <chakra.p>{contacts.mail}</chakra.p>
            </Flex>
          </Flex>
        </Flex>
      </Layout>
    </>
  );
}

export const query = graphql`
  query HomePageQuery {
    allStrapiNewsticker(sort: { fields: orderID, order: ASC }) {
      nodes {
        title
        subTitle
        date(formatString: "DD.MM.YYYY")
        badgeText
        badgeColor
        buttonText
        topStoryText
        orderID
        slug
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
    iconSchule: file(
      relativeDirectory: { eq: "icons" }
      name: { eq: "placeholder-icon" }
    ) {
      publicURL
    }
    iconBeruf: file(
      relativeDirectory: { eq: "icons" }
      name: { eq: "placeholder-icon" }
    ) {
      publicURL
    }
    iconOrientierung: file(
      relativeDirectory: { eq: "icons" }
      name: { eq: "placeholder-icon" }
    ) {
      publicURL
    }
  }
`;
