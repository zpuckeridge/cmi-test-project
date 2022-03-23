import * as React from "react";

import { StaticImage } from 'gatsby-plugin-image'

// import chakra-ui components
import {
  Flex,
  FormControl,
  Input,
  Button,
  Select,
  FormLabel,
  Container,
  useColorModeValue,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

// build the form
const IndexPage = () => {
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"xxl"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Event: Mammoths - A Deep Dive
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Register for the greatest event yet! ✌️
            </Text>
            <StaticImage
                  src="../images/wolly-mammoth.webp"
                  alt="Wolly Mammoth"
                  placeholder="blurred"
                  layout="fixed"
                  width={200}
                  quality={100}
                  height={200}
                  style={{ borderRadius: `10px` }}
                />
          </Stack>
          <Container
            border="1px"
            boxShadow="xl"
            p="8"
            align="center"
            justify="center"
            borderRadius="lg"
            borderColor={useColorModeValue("gray.200", "gray.700")}
            bg={useColorModeValue("white", "gray.700")}
          >
            <Flex
              as="form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
              direction="column"
            >
              <FormControl isRequired>
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <Input id="name" placeholder="Full Name" />
              </FormControl>
              <FormControl isRequired marginTop="1rem">
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" placeholder="Email" />
              </FormControl>
              <FormControl isRequired marginTop="1rem">
                <FormLabel htmlFor="message">Phone Number</FormLabel>
                <Input id="message" placeholder="Phone Number" />
              </FormControl>
              <FormControl isRequired marginTop="1rem">
                <FormLabel htmlFor="subject">Event Date</FormLabel>
                <Select
                  id="subject"
                  placeholder="Choose your preferred date..."
                >
                  <option>Tuesday, May 24th, 2022</option>
                  <option>Wednesday, May 25th, 2022</option>
                  <option>Thursday, May 26th, 2022</option>
                </Select>
              </FormControl>
              <Button type="submit" marginTop="1rem">
                Submit
              </Button>
            </Flex>
          </Container>
        </Stack>
      </Flex>
    </>
  );
};

export default IndexPage;
