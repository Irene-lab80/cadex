import styled from "styled-components";

export const InnerWrapper = styled.div`
  max-width: var(--content-width);
  margin: 0 auto;

  @media (max-width: 1240px) {
    padding: 0 20px;
  }
`;

export const Section = styled.section`
  padding: 50px 0;

  @media (max-width: 1240px) {
    padding: 50px 20px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  margin-top: 50px;

  @media (max-width: 1240px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 600;
`;

export const Text = styled.p`
  margin-top: 20px;
`;
