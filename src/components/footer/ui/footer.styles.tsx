import styled from "styled-components";

export const StyledFooter = styled.footer`
  color: var(--dark);
  width: 100%;
  background-color: color-mix(
    in srgb,
    var(--light-green) 50%,
    var(--light) 50%
  );
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
