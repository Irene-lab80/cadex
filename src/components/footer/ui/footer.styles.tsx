import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 196px;
  max-width: var(--content-width);
  margin: 0 auto;
  font-weight: 600;

  @media (max-width: 1240px) {
    padding: 0 20px;
  }
`;
