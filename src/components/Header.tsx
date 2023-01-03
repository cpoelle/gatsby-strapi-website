import React from "react";
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Container,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  const data = useStaticQuery(graphql`
    query {
      headerLogo: file(relativePath: { eq: "placeholder-logo.svg" }) {
        publicURL
      }
    }
  `);

  const logo = data.headerLogo;

  return (
    <header>
      <Flex
        bg="#F9FAFB"
        color="gray.600"
        minH={"60px"}
        py={{ base: 2, lg: 4 }}
        px={{ base: 4 }}
        borderColor="gray.200"
        align={"center"}
        boxShadow="md"
      >
        <Flex
          flex={{ base: 1, lg: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", lg: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Container maxW={"6xl"}>
          <Flex flex={{ base: 1 }} justify={{ base: "center", lg: "start" }}>
            <Box maxH={{ base: 12, lg: 20 }}>
              <GatsbyLink to="/">
                <img
                  src={logo.publicURL}
                  style={{ maxHeight: "40px" }}
                  alt="Logo der Firma mit dem Slogan Lorem Ipsum"
                />
              </GatsbyLink>
            </Box>

            <Flex display={{ base: "none", lg: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
            <Flex align="center" ml={8}>
              <SearchIcon color={"brandBlue"} w={5} h={5} />
            </Flex>
          </Flex>
        </Container>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </header>
  );
}

const DesktopNav = () => {
  const linkColor = "brandBlue";
  const linkHoverColor = "brandBlueHover";
  const popoverContentBgColor = "white";

  return (
    <Stack direction={"row"} spacing={4} align={"center"}>
      {NAV_ITEMS.map((navItem) => (
        <Box
          key={navItem.label}
          position="relative"
          _hover={{
            _after: {
              content: '""',
              pos: "absolute",
              right: "0",
              bottom: "0",
              bg: "brandRed",
              h: "8px",
              w: "8px",
              rounded: "full",
            },
          }}
        >
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                as={GatsbyLink}
                p={2}
                to={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      as={GatsbyLink}
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{
        bg: "brandBlue",
        color: "gray.100",
      }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "white" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"white"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg="white" p={4} display={{ lg: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex justify={"space-between"} align={"center"}>
        <Flex
          py={2}
          as={GatsbyLink}
          to={href ?? "#"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text fontWeight={600} color="brandBlue">
            {label}
          </Text>
        </Flex>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor="gray.200"
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link as={GatsbyLink} key={child.label} py={2} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Aktuelles",
    href: "/aktuelles",
  },
  {
    label: "Für Interessenten",
    href: "/angebote",
    children: [
      {
        label: "Beratung",
        subLabel: "Wir beraten Sie persönlich und vertraulich",
        href: "/angebote/beratung",
      },
      {
        label: "Anmeldung",
        subLabel: "Hier erfahren Sie alles zum Anmeldeprozess",
        href: "/angebote/anmeldeprozess",
      },
      {
        label: "Arbeiten bei uns",
        subLabel: "Unsere offenen Stellenangebote finden Sie hier",
        href: "/angebote/stellenangebote",
      },
    ],
  },
  {
    label: "Bildungsangebote",
    href: "/bildungsangebote",
    children: [
      {
        label: "Orientierung",
        href: "/bildungsangebote/orientierung",
      },
      {
        label: "Beruf",
        href: "/bildungsangebote/beruf",
      },
      {
        label: "Schule",
        href: "/bildungsangebote/schule",
      },
    ],
  },
  {
    label: "Wir",
    href: "/wir",
    children: [
      {
        label: "Menschen",
        href: "/wir/menschen",
      },
      {
        label: "Leitbild",
        href: "/wir/leitbild",
      },
      {
        label: "Stärken",
        href: "/wir/staerken",
      },
    ],
  },
  {
    label: "Schulleben",
    href: "/schulleben",
    children: [
      {
        label: "Lernorte",
        href: "/schulleben/lernorte",
      },
      {
        label: "Projekte",
        href: "/schulleben/projekte",
      },
      {
        label: "Verpflegung",
        href: "/schulleben/verpflegung",
      },
    ],
  },
  {
    label: "Kontakt",
    href: "/kontakt",
  },
];
