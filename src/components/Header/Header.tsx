import { Container, Grid, Typography } from "@mui/material";
import { LanguageSwitcher } from "../LanguageSwitcher";

function Header() {
  return (
    // TODO: criar um componente para section
    <section style={{ backgroundColor: "black" }}>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h5" color="whitesmoke">
            Onesight
          </Typography>
          <LanguageSwitcher />
        </Grid>
      </Container>
    </section>
  );
}

export default Header;
