import React from "react";
import Container from "../container";

type Props = {
  children: React.ReactNode;
};

export default function AppContent({ children }: Props) {
  return <Container>{children}</Container>;
}
