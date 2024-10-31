import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import {
  HeroTextContent,
  InnerWrapper,
  Section,
  Text,
  Title,
  YoutubeVideo,
} from "./HeroSection.styles";

const embedId = "dQw4w9WgXcQ";

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
          <LiteYouTubeEmbed id={embedId} title="123" />
        </YoutubeVideo>
      </InnerWrapper>
    </Section>
  </main>
);
