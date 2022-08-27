import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  useColorMode,
  Circle,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue("#F7FAFC", "gray.300");
  return (
    <Box
      as="section"
      bg="#6B46C1"
      color={textColor}
      pt="90px"
      pb="198px"
      px="32px"
      textAlign={["left", "left", "center"]}
    >
      <Heading fontWeight="800" fontSize={["30px", "30px", "48px"]}>
        Simple pricing for your business
      </Heading>
      <Text fontWeight="500" fontSize={["18px", "18px", "24px"]} pt="16px">
        Plans that are carefully crafted to suit your business.
      </Text>
      <Box pos="absolute" top="0" right="20px">
        <IconButton
          colorScheme="#6B46C1"
          icon={
            colorMode === "light" ? (
              <FaMoon color="black" />
            ) : (
              <FaSun color="white" />
            )
          }
          onClick={toggleColorMode}
          size="lg"
        ></IconButton>
      </Box>
    </Box>
  );
}

export default Header;
