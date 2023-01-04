import React, { useState } from "react";
import Seo from "../components/seo";
import Layout from "../components/Layout";
import {
  chakra,
  Box,
  SimpleGrid,
  GridItem,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  RadioGroup,
  Radio,
  VStack,
} from "@chakra-ui/react";

export default function Krankmeldung({ pageContext, location }) {
  const initialState = {
    first_name: "",
    last_name: "",
    course: "",
    person: "",
    reason: "",
  };

  const [newSickLeave, setNewSickLeave] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleInputChange = (e) => {
    const target = e.currentTarget;
    const value = target.value;
    const name = target.name;

    setNewSickLeave({ ...newSickLeave, [name]: value });
  };

  return (
    <>
      <Seo title="Krankmeldung" />
      <Layout pageContext={pageContext} location={location}>
        <chakra.h1 py={6} fontSize="3xl" fontWeight="bold" color="brandBlue">
          Krankmeldung
        </chakra.h1>
        <chakra.p py={2} mb={10} width={{ base: "100%", md: "60%" }}>
          Nutzen Sie bei einer Krankmeldung gerne unser Kontaktformular. Einfach
          ausfüllen und absenden. So sind die Lehrkräfte und das Schulbüro
          frühzeitig informiert.
        </chakra.p>
        <Box>
          <chakra.form
            method="POST"
            onSubmit={handleSubmit}
            shadow={{ md: "base" }}
            rounded={[null, "md"]}
            overflow={{ sm: "hidden" }}
            width={{ base: "100%", md: "60%" }}
          >
            <Stack px={4} py={5} p={[null, 6]} bg="white" spacing={6}>
              <SimpleGrid columns={1} spacing={6}>
                <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
                  <FormLabel
                    htmlFor="first_name"
                    fontSize="md"
                    fontWeight="bold"
                    color="gray.700"
                  >
                    Vorname
                  </FormLabel>
                  <Input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autoComplete="given-name"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    onChange={handleInputChange}
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
                  <FormLabel
                    htmlFor="last_name"
                    fontSize="md"
                    fontWeight="bold"
                    color="gray.700"
                  >
                    Nachname
                  </FormLabel>
                  <Input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
                  <FormLabel
                    htmlFor="course"
                    fontSize="md"
                    fontWeight="bold"
                    color="gray.700"
                  >
                    Klasse / Kurs
                  </FormLabel>
                  <Input
                    type="text"
                    name="course"
                    id="course"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    onChange={handleInputChange}
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
                  <FormLabel
                    htmlFor="person"
                    fontSize="md"
                    fontWeight="bold"
                    color="gray.700"
                  >
                    Wer meldete die Abwesenheit
                  </FormLabel>

                  <RadioGroup>
                    <VStack spacing="8px" alignItems="flex-start">
                      <Radio
                        onChange={handleInputChange}
                        name="person"
                        value="selbst"
                      >
                        Selbst
                      </Radio>
                      <Radio
                        name="person"
                        onChange={handleInputChange}
                        value="vater"
                      >
                        Vater
                      </Radio>
                      <Radio
                        name="person"
                        onChange={handleInputChange}
                        value="mutter"
                      >
                        Mutter
                      </Radio>
                      <Radio
                        name="person"
                        onChange={handleInputChange}
                        value="others"
                      >
                        Andere
                      </Radio>
                    </VStack>
                  </RadioGroup>
                </FormControl>
                <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
                  <FormLabel
                    htmlFor="reason"
                    fontSize="md"
                    fontWeight="bold"
                    color="gray.700"
                  >
                    Grund der Abwesenheit
                  </FormLabel>
                  <RadioGroup>
                    <VStack spacing="8px" alignItems="flex-start">
                      <Radio
                        name="reason"
                        onChange={handleInputChange}
                        value="verspaetung"
                      >
                        Verspätung
                      </Radio>
                      <Radio
                        name="reason"
                        onChange={handleInputChange}
                        value="krankheit"
                      >
                        Krankheit
                      </Radio>
                      <Radio
                        name="reason"
                        onChange={handleInputChange}
                        value="persoenlich"
                      >
                        Persönlicher Grund
                      </Radio>
                      <Radio
                        name="reason"
                        onChange={handleInputChange}
                        value="wetter"
                      >
                        Witterungsverhältnisse
                      </Radio>
                    </VStack>
                  </RadioGroup>
                </FormControl>
              </SimpleGrid>
            </Stack>
            <Box px={{ base: 4, sm: 6 }} py={3} bg="gray.50" textAlign="right">
              <Button
                type="submit"
                bg="brandBlue"
                color="white"
                _hover={{ bg: "brandBlueHover" }}
                _focus={{ shadow: "" }}
                fontWeight="md"
              >
                Absenden
              </Button>
            </Box>
          </chakra.form>
        </Box>
      </Layout>
    </>
  );
}
