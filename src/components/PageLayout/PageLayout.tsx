import React from "react";
import { Header } from "@/components";
import Head from "next/head";

function PageLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <section>{children}</section>
    </>
  );
}

export default PageLayout;
