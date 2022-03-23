import React from "react";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

export default function UpdateNotice (props) {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>{props.title}</AlertTitle>
    </Alert>
  );
}