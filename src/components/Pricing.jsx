import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  HStack,
  Icon,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { checkIcon } from "../icons/Icons";

const ListItem = (props) => {
  const { children } = props;
  return (
    <HStack as="li" spacing="20px">
      <Icon as={checkIcon} w="22px" h="22px" alignItems="start" />
      <Text textAlign={["left", "left", "center"]}>{children}</Text>
    </HStack>
  );
};

function Pricing() {
  const bg = useColorModeValue("white", "gray.500");
  const bg2 = useColorModeValue("#F0EAFB", "gray.600");
  const btn = useColorModeValue("purple", "gray");
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/premium");
    // console.log("click");
  };
  return (
    <Box mx="24px">
      <Box
        maxW="994px"
        m="auto"
        marginTop="-156px"
        borderRadius="12px"
        overflow="hidden"
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box bg={bg2} p="60px">
            <Box textAlign="center">
              <Text fontWeight="800" fontSize="24px">
                Premium PRO
              </Text>
              <Heading
                as="h2"
                fontWeight="800"
                fontSize={["48px", "48px", "60px"]}
                mt="16px"
              >
                $329
              </Heading>
              <Text mt="8px">billed just once</Text>
            </Box>
            <Box display="flex" alignItems="center">
              <Button
                onClick={handleClick}
                mt="24px"
                w="282px"
                h="51px"
                colorScheme={btn}
                size="lg"
              >
                Get Started
              </Button>
            </Box>
          </Box>
          <Box p="48px" fontSize="18px" bg={bg} textAlign="left">
            <Text>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="16px" pt="24px">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Pricing;
