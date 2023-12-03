import { Container, Grid, Paper, Typography, styled } from "@mui/material";
import { ItemCatalog } from "./projects/ItemCatalog";
import { MarsDashboard } from "./projects/Marsdashboard";

export function Projects() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#f0e2e1",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));

  return (
    <Container>
      <Typography variant="h5">Projects</Typography>
      <br />
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item>
            <MarsDashboard />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <ItemCatalog />
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}
