import { Box, VStack } from "@chakra-ui/react";
import { HelperText } from "../common";

// NOTE: Adjusted the spacing in the CommonPageFooter to ensure even spacing.

export const CommonPageFooter = ({
  helperText,
  contactNumber,
  message,
}: {
  helperText: string;
  contactNumber: string;
  message: string;
}) => {
  return (
    <Box>
      <Box background="#E3E3E3" height="9px"></Box>
      <VStack
        textAlign="center"
        spacing={0}
        padding={6}
        background={{ base: "#E3E3E3", md: "#F7F7F7" }}
      >
        <HelperText>{helperText}</HelperText>
        <HelperText color="#008350" fontWeight={700}>
          {contactNumber}
        </HelperText>
        <HelperText paddingTop={4}>{message}</HelperText>
      </VStack>
    </Box>
  );
};
