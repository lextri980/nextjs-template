"use client";
import { ReactNode } from "react";
import styled from "styled-components";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <AuthLayoutContainer>{children}</AuthLayoutContainer>;
}

const AuthLayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
