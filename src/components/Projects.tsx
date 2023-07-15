import {
  Container,
  Typography,
  Paper,
  styled,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Box,
  Link,
} from "@mui/material";
import { ItemCatalog } from "./ItemCatalog";
import { ImageAI } from "./ImageAI";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: "inherit",
}));

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
            <ImageAI />
            <ItemCatalog />
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
