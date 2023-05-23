import { titleCase } from "@/utils/text";
import { Tag } from "@chakra-ui/react";

export const StatusTag = ({ status }: { status: string }) => {
  switch (status) {
    case "missing":
      return (
        <Tag colorScheme="red" borderRadius="15px">
          {titleCase(status)}
        </Tag>
      );

    default:
      return <Tag>{status}</Tag>;
  }
};
