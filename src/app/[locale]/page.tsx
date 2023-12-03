import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { HomeRounded, LaptopRounded, WorkRounded } from "@mui/icons-material";
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
  { text: "Home", href: "/", icon: HomeRounded },
  { text: "Job Opportunity", href: "/job-opportunity", icon: WorkRounded },
  // { text: "Challenge", href: "/challenge", icon: LaptopRounded },
];

export default function Index() {
  const locale = useLocale();
  const t = useTranslations("Index");
  return (
    <Container maxWidth="lg">
      <h1>{t("title")}</h1>
      <p>
        Esse será um site multi-idiomas para um desafio da Onesight. Terá três
        páginas:
      </p>
      <List>
        {LINKS.map(({ text, href, icon: Icon }) => (
          <ListItem key={href} disablePadding>
            <ListItemButton component={Link} href={`/${locale}${href}`}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
