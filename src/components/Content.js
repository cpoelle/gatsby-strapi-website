import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Flex, Box, chakra } from "@chakra-ui/react";

export default function Content(data) {
  const {
    title = "",
    text = "",
    subTitle = "",
    closerText = "",
    image = null,
  } = data.content;
  return (
    <Flex direction={{ base: "column", lg: "row" }}>
      <Box
        width={{ base: "full", lg: "60%" }}
        py={{ base: 6, lg: 10 }}
        pr={{ lg: 10 }}
        order={{ base: 2, lg: 1 }}
      >
        {title !== "" ? (
          <chakra.h2
            fontSize={{ base: "28", sm: "32" }}
            fontWeight="bold"
            color={"brandBlue"}
            mb={{ base: "16px", lg: "32px" }}
          >
            {title}
          </chakra.h2>
        ) : null}

        {subTitle !== "" ? (
          <chakra.p mb={4} fontWeight="bold" color={"brandBlue"}>
            {subTitle}
          </chakra.p>
        ) : null}

        {text !== "" ? (
          <chakra.p dangerouslySetInnerHTML={{ __html: text }} mb={4} />
        ) : null}

        {closerText !== "" ? (
          <chakra.p
            dangerouslySetInnerHTML={{ __html: closerText }}
            mb={4}
            fontWeight="bold"
          />
        ) : null}
      </Box>

      {image !== null ? (
        <Box
          width={{ base: "full", lg: "40%" }}
          py={{ base: 6, lg: 10 }}
          order={{ base: 1, lg: 2 }}
        >
          <Box
            rounded={{ base: 0, lg: "lg" }}
            overflow={{ base: "auto", lg: "hidden" }}
            ml={{ base: "-16px", lg: "0" }}
            mr={{ base: "-16px", lg: "0" }}
            display={"flex"}
            justifyContent="center"
          >
            {image.publicURL !== undefined ? (
              <img
                src={image.publicURL}
                alt="Logo der Firma mit dem Slogan Lorem Ipsum"
              />
            ) : (
              <GatsbyImage image={getImage(image)} alt="" />
            )}
          </Box>
        </Box>
      ) : null}
    </Flex>
  );
}
