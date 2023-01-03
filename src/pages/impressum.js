import React from "react";
import Seo from "../components/seo";
import Layout from "../components/Layout";
import { Box, chakra } from "@chakra-ui/react";

export default function Impressum({ pageContext, location }) {
  return (
    <>
      <Seo title="Impressum" />
      <Layout pageContext={pageContext} location={location}>
        <Box>
          <chakra.h1
            fontSize={{ base: "28", sm: "32" }}
            fontWeight="bold"
            color={"brandBlue"}
            my={8}
          >
            Impressum
          </chakra.h1>
          <chakra.p mb={4} fontWeight="bold" color="brandBlue">
            Firma XYZ GmbH - Hamburg <br />
            Vertretungsberechtigter Unternehmer: Max Mustermann
          </chakra.p>
          <chakra.p mb={8}>
            Langer Weg 43 22763 Hamburg
            <br />
            <br />
            Telefon: +49 4000 1094-0 <br />
            Fax: +49 04000 1094-011 <br />
            <br />
            E-Mail: info(at)xyz-gmbh.de
            <br />
            Internet: www.xyz-gmbh.de
          </chakra.p>
          <chakra.p mb={8}>
            <chakra.span fontWeight="bold" color="brandBlue">
              Zuständige Aufsichtsbehörde:
            </chakra.span>
            <br />
            ABC Behörde <br />
            Abteilung Pinneberg <br />
            Auf der Hude 77 25421 Pinneberg <br />
            <br />
            Telefon: +49 4101 15-2222 <br />
            Fax: +49 4101 15-2910
            <br />
            <br />
            E-Mail abc(at)behoerde.de
            <br />
            Internet: www.abc-behoerde.de
          </chakra.p>
        </Box>
      </Layout>
    </>
  );
}
