import { extendTheme } from "@chakra-ui/react"
const theme = {
  colors: {
    brandBlue: "#213b87",
    brandBlueHover: "#11245c",
    brandRed: "#d51317",
    brandRedHover: "#9c0b0e",
    orientationColor: "#17739e",
    workColor: "#9d1345",
    schoolColor: "#35a795",
  },
  fonts: {
    body: "Ubuntu, Helvetica, Arial, sans-serif",
    heading: "Ubuntu, Helvetica, Arial, sans-serif",
    mono: "Ubuntu, Helvetica, Arial, sans-serif",
  },
}

export default extendTheme(theme)
