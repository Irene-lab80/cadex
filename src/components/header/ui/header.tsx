import React from "react";
import { Header as StyledHeader, StyledLink } from "./header.styles";
import { LinkButton } from "@/components/linkButton";
import { ROUTES } from "@/app/routes";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLink href={ROUTES.HOME}>Some Company</StyledLink>
      <LinkButton href={ROUTES.CONTACT}>Contact us</LinkButton>
    </StyledHeader>
  );
};
