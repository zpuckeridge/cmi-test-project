import React, { useState } from "react";

import { StaticImage } from "gatsby-plugin-image";

import { useForm } from "react-hook-form";

import Warning from "../components/warning";
import Output from "../components/output";

import {
  Flex,
  FormControl,
  Input,
  Button,
  Select,
  FormLabel,
  Container,
  useColorModeValue,
  useToast,
  Heading,
  Stack,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";

export default function Form() {
  const toast = useToast();
  const [data, setData] = useState();

  // use react-hook-form to validate form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // on submit output data to console and display
  const onSubmit = (data) => {
    console.log(data);
    toast({
      title: "Form submitted!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setData(data);
  };

  return (
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction="column">
              <FormControl isRequired>
                <FormLabel htmlFor="fullname">Full Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Full Name"
                  {...register("fullname", {
                    required: "Please enter your full name",
                    minLength: 2,
                    maxLength: 80,
                  })}
                />
                {errors.fullname && (
                  <Warning title="Please enter your full name." />
                )}
              </FormControl>

              <FormControl isRequired marginTop="1rem">
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: "Please enter a valid email.",
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && (
                  <Warning title="Please enter a valid email." />
                )}
              </FormControl>

              <FormControl isRequired marginTop="1rem">
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <InputGroup>
                  <InputLeftAddon children="+61" />
                  <Input
                    type="number"
                    placeholder="Phone number"
                    {...register("phone", {
                      required: "Please enter a valid phone number.",
                      minLength: 10,
                      maxLength: 12,
                    })}
                  />
                </InputGroup>
                {errors.phone && (
                  <Warning title="Please enter a valid phone number." />
                )}
              </FormControl>

              <FormControl isRequired marginTop="1rem">
                <FormLabel htmlFor="date">Event Date</FormLabel>
                <Select
                  id="date"
                  placeholder="Choose your preferred date..."
                  {...register("date", {
                    required: "Please enter your preferred date.",
                  })}
                >
                  <option>Tuesday, May 24th, 2022</option>
                  <option>Wednesday, May 25th, 2022</option>
                  <option>Thursday, May 26th, 2022</option>
                </Select>
              </FormControl>

              <Button
                type="submit"
                marginTop="1rem"
                _hover={{
                  bg: "teal.500",
                  color: "white",
                }}
              >
                Register
              </Button>
            </Flex>
          </form>
          {data && (
            <Output
              name={data.fullname}
              email={data.email}
              phone={data.phone}
              date={data.date}
            />
          )}
        </Container>
      </Stack>
    </Flex>
  );
}
