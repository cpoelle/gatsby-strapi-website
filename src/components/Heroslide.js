import React, { useState, useEffect } from "react";
import { Text, Box, Flex, HStack, Stack } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const HeroSlide = () => {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-28px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "24px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "brandBlue",
    },
  };

  const data = useStaticQuery(graphql`
    query {
      allStrapiHeroslides(sort: { fields: orderID, order: ASC }) {
        nodes {
          title
          subTitle
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  transformOptions: { fit: COVER }
                )
              }
            }
          }
        }
      }
    }
  `);

  const slides = data.allStrapiHeroslides.nodes;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const SLIDES_INTERVAL_TIME = 8000;
  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Flex w="full" pos="relative" overflow="hidden">
        <Flex
          h={{ base: "350px", md: "500px", xl: "600px" }}
          w="full"
          {...carouselStyle}
        >
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <GatsbyImage
                image={getImage(slide.image[0].localFile)}
                style={{ height: "100%" }}
                alt={
                  slide.image[0].alternativeText
                    ? slide.image[0].alternativeText
                    : ""
                }
              />
              <Stack
                p="8px 12px"
                pos="absolute"
                bottom="24px"
                textAlign="center"
                align="center"
                w="full"
                mb="8"
                color="white"
              >
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "2xl", lg: "3xl" }}
                  maxW={{ base: "full", lg: "60%" }}
                >
                  {slide.title}
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "lg", lg: "xl" }}
                  maxW={{ base: "full", lg: "60%" }}
                >
                  {slide.subTitle}
                </Text>
              </Stack>
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "brandRed" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "brandRed" }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};
export default HeroSlide;
