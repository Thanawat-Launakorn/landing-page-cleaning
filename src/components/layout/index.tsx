import React from "react";
import AppContent from "./content";
import AppFooter from "./footer";
import AppHeader from "./header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <AppHeader />
      <AppContent>{children}</AppContent>
      <AppFooter />
    </div>
  );
}
