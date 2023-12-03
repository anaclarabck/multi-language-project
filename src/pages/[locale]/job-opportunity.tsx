import { PageLayout } from "@/components";
import {
  Box,
  Container,
  Paper,
  Typography,
  TypographyProps,
} from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

function Subtitle({
  title,
  variant = "h6",
}: {
  title: string;
  variant?: TypographyProps["variant"];
}) {
  return (
    <Typography variant={variant} style={{ marginTop: "20px" }}>
      {title}
    </Typography>
  );
}

function Description({ description }: { description: string }) {
  return (
    <Typography variant="body1" gutterBottom style={{ marginLeft: "20px" }}>
      {description}
    </Typography>
  );
}

export default function JobOpportunity() {
  const t = useTranslations("JobOpportunity");

  return (
    <PageLayout>
      <Container maxWidth="lg">
        <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
          <Subtitle variant="h4" title={t("jobOpening")} />
          <Description description={t("jobDescription")} />

          <Subtitle variant="h5" title={t("skills")} />
          <Description description={t("skillsDescription")} />

          <Box
            sx={{
              bgcolor: "#f5f5f5",
              p: 2,
              borderRadius: "4px",
              marginTop: "10px",
            }}
          >
            <Subtitle title={t("frontend")} />

            <Subtitle title={t("backend")} />

            <Subtitle title={t("development")} />
          </Box>

          <Subtitle variant="h5" title={t("responsibilities")} />
          <Description description={t("responsibilitiesDescription")} />

          <Subtitle variant="h5" title={t("qualifications")} />
          <Description description={t("qualificationsDescription")} />

          <Subtitle variant="h5" title={t("jobDetails")} />
        </Paper>
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
