import React from "react";
import {
  HeroTextContent,
  InnerWrapper,
  Section,
  Text,
  Title,
  YoutubeVideo,
} from "./HeroSection.styles";

export const HeroSection = () => (
  <main>
    <Section>
      <InnerWrapper>
        <HeroTextContent>
          <Title>Most important title on the page</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum ultricies, sem urna convallis metus, vel
            suscipit nibh lacus tincidunt ante
          </Text>
        </HeroTextContent>
        <YoutubeVideo>video</YoutubeVideo>
      </InnerWrapper>
    </Section>
  </main>
);
