import { PageLayout } from "@/components";
import { useTranslations } from "next-intl";

export default function JobOpportunity() {
  const t = useTranslations("Index");
  return (
    <PageLayout>
      <h1>{t("title")}</h1>
    </PageLayout>
  );
}

export function getStaticProps({ params }: { params: { locale: string } }) {
  console.log({ params });
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
