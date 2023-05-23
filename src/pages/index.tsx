import {
  Heading,
  HelperText,
  Link,
  MediumText,
  SubHeading,
} from "@/components/common";
import { CommonPageFooter } from "@/components/footer";
import { DummyApiType } from "@/types/dummyApi";
import { titleCase } from "@/utils/text";
import {
  Box,
  Card,
  CardBody,
  HStack,
  Image,
  Stack,
  Tag,
  VStack,
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";

const StatusTag = ({ status }: { status: string }) => {
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

export const getStaticProps: GetStaticProps<{
  data: DummyApiType;
}> = async () => {
  const res = await fetch(
    "https://6ca13a92-b734-44be-a3de-9e047346479a.mock.pstmn.io/applicant",
  );

  const data = (await res.json()) as DummyApiType;

  return { props: { data } };
};

export default function Home({ data }: { data: DummyApiType }) {
  const { vehicle_info, branding, categories } = data;
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack spacing={9} paddingY="63px">
        <VStack paddingX={6} textAlign="center" spacing={0}>
          <Box width="full" paddingX={4}>
            <Image src={vehicle_info.image_url} alt="vehicle_image" />
          </Box>

          <Heading paddingTop={2.5}>
            Help {branding.name} finalize your application
          </Heading>
          <SubHeading paddingTop={4}>
            Tap or click the cards below to verify the information needed by{" "}
            {branding.name}.
          </SubHeading>
        </VStack>

        <Box paddingX={4} paddingTop={"30px"}>
          {Object.entries(categories).map(([category, categoryDetail]) => (
            <Card
              key={category}
              boxShadow={"0px -8px 16px rgba(0, 0, 0, 0.15)"}
              paddingBottom={"30px"}
              marginTop={"-30px"}
              borderRadius={"12px"}
            >
              <CardBody>
                <HStack justifyContent="space-between">
                  <MediumText>{titleCase(category)}</MediumText>
                  <StatusTag status={categoryDetail.status as string} />
                </HStack>
              </CardBody>
            </Card>
          ))}
        </Box>

        <Box paddingX={6}>
          <HelperText textAlign="center">
            By proceeding, I agree to Ally Bank&apos;s{" "}
          </HelperText>

          <HelperText textAlign="center">
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
      </Stack>
      <CommonPageFooter
        helperText={`Questions? Call ${branding.name}.`}
        contactNumber={branding.phone}
        message="Your progress will be saved automatically."
      />
    </>
  );
}
