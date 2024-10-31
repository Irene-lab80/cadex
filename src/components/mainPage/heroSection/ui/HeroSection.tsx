import React from "react";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
const LiteYouTubeEmbed = dynamic(() => import("react-lite-youtube-embed"));

import {
  HeroTextContent,
  InnerWrapper,
  Section,
  Text,
  Title,
  YoutubeVideo,
} from "./HeroSection.styles";
import dynamic from "next/dynamic";

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
          <LiteYouTubeEmbed id={embedId} title="Cool Title" />
        </YoutubeVideo>
      </InnerWrapper>
    </Section>
  </main>
);
