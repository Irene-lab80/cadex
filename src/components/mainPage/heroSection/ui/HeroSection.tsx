import React from "react";
import {
  HeroTextContent,
  InnerWrapper,
  Section,
  Text,
  Title,
  YoutubeVideo,
} from "./HeroSection.styles";
const embedId = "";
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
        <YoutubeVideo>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=RH5Qx-ix2qudBH5J"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullscreen
          ></iframe>
        </YoutubeVideo>
      </InnerWrapper>
    </Section>
  </main>
);
