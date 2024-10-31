import { LinkProps } from "next/link";
import React from "react";
import { StyledLink } from "./linkButton.styles";

interface IProps extends LinkProps {
  children: React.ReactNode;
}

export const LinkButton = ({ children, ...props }: IProps) => (
  <StyledLink {...props}>{children}</StyledLink>
);
