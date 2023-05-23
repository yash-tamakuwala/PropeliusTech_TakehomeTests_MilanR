import { Heading, SubHeading } from "@/components/common";
import { CommonPageFooter } from "@/components/footer";
import { CategoryList } from "@/components/homePage";
import { TnC } from "@/components/homePage/TnC";
import { useStore } from "@/store/store";
import { DummyApiType } from "@/types/dummyApi";
import { getData } from "@/utils/api";
import { Box, Image, Stack, VStack } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps<{
  data: DummyApiType;
}> = async () => {
  const data = await getData();
  return { props: { data } };
};

export default function Home({ data }: { data: DummyApiType }) {
  const { vehicle_info, branding, categories } = data;

  // Set the data in the Zustand store
  const setData = useStore((state) => state.setData);
  setData(data);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NOTE:  The background image couldn't be extracted from Figma, so a dummy image has been added here. */}
      <Box
        paddingTop={{ md: "148px" }}
        paddingBottom={{ md: "30px" }}
        backgroundImage={{ md: `url("./homePageBackground.svg")` }}
        __css={{ backgroundRepeatY: "no-repeat" }}
      >
        <Stack
          spacing={{ base: 9, md: "25px" }}
          paddingY={{ base: "63px", md: "14px" }}
          maxWidth={"645px"}
          borderRadius={"4px"}
          boxShadow={
            "0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)"
          }
          marginX={"auto"}
          background={"#ECECEC"}
        >
          <VStack paddingX={6} textAlign="center" spacing={0}>
            <Box width="full" paddingX={4}>
              <Image
                src={vehicle_info.image_url}
                alt="vehicle_image"
                maxHeight={"320px"}
                marginX={"auto"}
              />
            </Box>

            <Heading paddingTop={2.5}>
              Help {branding.name} finalize your application
            </Heading>
            <SubHeading paddingTop={4}>
              Tap or click the cards below to verify the information needed by{" "}
              {branding.name}.
            </SubHeading>
          </VStack>

          <CategoryList categories={categories} />
          <TnC branding={branding} />
        </Stack>
      </Box>
      <CommonPageFooter
        helperText={`Questions? Call ${branding.name}.`}
        contactNumber={branding.phone}
        message="Your progress will be saved automatically."
      />
    </>
  );
}
