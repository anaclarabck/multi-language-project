"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Button, Link, Stack } from "@mui/material";
import { locales } from "@/navigation";

function LanguageSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <Stack direction="row" spacing={2}>
      {locales.map((locale) => (
        <Button
          LinkComponent={Link}
          key={locale}
          href={redirectedPathName(locale)}
          size="small"
          sx={{ minWidth: "3rem" }}
        >
          {locale.toUpperCase()}
        </Button>
      ))}
    </Stack>
  );
}

export default LanguageSwitcher;
