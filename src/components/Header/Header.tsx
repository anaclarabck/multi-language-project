import { LanguageRounded } from "@mui/icons-material";
import { Button, Container, Grid, Typography } from "@mui/material";

function Header() {
  return (
    // TODO: criar um componente para section
    <section style={{ backgroundColor: "black" }}>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h5" color="whitesmoke">
            Onesight
          </Typography>
          <Button
            variant="text"
            disableElevation
            size="small"
            onClick={() => {
              alert("clicked");
            }}
            startIcon={<LanguageRounded />}
          >
            EN-US
          </Button>
        </Grid>
      </Container>
    </section>
  );
}

export default Header;
