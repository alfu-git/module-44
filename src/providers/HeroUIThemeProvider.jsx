"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

const HeroUIThemeProvider = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default HeroUIThemeProvider;
