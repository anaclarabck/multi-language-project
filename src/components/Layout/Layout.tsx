import React from "react";
import { Header } from "@/components";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/styles";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
}

export default Layout;
