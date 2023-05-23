import { HStack } from "@chakra-ui/react";
import CameraIcon from "../../assets/camera.svg";
import UploadIcon from "../../assets/upload.svg";
import { Text } from "./text";

export const UploadFile = ({ label }: { label: string }) => {
  return (
    <HStack
      justifyContent="space-between"
      paddingX={4}
      paddingY={"25.5px"}
      background={"#E6E6E6"}
      borderRadius={"12px"}
      border="2px dashed #D0D0D0"
    >
      <Text fontSize={"14px"} fontWeight={500}>
        {label}
      </Text>
      <HStack spacing={7}>
        <CameraIcon />
        <UploadIcon />
      </HStack>
    </HStack>
  );
};
