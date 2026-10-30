import { Breadcrumbs, PageLayout } from "@/components";
import { useTranslations } from "next-intl";
import React from "react";

export interface Experience {
  company: string;
  position: string;
  employmentType: string;
  duration: string;
  responsibilities: string;
  stacks: string;
}

function ExperienceCard({
  company,
  position,
  employmentType,
  duration,
  responsibilities,
  stacks,
}: Experience) {
  return (
    <article className="mb-4 min-w-[275px] rounded bg-white p-4 shadow">
      <h2 className="text-xl font-medium">{company}</h2>
      <p className="mb-1 text-sm text-gray-600">
        {employmentType} | {duration}
      </p>
      <div className="text-2xl">{position}</div>
      <p className="mb-3 text-gray-600">{stacks}</p>
      <p className="text-sm">{responsibilities}</p>
    </article>
  );
}

export default function ProfessionalExperience() {
  const t = useTranslations("ProfessionalExperience");
  const experienceKeys = ["trybe", "jungleDevs", "alliance"];

  return (
    <PageLayout title={t("title")}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumbs />
        <h2 className="mb-2 text-3xl">{t("title")}</h2>
        {experienceKeys.map((key) => (
          <ExperienceCard
            company={t(`experiences.${key}.company`)}
            key={key}
            position={t(`experiences.${key}.position`)}
            employmentType={t(`experiences.${key}.employmentType`)}
            duration={t(`experiences.${key}.duration`)}
            responsibilities={t(`experiences.${key}.responsibilities`)}
            stacks={t(`experiences.${key}.skills`)}
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
