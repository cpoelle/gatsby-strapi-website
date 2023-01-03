import React, { useState } from "react"
import { chakra, Box, Flex } from "@chakra-ui/react"
import { Link } from "gatsby"
import { ChevronRightIcon } from "@chakra-ui/icons"

const LinkCard = ({ cardInfo, cardColor }) => {
  const [isShown, setIsShown] = useState(false)

  return (
    <Link
      to={
        "/bildungsangebote/" +
        cardInfo.categories[0].category.toLowerCase() +
        "/" +
        cardInfo.slug.toLowerCase()
      }
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      position="relative"
      role={"group"}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        position="relative"
        h="full"
      >
        <Box
          bg={cardColor}
          d="flex"
          p={5}
          flexDirection="row"
          color="white"
          alignItems="center"
          justifyContent="space-between"
          w="full"
          h="full"
          minH="80px"
          rounded="lg"
          shadow="lg"
          _groupHover={{
            bg: "white",
            color: cardColor,
          }}
          transition={"all .3s ease"}
        >
          <chakra.h2
            fontSize={"xl"}
            fontWeight="bold"
            wordwrap="break-word"
            maxW="100%"
          >
            {cardInfo.title}
          </chakra.h2>
          <Box>
            <ChevronRightIcon
              color={"white"}
              transition={"all .3s ease"}
              _groupHover={{ color: cardColor, transform: "translateX(10px)" }}
              w={8}
              h={8}
            />
          </Box>
        </Box>
        <Box
          bg="brandRed"
          h={5}
          w={5}
          position="absolute"
          bottom="-5px"
          right="-5px"
          borderRadius="50%"
          opacity={isShown ? "100%" : 0}
          transition={"opacity .15s ease-in-out"}
        ></Box>
      </Flex>
    </Link>
  )
}

export default LinkCard
