import styled from "styled-components";

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: var(--content-width);
  margin: 0 auto;
  background: var(--light-blue);

  @media (max-width: 1000px) {
    padding: 0 20px;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;

export const Section = styled.section`
  background: var(--light-blue);
  padding: 50px 0;

  @media (max-width: 1240px) {
    padding: 50px 20px;
  }
`;

export const HeroTextContent = styled.div`
  max-width: 450px;
`;

export const YoutubeVideo = styled.div`
  max-width: 450px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 56px;
  font-weight: 600;
`;

export const Text = styled.p`
  margin-top: 20px;
`;
