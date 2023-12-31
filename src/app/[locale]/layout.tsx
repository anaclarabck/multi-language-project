import { Header } from "@/components";
import { locales } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();
  const t = useTranslations("Index");

  if (!locales.includes(locale as any)) notFound();
  return (
    <html lang={locale}>
      <head>
        <title>{t("title")}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
