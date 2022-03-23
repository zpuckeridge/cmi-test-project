import {
  Heading,
  HStack,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
} from "@chakra-ui/react";
import React from "react";

export default function Output(props) {
  return (
    <Stat mt={5}>
      <Heading my={2} as="h4" fontSize="20px">
        Output
      </Heading>
      <Stack
        p={4}
        borderWidth="3px"
        borderRadius="md"
        direction="column"
        align="flex-start"
      >
        <HStack>
          <StatLabel>Name: {props.name}</StatLabel>
          <StatLabel>Email: {props.email}</StatLabel>
          <StatLabel>Phone: {props.phone}</StatLabel>
        </HStack>
        <StatHelpText>Password: {props.Password}</StatHelpText>
      </Stack>
    </Stat>
  );
}
