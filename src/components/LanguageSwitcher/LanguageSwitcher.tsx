"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";

function LanguageSwitcher() {
  const pathName = usePathname();
  const locale = useLocale();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <nav className="flex gap-4">
      {routing.locales.map((localeItem) => {
        const isActive = locale === localeItem;
        return (
          <Link
            aria-current={isActive ? "true" : undefined}
            className={`min-w-12 rounded border px-2 py-1 text-center text-sm font-medium text-blue-700 transition-colors hover:bg-blue-50 ${
              isActive ? "border-blue-700/50" : "border-transparent"
            }`}
            href={redirectedPathName(localeItem)}
            key={localeItem}
          >
            {localeItem.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}

export default LanguageSwitcher;
