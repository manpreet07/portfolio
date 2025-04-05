import { Container, Typography } from "@mui/material";
import { ItemCatalog } from "./ItemCatalog";
import { MarsDashboard } from "./Marsdashboard";

export function Projects() {
  return (
    <Container>
      <Typography variant="h5">Projects</Typography>
      {/* <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Technology Stack</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Git Repo</TableCell>
              <TableCell>Live Site</TableCell>
            </TableRow>
          </TableHead>
          <TableBody> */}
      <MarsDashboard />
      <ItemCatalog />
      {/* </TableBody>
        </Table>
      </TableContainer> */}
    </Container>
  );
}
