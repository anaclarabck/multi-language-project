import "@/styles/globals.css";
import { Header } from "@/components";
import { routing } from "@/i18n/routing";
import {
  hasLocale,
  NextIntlClientProvider,
  useLocale,
  useTranslations,
} from "next-intl";
import { notFound } from "next/navigation";

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();
  const t = useTranslations("Index");

  if (!hasLocale(routing.locales, locale)) notFound();
  return (
    <html lang={locale}>
      <head>
        <title>{t("title")}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <body>
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
