import { Branding } from "@/types/dummyApi";
import { HelperText, Link } from "../common";
import { Box } from "@chakra-ui/react";

export const TnC = ({ branding }: { branding: Branding }) => {
  return (
    <Box paddingX={6}>
      <HelperText textAlign="center">
        By proceeding, I agree to Ally Bank&apos;s{" "}
        <Link href={branding.privacy_link} targetNewWindow>
          <HelperText as="span" color="#008350" fontWeight={700}>
            GLBA Privacy Policy
          </HelperText>
        </Link>{" "}
        and{" "}
        <Link href={branding.terms_of_service_link} targetNewWindow>
          <HelperText as="span" color="#008350" fontWeight={700}>
            Terms of Use
          </HelperText>
        </Link>
        .
      </HelperText>
    </Box>
  );
};
