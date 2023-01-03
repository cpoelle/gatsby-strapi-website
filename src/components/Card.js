import React, { useState } from "react"
import { chakra, Box, Flex } from "@chakra-ui/react"
import { Link } from "gatsby"

const Card = ({ cardInfo }) => {
  const [isShown, setIsShown] = useState(false)

  return (
    <Link
      to={cardInfo.url}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      position="relative"
    >
      <Flex
        w="full"
        alignItems="center"
        justifyContent="center"
        position="relative"
        h="full"
        maxH="380px"
      >
        <Box
          borderWidth="1px"
          d="flex"
          h={"full"}
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          rounded="lg"
          shadow="lg"
          overflow="hidden"
        >
          <Box
            bg={cardInfo.backgroundColor}
            color="white"
            h={"full"}
            w={"full"}
            px={6}
            py={8}
            align="center"
          >
            <img src={cardInfo.icon} alt="" style={{ height: "70px" }} />
            <chakra.h2 pt={4} fontSize="3xl" fontWeight="bold">
              {cardInfo.title}
            </chakra.h2>
          </Box>

          <chakra.p color="black" align="center" px={6} py={8} h={"full"}>
            {cardInfo.copy}
          </chakra.p>
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

export default Card
