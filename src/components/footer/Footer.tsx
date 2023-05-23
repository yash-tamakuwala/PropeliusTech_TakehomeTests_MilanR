import { VStack } from "@chakra-ui/react";
import { SmallText } from "../common";

// NOTE: Adjusted the spacing in the footer to ensure even spacing.

export const Footer = () => {
  return (
    <VStack background={"#161616"} paddingX={4} paddingY={5} spacing={2.5}>
      <SmallText color={"#C2C2C2"}>DriveTime Car Sales Company, LLC</SmallText>
      <SmallText color={"#EBEBEB"} fontWeight={700}>
        GLBA Privacy Policy | Terms of Service
      </SmallText>
      <SmallText color={"#C2C2C2"}>
        © Copyright Informed, Inc. 2023. All rights reserved.
      </SmallText>
    </VStack>
  );
};
