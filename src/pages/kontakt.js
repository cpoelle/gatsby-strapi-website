import React from "react";
import Seo from "../components/seo";
import Layout from "../components/Layout";
import { Flex, Box, chakra } from "@chakra-ui/react";

export default function Kontakt({ pageContext, location }) {
  const bannerInfo = {
    title: "Kontakt",
    subTitle: "Subtitle zum Kontakt",
  };

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

  return (
    <>
      <Seo title="Kontakt" />
      <Layout
        pageContext={pageContext}
        location={location}
        bannerInfo={bannerInfo}
      >
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
