import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { HomeRounded, WorkRounded } from "@mui/icons-material";
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";

const LINKS = [
  { labelEn: "Home", labelPt: "Home", href: "/", icon: HomeRounded },
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
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
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
