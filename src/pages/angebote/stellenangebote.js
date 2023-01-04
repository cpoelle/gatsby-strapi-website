import React, { useState } from "react";
import Seo from "../../components/seo";
import Layout from "../../components/Layout";
import Content from "../../components/Content";
import Dropzone from "react-dropzone";
import { graphql } from "gatsby";
import {
  chakra,
  Box,
  SimpleGrid,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Text,
  Icon,
} from "@chakra-ui/react";

export default function Stellenangebote({ data, pageContext, location }) {
  // Replace Placeholder Images when implement real Project (see GraphQL Query at the bottom)
  const refImage = data.angeboteRefGatsbyImage.childImageSharp.gatsbyImageData;
  const internImage =
    data.angeboteInternGatsbyImage.childImageSharp.gatsbyImageData;

  const stageContentArray = [
    {
      text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
      title: `Lehrkraft im Vorbereitungsdienst`,
      image: refImage,
    },
    {
      text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
      title: `Praktikum im Studium`,
      image: internImage,
    },
  ];

  const initialState = {
    first_name: "",
    last_name: "",
    email_address: "",
    file: null,
  };

  const [newApplication, setNewApplication] = useState(initialState);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [alert, setAlert] = useState("");

  const fileMaxSize = 10000001;
  const acceptedFileType = "application/pdf";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newApplication.file === null) {
      return setAlert(
        "Bitte laden Sie vor dem Absenden noch Ihre Bewerbungsunterlagen hoch."
      );
    }

    console.log(newApplication);
  };
  const handleInputChange = (e) => {
    const target = e.currentTarget;
    const value = target.value;
    const name = target.name;

    setNewApplication({ ...newApplication, [name]: value });
  };

  const handleDrop = (files, rejectedFiles) => {
    if (files && files.length > 0) {
      setAlert("");
      setUploadedFiles(files);
      setNewApplication({ ...newApplication, file: files });
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
      <Seo title="Stellenangebote" />
      <Layout pageContext={pageContext} location={location}>
        {stageContentArray.map((stageContent, id) => (
          <Content key={id} content={stageContent} />
        ))}

        <chakra.h2
          px={4}
          py={6}
          mt={12}
          fontSize="3xl"
          fontWeight="bold"
          color="brandBlue"
          textAlign="center"
        >
          Haben Sie Interesse? Kontaktieren Sie uns gerne.
        </chakra.h2>
        <Flex align="center" justify="center">
          <chakra.form
            method="POST"
            shadow={{ md: "base" }}
            rounded={[null, "md"]}
            overflow={{ sm: "hidden" }}
            width={{ base: "100%", md: "60%" }}
            onSubmit={handleSubmit}
          >
            <Stack px={4} py={5} p={[null, 6]} bg="white" spacing={6}>
              <SimpleGrid columns={1} spacing={6}>
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
                </FormControl>
                {alert !== "" ? (
                  <chakra.p fontSize="md" color="brandRed">
                    {alert}
                  </chakra.p>
                ) : null}
                {uploadedFiles.length > 0 ? (
                  <Box>
                    <chakra.span fontSize="md" color="brandBlue">
                      Upload erfolgreich:
                    </chakra.span>
                  </Box>
                ) : null}
                {uploadedFiles.map((file, id) => (
                  <chakra.p key={id}>{file.name}</chakra.p>
                ))}
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
        </Flex>
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    angeboteRefGatsbyImage: file(
      relativePath: { eq: "content/angebot_stelle_ref.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, height: 320, placeholder: BLURRED)
      }
    }
    angeboteInternGatsbyImage: file(
      relativePath: { eq: "content/angebot_stelle_intern.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, height: 300, placeholder: BLURRED)
      }
    }
  }
`;
