import { Divider, HStack } from "@chakra-ui/react";
import { HelperText } from "./text";

export const LogicalDivider = ({ type }: { type: string }) => {
  if (type === "all") return null;
  return (
    <HStack>
      <Divider borderColor={"#161616"} opacity={1} width={"full"} />;
      <HelperText color={"#161616"} fontWeight={700}>
        or
      </HelperText>
      <Divider borderColor={"#161616"} opacity={1} width={"full"} />;
    </HStack>
  );
};
