import { Breadcrumbs, PageLayout } from "@/components";
import { useTranslations } from "next-intl";
import React from "react";

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  fieldOfStudy: string;
  description: string;
}

function EducationCard({
  institution,
  degree,
  duration,
  fieldOfStudy,
  description,
}: Education) {
  return (
    <article className="mb-4 min-w-[275px] rounded bg-white p-4 shadow">
      <h2 className="text-xl font-medium">
        {institution} - {degree}
      </h2>
      <p className="text-sm text-gray-600">{duration}</p>
      <p className="text-sm font-semibold">{fieldOfStudy}</p>
      {description && <p className="mb-3 text-sm">{description}</p>}
    </article>
  );
}

export default function Education() {
  const t = useTranslations("Education");
  const educationKeys = ["trybe", "ipog", "federalUniversityOfParaiba"];

  return (
    <PageLayout title={t("title")}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumbs />
        <h2 className="mb-2 text-3xl">{t("title")}</h2>
        {educationKeys.map((key) => (
          <EducationCard
            institution={t(`schools.${key}.institution`)}
            key={key}
            degree={t(`schools.${key}.degree`)}
            duration={t(`schools.${key}.duration`)}
            fieldOfStudy={t(`schools.${key}.fieldOfStudy`)}
            description={t(`schools.${key}.description`)}
          />
        ))}
      </div>
    </PageLayout>
  );
}

export function getStaticProps({ params }: { params: { locale: string } }) {
  const messages = require(`../../../messages/${params.locale}.json`);
  return {
    props: {
      messages,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { locale: "en" } }, { params: { locale: "pt" } }],
    fallback: false,
  };
}
