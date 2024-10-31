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
  background: var(--light-blue);

  @media (max-width: 1240px) {
    padding: 50px 20px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 36px;
  font-weight: 600;
`;
