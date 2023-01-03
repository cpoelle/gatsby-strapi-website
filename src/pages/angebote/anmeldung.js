import React, { useState } from "react";
import Seo from "../../components/seo";
import Layout from "../../components/Layout";
import {
  chakra,
  Box,
  GridItem,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  RadioGroup,
  Radio,
  VStack,
  Select,
  Flex,
  Icon,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { graphql } from "gatsby";
import Dropzone from "react-dropzone";

export default function Anmeldung({ data, pageContext, location }) {
  const initialState = {
    first_name: "",
    last_name: "",
    date_of_birth: "",
    place_of_birth: "",
    gender: "",
    nationality: "",
    mother_tongue: "",
    street: "",
    postal_code: "",
    city: "",
    county: "",
    telephone: "",
    email_address: "",
    parent: "",
    parent_address: "",
    confession: "",
    inclusion: "",
    file: null,
  };

  let bildungsangebote = data.allStrapiBildungsangebote.nodes;

  const [newSignUp, setNewSignUp] = useState(initialState);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [alert, setAlert] = useState("");

  const fileMaxSize = 10000001;
  const acceptedFileType = "application/pdf";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newSignUp.file === null) {
      return setAlert(
        "Bitte laden Sie vor dem Absenden noch Ihre Bewerbungsunterlagen hoch."
      );
    }
  };
  const handleInputChange = (e) => {
    const target = e.currentTarget;
    const value = target.value;
    const name = target.name;

    setNewSignUp({ ...newSignUp, [name]: value });
  };

  const handleDrop = (files, rejectedFiles) => {
    if (files && files.length > 0) {
      setAlert("");
      setUploadedFiles(files);
      setNewSignUp({ ...newSignUp, file: files });
    }

    if (rejectedFiles && rejectedFiles.length > 0) {
      setUploadedFiles([]);
      const currentRejectedFile = rejectedFiles[0].file;
      const currentRejectedFileSize = currentRejectedFile.size;
      const currentRejectedFileType = currentRejectedFile.type;
      if (
        currentRejectedFileType !== acceptedFileType ||
        currentRejectedFileSize > fileMaxSize
      ) {
        setAlert(
          "Bitte beachten Sie, dass Sie ausschließlich PDF Dateien mit einer maximalen Größe von 10MB hochladen können."
        );
      }
    }
  };

  return (
    <>
      <Seo title="Anmeldeformular" />
      <Layout pageContext={pageContext} location={location}>
        <chakra.h1 py={6} fontSize="3xl" fontWeight="bold" color="brandBlue">
          Ihre Anmeldung bei der XYZ GmbH
        </chakra.h1>
        <chakra.p py={2} color="brandRed">
          Anmeldungen sind bis zum 20. Februar eines jeden Jahres einzureichen.
        </chakra.p>
        <chakra.p py={2}>Der Bewerbung sind beizulegen:</chakra.p>
        <UnorderedList>
          <ListItem>
            Lebenslauf (unterschrieben, aktuell und vollständig bis zur
            Anmeldung!)
          </ListItem>
          <ListItem>
            Kopie des letzten Zeugnisses ein Lichtbild (auf dem Anmeldebogen)
          </ListItem>
          <ListItem>
            ggf. ein Bewerbungsschreiben (für wichtige weitere Angaben - wenn
            vorhanden)
          </ListItem>
        </UnorderedList>
        <chakra.p py={2} mb={10}>
          Bitte reichen Sie die notwendigen Unterlagen digital über unser
          Anmeldeformular (siehe unten) ein.
        </chakra.p>

        <chakra.h2
          py={6}
          fontSize={{ base: "xl", md: "3xl" }}
          fontWeight="bold"
          color="brandBlue"
        >
          Anmeldeformular
        </chakra.h2>
        <Box>
          <chakra.form
            method="POST"
            onSubmit={handleSubmit}
            shadow={{ md: "base" }}
            rounded={[null, "md"]}
            overflow={{ sm: "hidden" }}
            width={{ base: "100%", md: "60%" }}
          >
            <Stack py={5} p={[null, 6]} bg="white" spacing={6}>
              <FormControl isRequired>
                <FormLabel
                  htmlFor="offer_choice"
                  fontSize="md"
                  fontWeight="bold"
                  color="gray.700"
                >
                  Ich melde mich für folgendes Angebot an:
                </FormLabel>
                {bildungsangebote.length > 0 ? (
                  <Select
                    id="offer_choice"
                    name="offer_choice"
                    placeholder="Bitte Bildungsangebot wählen"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    onChange={handleInputChange}
                  >
                    {bildungsangebote.map((angebot, id) => (
                      <option key={id}>{angebot.title}</option>
                    ))}
                  </Select>
                ) : null}
              </FormControl>

              <FormControl isRequired>
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

              <FormControl isRequired>
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
              <FormControl isRequired>
                <FormLabel
                  htmlFor="date_of_birth"
                  fontSize="md"
                  fontWeight="bold"
                  color="gray.700"
                >
                  Geburtsdatum
                </FormLabel>
                <Input
                  type="date"
                  name="date_of_birth"
                  id="date_of_birth"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel
                  htmlFor="place_of_birth"
                  fontSize="md"
                  fontWeight="bold"
                  color="gray.700"
                >
                  Geburtsort
                </FormLabel>
                <Input
                  type="text"
                  name="place_of_birth"
                  id="place_of_birth"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel
                  htmlFor="gender"
                  fontSize="md"
                  fontWeight="bold"
                  color="gray.700"
                >
                  Geschlecht
                </FormLabel>

                <RadioGroup>
                  <VStack spacing="8px" alignItems="flex-start">
                    <Radio
                      onChange={handleInputChange}
                      name="gender"
                      value="male"
                    >
                      Männlich
                    </Radio>
                    <Radio
                      onChange={handleInputChange}
                      name="gender"
                      value="female"
                    >
                      Weiblich
                    </Radio>
                    <Radio
                      name="gender"
                      onChange={handleInputChange}
                      value="divers"
                    >
                      Divers
                    </Radio>
                  </VStack>
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel
                  htmlFor="nationality"
                  fontSize="md"
                  fontWeight="bold"
                  color="gray.700"
                >
                  Nationalität
                </FormLabel>
                <Select
                  id="nationality"
                  name="nationality"
                  autoComplete="nationality"
                  placeholder="Bitte Nationalität wählen"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  onChange={handleInputChange}
                >
                  <option value="DE">Deutschland</option>
                  <option value="AT">Österreich</option>
                  <option value="CH">Schweiz</option>
                  <optgroup label="A">
                    <option value="AF">Afghanistan</option>
                    <option value="EG">Ägypten</option>
                    <option value="AX">Åland</option>
                    <option value="AL">Albanien</option>
                    <option value="AZ">Aserbaidschan</option>
                    <option value="ET">Äthiopien</option>
                    <option value="AU">Australien</option>
                  </optgroup>

                  <optgroup label="C">
                    <option value="EA">Ceuta, Melilla</option>
                    <option value="CL">Chile</option>
                    <option value="CN">Volksrepublik China</option>
                    <option value="CP">Clipperton</option>
                    <option value="CK">Cookinseln</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Côte d'Ivoire (Elfenbeinküste)</option>
                  </optgroup>
                  <optgroup label="D">
                    <option value="DK">Dänemark</option>
                    <option value="DE">Deutschland</option>
                    <option value="DG">Diego Garcia</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominikanische Republik</option>
                    <option value="DJ">Dschibuti</option>
                  </optgroup>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel
                  htmlFor="mother_tounge"
                  fontSize="md"
                  fontWeight="bold"
                  color="gray.700"
                >
                  Muttersprache
                </FormLabel>
                <Select
                  id="mother_tongue"
                  name="mother_tongue"
                  autoComplete="mother_tongue"
                  placeholder="Bitte Muttersprache wählen"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  onChange={handleInputChange}
                >
                  <option value="Deutsch">Deutsch</option>
                  <option value="Arabisch">Arabisch</option>

                  <option value="Sonstige">Sonstige</option>
                  <option value="Spanisch">Spanisch</option>
                  <option value="Sprache eines Staates ehem. Jugoslawien">
                    Sprache eines Staates ehem. Jugoslawien
                  </option>
                  <option value="Sprache eines Staates ehem. Sowjetunion">
                    Sprache eines Staates ehem. Sowjetunion
                  </option>
                  <option value="Türkisch">Türkisch</option>
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel
                  htmlFor="street"
                  fontSize="md"
                  fontWeight="bold"
                  color="gray.700"
                >
                  Straße
                </FormLabel>
                <Input
                  type="text"
                  name="street"
                  id="street"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel
                  htmlFor="postal_code"
                  fontSize="md"
                  fontWeight="bold"
                  color="gray.700"
                >
                  PLZ
                </FormLabel>
                <Input
                  type="text"
                  pattern="[0-9]{5}"
                  title="Bitte exakt 5 Ziffern eingeben!"
                  name="postal_code"
                  inputMode="numeric"
                  id="postal_code"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel
                  htmlFor="city"
                  fontSize="md"
                  fontWeight="bold"
                  color="gray.700"
                >
                  Ort
                </FormLabel>
                <Input
                  type="text"
                  name="city"
                  id="city"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel
                  htmlFor="county"
                  fontSize="md"
                  fontWeight="bold"
                  color="gray.700"
                >
                  Landkreis
                </FormLabel>
                <Select
                  id="county"
                  name="county"
                  autoComplete="county"
                  placeholder="Bitte Landkreis wählen"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  onChange={handleInputChange}
                >
                  <option value="LK Harburg">LK Harburg</option>
                  <option value="Baden-Württemberg">Baden-Württemberg</option>
                  <option value="Bayern">Bayern</option>
                  <option value="Berlin">Berlin</option>
                  <option value="Brandenburg">Brandenburg</option>
                  <option value="Bremen">Bremen</option>
                  <option value="Hamburg">Hamburg</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel
                  htmlFor="telephone"
                  fontSize="md"
                  fontWeight="bold"
                  color="gray.700"
                >
                  Telefon
                </FormLabel>
                <Input
                  type="tel"
                  name="telephone"
                  id="telephone"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel
                  htmlFor="mobile"
                  fontSize="md"
                  fontWeight="bold"
                  color="gray.700"
                >
                  Telefon
                </FormLabel>
                <Input
                  type="tel"
                  name="mobile"
                  id="mobile"
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
                  htmlFor="email_address"
                  fontSize="md"
                  fontWeight="bold"
                  color="gray.700"
                >
                  E-Mail
                </FormLabel>
                <Input
                  type="email"
                  name="email_address"
                  id="email_address"
                  autoComplete="email"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel
                  htmlFor="parent"
                  fontSize="md"
                  fontWeight="bold"
                  color="gray.700"
                >
                  Erziehungsberechtigte
                </FormLabel>
                <Input
                  type="text"
                  name="parent"
                  id="parent"
                  autoComplete="parent"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel
                  htmlFor="parent_address"
                  fontSize="md"
                  fontWeight="bold"
                  color="gray.700"
                >
                  Abweichende Anschrift
                </FormLabel>
                <Input
                  type="text"
                  name="parent_address"
                  id="parent_address"
                  autoComplete="parent_address"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel
                  htmlFor="confession"
                  fontSize="md"
                  fontWeight="bold"
                  color="gray.700"
                >
                  Konfession
                </FormLabel>
                <Select
                  id="confession"
                  name="confession"
                  autoComplete="confession"
                  placeholder="Bitte Konfession wählen"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  onChange={handleInputChange}
                >
                  <option value="ohne Angabe">ohne Angabe</option>
                  <option value="evangelisch">evangelisch</option>
                  <option value="katholisch">katholisch</option>
                  <option value="alevitisch">alevitisch</option>
                  <option value="islamisch">islamisch</option>
                  <option value="sonstige">sonstige</option>
                  <option value="ohne">ohne</option>
                </Select>
              </FormControl>

              <FormControl isRequired>
                <chakra.p my={4}>
                  Wir bieten Menschen mit Unterstützungsbedarf die inklusive
                  Beschulung an. Eine ausführliche und zielgerichtete Beratung
                  ist hier unabdingbar. Wir unterstützen Sie gerne.
                </chakra.p>
                <FormLabel
                  htmlFor="inclusion"
                  fontSize="md"
                  fontWeight="bold"
                  color="gray.700"
                >
                  Ich habe Unterstützungsbedarf
                </FormLabel>
                <RadioGroup>
                  <VStack spacing="8px" alignItems="flex-start">
                    <Radio
                      name="inclusion"
                      onChange={handleInputChange}
                      value="yes"
                    >
                      Ja
                    </Radio>
                    <Radio
                      name="inclusion"
                      onChange={handleInputChange}
                      value="no"
                    >
                      Nein
                    </Radio>
                  </VStack>
                </RadioGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontSize="md" fontWeight="bold" color="gray.700">
                  Bewerbungsunterlagen
                </FormLabel>
                <Dropzone
                  multiple={true}
                  maxSize={fileMaxSize}
                  onDrop={handleDrop}
                  accept={acceptedFileType}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                      <Flex
                        mt={1}
                        justify="center"
                        px={6}
                        pt={5}
                        pb={6}
                        borderWidth={2}
                        borderColor="gray.300"
                        borderStyle="dashed"
                        rounded="md"
                        cursor="pointer"
                      >
                        <Stack spacing={1} textAlign="center">
                          <Icon
                            mx="auto"
                            boxSize={12}
                            color="gray.400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </Icon>
                          <Flex
                            fontSize="sm"
                            color="gray.600"
                            alignItems="baseline"
                          >
                            <chakra.label
                              htmlFor="file-upload"
                              rounded="md"
                              fontSize="md"
                              color="brand.600"
                              pos="relative"
                              cursor="pointer"
                            >
                              Datei hochladen oder per drag and drop einfügen
                            </chakra.label>
                            <input {...getInputProps()} />
                          </Flex>

                          <Text fontSize="xs" color="gray.500">
                            Nur als PDF mit max 10MB
                          </Text>
                        </Stack>
                      </Flex>
                    </div>
                  )}
                </Dropzone>
                {alert !== "" ? (
                  <chakra.p mt={4} fontSize="md" color="brandRed">
                    {alert}
                  </chakra.p>
                ) : null}
                {uploadedFiles.length > 0 ? (
                  <Box mt={4}>
                    <chakra.span fontSize="md" color="brandBlue">
                      Upload erfolgreich:
                    </chakra.span>
                  </Box>
                ) : null}
                {uploadedFiles.map((file, id) => (
                  <chakra.p key={id}>{file.name}</chakra.p>
                ))}
              </FormControl>
            </Stack>
            <Box px={{ base: 4, md: 6 }} py={3} bg="gray.50" textAlign="right">
              <Button
                type="submit"
                bg="brandBlue"
                color="white"
                _hover={{ bg: "brandBlueHover" }}
                _focus={{ shadow: "" }}
                fontWeight="md"
              >
                Anmelden
              </Button>
            </Box>
          </chakra.form>
        </Box>
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    allStrapiBildungsangebote {
      nodes {
        slug
        title
        id
      }
    }
  }
`;
