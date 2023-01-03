import React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/Layout";
import Content from "../../components/Content";
import { graphql } from "gatsby";
import {
  Box,
  chakra,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";

import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Anmeldeprozess({ data, pageContext, location }) {
  const stageImage = data.stageImage;

  const stageContent = {
    text: `Bis zum <b>20. Februar</b>  eines jeden Jahres müssen Sie sich bei der XBZ GmbH anmelden.
    Über den untenstehenden Link gelangen Sie zu unserem Anmeldeformular. Alle Einzelheiten zu unserem Anmeldeprozess finden Sie auf dieser Seite.`,
    title: `Ihre Anmeldung für ein Projekt
    `,

    image: stageImage,
  };

  const steps = [
    {
      title: "1. Anmeldung",
      subTitle: "Bis zum 20. Februar eines Jahres",
      text: "Sie melden sich bist zum 20. Februar eines Jahres mit den geforderten Unterlagen bei XYZ GmbH an.",
    },
    {
      title: "2. Zusage",
      subTitle: "Am Ende der Woche",
      text: "Nach erfolgreicher Prüfung Ihrer Anmeldung bekommen Sie am Ende der aktuellen Woche ein Zusageschreiben.",
    },
    {
      title: "3. Annahme",
      subTitle: "Zwei Wochen Später",
      text: "Sie entscheiden sich innerhalb von zwei Wochen für den Auftrag bei der XYZ GmbH und nehmen die Zussage mit der Rücksendung des Antwortschreibens an.",
    },
    {
      title: "4. Aufnahme",
      subTitle: "Erster Projekttag",
      text: "Wenn Sie zum ersten Projekttag alle Aufnahmevoraussetzungen erfüllen, werden Sie im System bestätigt.",
    },
  ];

  return (
    <>
      <Seo title="Anmeldeprozess" />
      <Layout pageContext={pageContext} location={location}>
        <Content content={stageContent} />
        <GatsbyLink to="/angebote/anmeldung">
          <Button
            rightIcon={<ChevronRightIcon w={6} h={6} />}
            p="0"
            bg="none"
            _hover="brandBlue"
            justifyContent="space-between"
          >
            Zum Anmeldeformular
          </Button>
        </GatsbyLink>
        <chakra.h2
          fontSize={{ base: "28", sm: "32" }}
          fontWeight="bold"
          color="brandBlue"
          my={{ base: 6, md: 10 }}
          w={{ base: "100%", md: "50%" }}
        >
          Unser Anmeldeprozess
        </chakra.h2>

        <Accordion allowToggle mb={{ base: 24, md: 32 }} w={{ base: "full" }}>
          {steps.map((step, id) => (
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
                      p={4}
                      border="1px solid"
                      borderColor="gray.200"
                    >
                      <Box flex="1" textAlign="left" fontWeight="bold">
                        {step.title}
                      </Box>
                      <AccordionIcon fontSize="24px" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel p={{ base: 4, md: 6 }}>
                    <Box mb={4}>
                      <chakra.span color="brandBlue" fontWeight="bold">
                        Wann?{" "}
                      </chakra.span>{" "}
                      {step.subTitle}
                    </Box>
                    <Box>
                      <chakra.span color="brandBlue" fontWeight="bold">
                        Was?{" "}
                      </chakra.span>{" "}
                      {step.text}
                    </Box>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    stageImage: file(relativePath: { eq: "placeholder-logo.svg" }) {
      publicURL
    }
  }
`;
