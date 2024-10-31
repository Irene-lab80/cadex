import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  width: fit-content;
  padding: 8px 42px;
  border-radius: 6px;
  background: var(--dark);
  color: var(--light);

  @media (max-width: 768px) {
    padding: 4px 12px;
  }
`;
