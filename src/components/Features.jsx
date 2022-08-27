import React from "react";
import { HStack, Text, Icon, Box, Stack } from "@chakra-ui/react";
import {
  moneyBackIcon,
  hassleFreeIcon,
  monthlySubscriptionIcon,
} from "../icons/Icons";

function Feature(props) {
  const { icon, children } = props;
  return (
    <HStack spacing="24px">
      <Icon as={icon} boxSize="48px" />
      <Text textAlign="left" fontSize="18px" fontWeight="700">
        {children}
      </Text>
    </HStack>
  );
}

function Features() {
  return (
    <Box maxW="1024px" m="auto" pt="57px" pb="103px">
      <Stack px="48px" spacing="25px" direction={["column", "column", "row"]}>
        <Feature icon={moneyBackIcon}>30 days money back Guarantee</Feature>
        <Feature icon={hassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={monthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
}

export default Features;
