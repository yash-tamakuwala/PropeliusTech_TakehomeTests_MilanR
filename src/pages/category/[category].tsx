import { Identity } from "@/components/category";
import { MediumText, SmallText } from "@/components/common";
import { StatusTag } from "@/components/homePage";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { useStore } from "@/store/store";
import { titleCase } from "@/utils/text";
import HomeIcon from "../../assets/home.svg";
import Logo from "../../assets/logo.svg";
import RightArrowIcon from "../../assets/rightArrow.svg";
import { Categories } from "@/types/dummyApi";
import { CommonPageFooter } from "@/components/footer";

export default function Category() {
  const router = useRouter();
  const data = useStore((state) => state.data);

  const category = router.query.category as keyof Categories;
  const title = titleCase(category);
  const status: string = data?.categories?.[category]?.status || "";

  let compToRender = null;

  switch (category) {
    case "identity":
      compToRender = <Identity />;
      break;
    default:
      compToRender = "Only the identity category has been implemented.";
      break;
  }

  return (
    <>
      <Box paddingY={"25px"} background={"#ECECEC"}>
        <HStack justifyContent={"space-between"} paddingX={"16px"}>
          {/* breadcrumb */}
          <Breadcrumb separator={<RightArrowIcon />}>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <HomeIcon />
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink>
                <SmallText fontWeight={600} color={"#686868"}>
                  {title}
                </SmallText>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          {/* logo */}
          <Logo />
        </HStack>

        <Box marginTop={5} paddingX={4}>
          <Box background={"#ffffff"} padding={6} borderRadius={"12px"}>
            <HStack justifyContent={"space-between"}>
              <MediumText>{title}</MediumText>
              <StatusTag status={status} />
            </HStack>

            <HStack marginTop={"15px"} spacing={1}>
              <Box
                height={3}
                width={3}
                background={"#008350"}
                borderRadius={"100%"}
              ></Box>
              <SmallText fontWeight={500}>Verify Your {title}</SmallText>
            </HStack>
          </Box>
        </Box>

        {compToRender}
      </Box>
      <CommonPageFooter
        helperText="Questions? Call DriveTime"
        contactNumber={"branding.phone"}
        message="Your progress will be saved automatically."
      />
    </>
  );
}
