import { Breadcrumbs, PageLayout } from "@/components";
import { Card, CardContent, Container, Typography } from "@mui/material";
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
    <Card sx={{ minWidth: 275, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6" component="h2">
          {institution} - {degree}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {duration}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          {fieldOfStudy}
        </Typography>
        {description && (
          <Typography sx={{ mb: 1.5, fontSize: 14 }}>{description}</Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default function Education() {
  const t = useTranslations("Education");
  const educationKeys = ["trybe", "ipog", "federalUniversityOfParaiba"];

  return (
    <PageLayout>
      <Container maxWidth="lg">
        <Breadcrumbs />
        <Typography variant="h4" component="h2" gutterBottom>
          {t("education")}
        </Typography>
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
