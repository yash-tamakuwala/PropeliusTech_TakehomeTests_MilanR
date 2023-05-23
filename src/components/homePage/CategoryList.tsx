import { titleCase } from "@/utils/text";
import { Box, Card, CardBody, HStack } from "@chakra-ui/react";
import { Categories } from "../../types/dummyApi";
import { Link, MediumText } from "../common";
import { StatusTag } from "./StatusTag";

export const CategoryList = ({ categories }: { categories: Categories }) => {
  return (
    <Box paddingX={4} paddingTop={"30px"}>
      {Object.entries(categories).map(([category, categoryDetail]) => (
        <Card
          key={category}
          boxShadow={"0px -8px 16px rgba(0, 0, 0, 0.15)"}
          paddingBottom={"30px"}
          marginTop={"-30px"}
          borderRadius={"12px"}
        >
          <Link href={`/category/${category}`}>
            <CardBody padding={6}>
              <HStack justifyContent="space-between">
                <MediumText>
                  {category === "misc" ? "Other" : titleCase(category)}
                </MediumText>
                <StatusTag status={categoryDetail.status as string} />
              </HStack>
            </CardBody>
          </Link>
        </Card>
      ))}
    </Box>
  );
};
