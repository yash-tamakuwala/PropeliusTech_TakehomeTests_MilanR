import { Text as ChakraText, TextProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const LargeText = ({
  children,
  ...props
}: PropsWithChildren<TextProps>) => (
  <ChakraText fontSize={{ base: "22px" }} fontWeight={600} {...props}>
    {children}
  </ChakraText>
);

export const MediumText = ({
  children,
  ...props
}: PropsWithChildren<TextProps>) => (
  <ChakraText fontSize={{ base: "18px" }} fontWeight={600} {...props}>
    {children}
  </ChakraText>
);

export const NormalText = ({
  children,
  ...props
}: PropsWithChildren<TextProps>) => (
  <ChakraText fontSize={{ base: "16px" }} fontWeight={400} {...props}>
    {children}
  </ChakraText>
);

export const SmallText = ({
  children,
  ...props
}: PropsWithChildren<TextProps>) => (
  <ChakraText fontSize={{ base: "13px" }} fontWeight={400} {...props}>
    {children}
  </ChakraText>
);

// ----- Custom text components from common text components -----
export const Heading = ({
  children,
  ...props
}: PropsWithChildren<TextProps>) => {
  return (
    <LargeText color="#222222" {...props}>
      {children}
    </LargeText>
  );
};

export const SubHeading = ({
  children,
  ...props
}: PropsWithChildren<TextProps>) => {
  return (
    <NormalText color="#222222" {...props}>
      {children}
    </NormalText>
  );
};

export const HelperText = ({
  children,
  ...props
}: PropsWithChildren<TextProps>) => {
  return (
    <NormalText color="#686868" {...props}>
      {children}
    </NormalText>
  );
};
