"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Button, Link, Stack } from "@mui/material";
import { locales } from "@/navigation";
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
    <Stack direction="row" spacing={2}>
      {locales.map((localeItem) => (
        <Button
          LinkComponent={Link}
          key={localeItem}
          href={redirectedPathName(localeItem)}
          size="small"
          sx={{ minWidth: "3rem" }}
          variant={locale === localeItem ? "outlined" : "text"}
        >
          {localeItem.toUpperCase()}
        </Button>
      ))}
    </Stack>
  );
}

export default LanguageSwitcher;
