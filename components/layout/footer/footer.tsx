import { Box, Stack, Text } from "@chakra-ui/react";
import * as React from "react";
import styles from "./footer.module.css";

const Footer = () => (
  <div className={styles.container}>
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="12"
      px={{ base: "4", md: "8" }}
    >
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Testats. All rights reserved.
        </Text>
      </Stack>
    </Box>
  </div>
);

export default Footer;
