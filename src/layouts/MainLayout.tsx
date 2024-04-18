import { ReactNode } from "react";
import styled from "styled-components";

export default function MainLayout({ children }: { children: ReactNode }) {
  return <MainLayoutContainer>{children}</MainLayoutContainer>;
}

const MainLayoutContainer = styled.div`
  min-height: 100vh;
`;
