import React from "react";
import { Header } from "@/components";

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <section>{children}</section>
    </>
  );
}

export default PageLayout;
