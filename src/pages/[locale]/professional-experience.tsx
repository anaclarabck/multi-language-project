import { Breadcrumbs, PageLayout } from "@/components";
import { Card, CardContent, Container, Typography } from "@mui/material";
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
    <Card sx={{ minWidth: 275, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6" component="h2">
          {company}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {employmentType} | {duration}
        </Typography>
        <Typography variant="h5" component="div">
          {position}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {stacks}
        </Typography>
        <Typography variant="body2">{responsibilities}</Typography>
      </CardContent>
    </Card>
  );
}

export default function ProfessionalExperience() {
  const t = useTranslations("ProfessionalExperience");
  const experienceKeys = ["trybe", "jungleDevs", "alliance"];

  return (
    <PageLayout>
      <Container maxWidth="lg">
        <Breadcrumbs />
        <Typography variant="h4" component="h2" gutterBottom>
          {t("professionalExperience")}
        </Typography>
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
      </Container>
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
    fallback: true,
  };
}
