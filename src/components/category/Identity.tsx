import { useStore } from "@/store/store";
import { Button, Stack } from "@chakra-ui/react";
import { Fragment } from "react";
import { LargeText, LogicalDivider, UploadFile } from "../common";

const combinatorialLogicLabelMapping: Record<string, string> = {
  any: "any",
  all: "all",
  one_or_more: "one or more",
};

const documentLabelMapping: Record<string, string> = {
  passport: "Passport",
  driver_license_front: "Driver’s License",
  state_id: "State ID",
};

export const Identity = () => {
  const data = useStore((state) => state.data);

  if (!data) return null;

  const {
    categories: { identity },
  } = data;

  const { combinatorial_logic, documents } = identity;

  return (
    <Stack padding={6} spacing={"35px"}>
      <LargeText>
        Upload{" "}
        <LargeText as="span" textDecoration="underline">
          {combinatorialLogicLabelMapping[combinatorial_logic]}
        </LargeText>{" "}
        of these documents
      </LargeText>

      <Stack spacing={8}>
        {Object.keys(documents).map((doc, i) => (
          <Fragment key={doc}>
            {i !== 0 ? <LogicalDivider type={combinatorial_logic} /> : null}
            <UploadFile label={documentLabelMapping[doc]} />
          </Fragment>
        ))}
      </Stack>

      <Button
        variant={"outline"}
        colorScheme="green"
        fontWeight={500}
        height={"50px"}
      >
        Skip for later
      </Button>
    </Stack>
  );
};
