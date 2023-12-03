import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { HomeRounded, SchoolRounded, WorkRounded } from "@mui/icons-material";
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";

const LINKS = [
  { labelEn: "Home", labelPt: "Home", href: "/", icon: HomeRounded },
  {
    labelEn: "Education",
    labelPt: "Educação",
    href: "/education",
    icon: SchoolRounded,
  },
  {
    labelEn: "Professional Experience",
    labelPt: "Experiência Profissional",
    href: "/professional-experience",
    icon: WorkRounded,
  },
];

export default function Index() {
  const locale = useLocale();
  const t = useTranslations("Index");
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" paddingTop={2}>
        {t("title")}
      </Typography>
      <Typography>{t("description")}</Typography>
      <List>
        {LINKS.map(({ labelPt, labelEn, href, icon: Icon }) => (
          <ListItem key={href} disablePadding>
            <ListItemButton component={Link} href={`/${locale}${href}`}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={locale === "pt" ? labelPt : labelEn} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
