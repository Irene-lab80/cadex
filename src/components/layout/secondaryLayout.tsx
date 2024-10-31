import styled from "styled-components";

export const StyledDiv = styled.div`
  background: var(--dark);
  height: 190px;
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
