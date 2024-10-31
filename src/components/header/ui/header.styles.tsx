import Link from "next/link";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  min-height: 96px;
  align-items: center;
  max-width: var(--content-width);
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1240px) {
    padding: 0 20px;
  }
`;

export const StyledLink = styled(Link)`
  color: var(--dark);
  font-weight: 600;
`;
