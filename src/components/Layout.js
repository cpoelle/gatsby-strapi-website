import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import InsentiveBar from "./InsentiveBar"
import ConsentBanner from "./ConsentBanner"
import LegalBar from "./LegalBar"
import Heroslide from "../components/Heroslide"
import { Link, graphql, useStaticQuery } from "gatsby"

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  chakra,
  Flex,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"

import "../styles/typography.css"

export default function Layout({
  children,
  pageContext,
  isHome = false,
  bannerInfo,
}) {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const alert = useStaticQuery(graphql`
    query {
      allStrapiAlert(filter: { active: { eq: true } }) {
        nodes {
          id
        }
      }
    }
  `)

  const showAlert = alert.allStrapiAlert.nodes.length > 0

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <div>
      {showAlert ? <InsentiveBar /> : null}
      <Header />
      <main>
        {isHome ? (
          <Heroslide />
        ) : (
          <Box
            bg={
              bannerInfo !== undefined && bannerInfo.color !== undefined
                ? bannerInfo.color
                : "brandBlue"
            }
          >
            {bannerInfo !== undefined && (
              <Container
                maxW={"6xl"}
                px={5}
                py={{ base: 5, lg: 14 }}
                color={"white"}
              >
                <Flex display="flex" direction="row" align="center">
                  {bannerInfo.title !== undefined && (
                    <chakra.h1
                      fontSize={{ base: "32", sm: "48" }}
                      fontWeight="bold"
                    >
                      {bannerInfo.title}
                    </chakra.h1>
                  )}
                  {bannerInfo.icon !== undefined && (
                    <img
                      src={bannerInfo.icon}
                      alt=""
                      style={{
                        marginLeft: "24px",
                        height: "30px",
                      }}
                    />
                  )}
                </Flex>

                {bannerInfo.subTitle !== undefined && (
                  <chakra.p
                    fontSize={{ base: "18", sm: "22" }}
                    fontWeight={{ base: "normal", md: "bold" }}
                  >
                    {bannerInfo.subTitle}
                  </chakra.p>
                )}
              </Container>
            )}
          </Box>
        )}
        <Container maxW={"6xl"}>
          <Breadcrumb
            py={[2, 4]}
            separator={<ChevronRightIcon color="gray.500" />}
          >
            {crumbs.length > 1 &&
              crumbs.map(crumb => (
                <BreadcrumbItem key={crumb.crumbLabel}>
                  <BreadcrumbLink
                    as={Link}
                    to={crumb.pathname}
                    textTransform="capitalize"
                    fontSize="14px"
                  >
                    {crumb.crumbLabel}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              ))}
          </Breadcrumb>
        </Container>
        <Container maxW={"6xl"} mb={12}>
          {children}
        </Container>
      </main>
      <footer>
        <Footer />
        <LegalBar />
      </footer>
      <ConsentBanner />
    </div>
  )
}
