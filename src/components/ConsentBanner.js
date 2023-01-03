import React from "react";
import CookieConsent from "react-cookie-consent";
import { BiCookie } from "react-icons/bi";
import { Flex, Box, chakra } from "@chakra-ui/react";
import { Link } from "gatsby";

export default function ConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Akzeptieren"
      declineButtonText="Cookies ablehnen"
      enableDeclineButton
      cookieName="gatsby-gdpr-google-analytics"
      style={{
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
        background: "#213b87",
      }}
      buttonStyle={{
        color: "#213b87",
        background: "white",
        fontSize: "14px",
        borderRadius: "5px",
      }}
      contentStyle={{
        flex: "auto",
        padding: "24px 16px",
        margin: "0",
      }}
      declineButtonStyle={{
        color: "white",
        textDecoration: "underline",
        background: "none",
        fontSize: "12px",
        borderRadius: "5px",
      }}
      overlay="true"
      expires={365}
    >
      <Flex direction="column" position="relative">
        <Box
          position="absolute"
          top="-24px"
          transform="translate(-50%, -50%)"
          left="50%"
          background="brandBlue"
          rounded="full"
          p={2}
        >
          <BiCookie size={32} />
        </Box>

        <chakra.p
          fontSize={{ base: "18px", md: "22px" }}
          fontWeight="bold"
          mb={2}
        >
          Cookies erlauben?
        </chakra.p>

        <chakra.p mb={2} fontSize={{ base: "14px" }}>
          Wir verwenden Cookies, um Ihnen ein optimales Webseiten-Erlebnis zu
          bieten. Dazu zählen Cookies, die für den Betrieb der Seite notwendig
          sind, sowie solche die zu Statistikzwecken genutzt werden. Mit Klick
          auf den Link "Cookies ablehnen" kannst du deine Einwilligung jederzeit
          ablehnen.
        </chakra.p>

        <chakra.p fontSize={{ base: "14px" }}>
          Schauen Sie für weitere Informationen in unser{" "}
          <Link
            style={{ textDecoration: "underline" }}
            to="/impressum"
            target="_blank"
            rel="noreferrer"
          >
            Impressum{" "}
          </Link>
          oder in unsere{" "}
          <Link style={{ textDecoration: "underline" }} to="/datenschutz">
            Informationen zum Datenschutz
          </Link>{" "}
          der XYZ GmbH.
        </chakra.p>
      </Flex>
    </CookieConsent>
  );
}
