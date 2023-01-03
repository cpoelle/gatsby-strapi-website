import React from "react"
import { Box, SimpleGrid, Select, Button, FormLabel } from "@chakra-ui/react"

export default function Filter({
  children,
  originalData,
  setBildungsAngebote,
}) {
  function updateAngebote() {
    let unfilteredArr = originalData
    const specificationFilter = document.getElementById("filter-specification")
    const requirementFilter = document.getElementById("filter-requirements")
    const graduationFilter = document.getElementById("filter-graduation")

    let activeFilters = {
      fachrichtung: specificationFilter.value,
      eingangsvoraussetzung: requirementFilter.value,
      erreichbarer_abschluss: graduationFilter.value,
    }

    const filteredArr = unfilteredArr.filter(function (item) {
      for (var key in activeFilters) {
        if (activeFilters[key] !== "" && item[key] !== activeFilters[key]) {
          return false
        }
      }
      return true
    })

    setBildungsAngebote(filteredArr)
  }

  function resetAngebote() {
    setBildungsAngebote(originalData)

    let selectArr = Array.from(
      document.querySelectorAll("select[id^='filter-']")
    )

    selectArr.forEach(select => {
      select.firstChild.selected = true
    })
  }

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={6}
        my={{ base: 4, md: 8 }}
        alignItems="flex-end"
      >
        <Box>
          <FormLabel
            htmlFor="filter-specification"
            fontSize="sm"
            fontWeight="sm"
            color="gray.700"
          >
            Fachrichtung:
          </FormLabel>
          <Select mt={2} id={"filter-specification"} onChange={updateAngebote}>
            <option value="" defaultValue hidden>
              Wähle eine Option
            </option>
            <option value="">Alle</option>
            <option value="wirtschaft">Wirtschaft</option>
            <option value="sozialpaedagogik">Sozialpädagogik</option>
            <option value="metalltechnik">Metalltechnik</option>
            <option value="holztechnik">Holztechnik</option>
            <option value="fahrzeugtechnik">Fahrzeugtechnik</option>
            <option value="gesundheit">Gesundheit</option>
            <option value="pflege">Pflege</option>
            <option value="hauswirtschaft">Hauswirtschaft</option>
          </Select>
        </Box>

        <Box>
          <FormLabel
            htmlFor="filter-requirements"
            fontSize="sm"
            fontWeight="sm"
            color="gray.700"
          >
            Eingangsvoraussetzung:
          </FormLabel>

          <Select mt={2} id={"filter-requirements"} onChange={updateAngebote}>
            <option value="" defaultValue hidden>
              Wähle eine Option
            </option>
            <option value="">Alle</option>
            <option value="kein_schulabschluss">Kein Schulabschluss</option>
            <option value="hauptschulabschluss">Hauptschulabschluss</option>
            <option value="realschulabschluss">Realschulabschluss</option>
            <option value="erweiterter_sek">
              Erweiterter Sekundarabschluss I
            </option>
            <option value="fachhochschulreife">Fachhochschulreife</option>
            <option value="berufsabschluss">Berufsabschluss</option>
          </Select>
        </Box>

        <Box>
          <FormLabel
            htmlFor="filter-graduation"
            fontSize="sm"
            fontWeight="sm"
            color="gray.700"
          >
            Erreichbarer Abschluss:
          </FormLabel>
          <Select mt={2} id={"filter-graduation"} onChange={updateAngebote}>
            <option value="" defaultValue hidden>
              Wähle eine Option
            </option>
            <option value="">Alle</option>
            <option value="abitur">Abitur</option>
            <option value="fachhochschulreife">Fachhochschulreife</option>
            <option value="berufsabschluss">Berufsabschluss</option>
            <option value="erweiterter_sek">
              Erweiterter Sekundarabschluss I
            </option>
            <option value="realschulabschluss">Realschulabschluss</option>
            <option value="hauptschulabschluss">Hauptschulabschluss</option>
          </Select>
        </Box>

        <Button onClick={resetAngebote}>Filter zurücksetzen</Button>
      </SimpleGrid>
      <Box id={"filter-container"}>{children}</Box>
    </>
  )
}
