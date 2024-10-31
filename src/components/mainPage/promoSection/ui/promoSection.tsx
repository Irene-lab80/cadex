import React from "react";

import {
  ButtonWrapper,
  InnerWrapper,
  Section,
  Title,
} from "./promoSection.styles";
import { LinkButton } from "@/components/linkButton";
import { ROUTES } from "@/app/routes";

export const PromoSection = () => (
  <main>
    <Section>
      <InnerWrapper>
        <Title>Less important title</Title>
        <ButtonWrapper>
          <LinkButton href={ROUTES.CONTACT}>Contact us</LinkButton>
        </ButtonWrapper>
      </InnerWrapper>
    </Section>
  </main>
);
