import {
  Container,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { ItemCatalog } from "./ItemCatalog";
import { ImageAI } from "./ImageAI";
import { MarsDashboard } from "./Marsdashboard";

export function Projects() {
  return (
    <Container>
      <Typography variant="h5">Projects</Typography>
      <TableContainer>
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
          <TableBody>
            <MarsDashboard />
            <ItemCatalog />
            <ImageAI />
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
