import * as React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Form from "../components/form";

export default function Index() {
  return (
    <ChakraProvider>
      <Form />
    </ChakraProvider>
  );
}
