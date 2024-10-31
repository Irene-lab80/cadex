import React from "react";

import {
  ButtonWrapper,
  Grid,
  InnerWrapper,
  Section,
  Text,
  Title,
} from "./aboutUsSection.styles";
import { LinkButton } from "@/components/linkButton";
import { ROUTES } from "@/app/routes";
import { mockData } from "../utils/mock";

export const AboutUsSection = () => (
  <main>
    <Section>
      <InnerWrapper>
        <Title>Also very important title</Title>
        <Grid>
          {mockData.map((el) => (
            <div key={el.id}>
              <h4>{el.title}</h4>
              <Text>{el.text}</Text>
            </div>
          ))}
        </Grid>
        <ButtonWrapper>
          <LinkButton href={ROUTES.CONTACT}>Contact us</LinkButton>
        </ButtonWrapper>
      </InnerWrapper>
    </Section>
  </main>
);
