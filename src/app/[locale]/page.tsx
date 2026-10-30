"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

const LINKS = [
  {
    labelEn: "Education",
    labelPt: "Educação",
    href: "/education",
    icon: GraduationCap,
  },
  {
    labelEn: "Professional Experience",
    labelPt: "Experiência Profissional",
    href: "/professional-experience",
    icon: BriefcaseBusiness,
  },
];

export default function Index() {
  const locale = useLocale();
  const t = useTranslations("Index");
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 className="pt-4 text-3xl">{t("title")}</h2>
      <p>{t("description")}</p>
      <ul className="py-2">
        {LINKS.map(({ labelPt, labelEn, href, icon: Icon }) => (
          <li key={href}>
            <Link
              className="flex items-center px-4 py-2 transition-colors hover:bg-gray-100"
              href={`/${locale}${href}`}
            >
              <Icon className="mr-8 size-6 shrink-0 text-gray-500" />
              {locale === "pt" ? labelPt : labelEn}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
