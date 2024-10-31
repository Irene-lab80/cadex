import Link from "next/link";
import React from "react";
import { Header as StyledHeader } from "./header.styles";
import { LinkButton } from "@/components/linkButton";
import { ROUTES } from "@/app/routes";

export const Header = () => {
  return (
    <StyledHeader>
      <Link href={ROUTES.HOME}>Some Company</Link>
      <LinkButton href={ROUTES.CONTACT}>Contact us</LinkButton>
    </StyledHeader>
  );
};
