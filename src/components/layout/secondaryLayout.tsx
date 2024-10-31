import styled from "styled-components";

export const StyledDiv = styled.div`
  background: var(--dark);
  min-height: 190px;
`;

export default function SecondaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <>{children}</>
      <StyledDiv></StyledDiv>
    </>
  );
}
