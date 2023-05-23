import { Identity } from "@/components/category";
import { MediumText, SmallText } from "@/components/common";
import { StatusTag } from "@/components/homePage";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { CommonPageFooter } from "@/components/footer";
import { useStore } from "@/store/store";
import { Categories } from "@/types/dummyApi";
import { titleCase } from "@/utils/text";
import Head from "next/head";
import HomeIcon from "../../assets/home.svg";
import Logo from "../../assets/logo.svg";
import RightArrowIcon from "../../assets/rightArrow.svg";

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
      <Head>
        <title>Category</title>
        <meta name="description" content="Category" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        paddingTop={{ md: "148px" }}
        paddingBottom={{ md: "30px" }}
        backgroundImage={{ md: `url("/homePageBackground.svg")` }}
        __css={{ backgroundRepeatY: "no-repeat" }}
      >
        <Stack
          maxWidth={"645px"}
          borderRadius={"4px"}
          boxShadow={
            "0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)"
          }
          marginX={"auto"}
          paddingY={"25px"}
          background={"#ECECEC"}
          spacing={0}
        >
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

          <Box marginTop={5} paddingX={4} paddingTop={"19px"}>
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
        </Stack>
      </Box>
      <CommonPageFooter
        helperText="Questions? Call DriveTime"
        contactNumber={data?.branding.phone || ""}
        message="Your progress will be saved automatically."
      />
    </>
  );
}
