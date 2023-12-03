import { Container, Divider, Grid, Typography } from "@mui/material";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { useTranslations } from "next-intl";

function Header() {
  const t = useTranslations("Header");
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ paddingBottom: "0.2rem", paddingTop: "0.2rem" }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{t("title")}</Typography>
          <LanguageSwitcher />
        </Grid>
      </Container>
      <Divider />
    </>
  );
}

export default Header;
