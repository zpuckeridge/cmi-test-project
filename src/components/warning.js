import React from "react";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

export default function Warning(props) {
  return (
    <Alert borderRadius="lg" status="error" marginTop="0.5rem">
      <AlertIcon />
      <AlertTitle mr={2}>{props.title}</AlertTitle>
    </Alert>
  );
}
