import { LanguageRounded } from "@mui/icons-material";
import { Button, Container, Grid, Typography } from "@mui/material";
import { SectionContainer } from "../SectionContainer";

function Header() {
  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Recipes</Typography>
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
  );
}

export default Header;
