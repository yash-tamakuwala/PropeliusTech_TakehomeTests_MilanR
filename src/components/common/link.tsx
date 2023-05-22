import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { PropsWithChildren } from "react";

interface LinkProps extends PropsWithChildren<NextLinkProps> {
  targetNewWindow?: boolean;
}

export const Link = ({
  children,
  targetNewWindow,
  ...rest
}: LinkProps): JSX.Element => (
  <NextLink {...(targetNewWindow ? { target: "_blank" } : {})} {...rest}>
    {children}
  </NextLink>
);
