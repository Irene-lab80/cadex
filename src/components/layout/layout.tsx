import styled from "styled-components";
import { Footer } from "../footer";
import { Header } from "../header";

export const StyledDiv = styled.div`
  flex: 1;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <StyledDiv>{children}</StyledDiv>
      <Footer />
    </>
  );
}
