import styled from "styled-components";

export const StyledFooter = styled.footer`
  color: var(--dark);
  background: var(--light-green);
  width: 100%;
`;

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 196px;
  max-width: var(--content-width);
  margin: 0 auto;
  font-weight: 600;
  width: 100%;

  @media (max-width: 1240px) {
    padding: 0 20px;
  }
`;
