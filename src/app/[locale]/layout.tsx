import { Header } from "@/components";
import { locales } from "@/navigation";
import { useLocale } from "next-intl";
import Head from "next/head";
import { notFound } from "next/navigation";

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();

  if (!locales.includes(locale as any)) notFound();
  return (
    <html lang={locale}>
      <Head>
        <title>next-intl</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
