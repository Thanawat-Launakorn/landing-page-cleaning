"use client";
import React from "react";
import { motion } from "framer-motion";
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
      <motion.div
        layout
        className="w-full"
        exit={{ opacity: 0 }}
        initial={{ y: -500, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.1,
        }}
      >
        <AppFooter />
      </motion.div>
    </div>
  );
}
