import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export function Contact() {
  return (
    <Container>
      <TableContainer>
        <Table>
          <TableHead>
            <Typography variant="h5">Contact</Typography>
          </TableHead>
          <TableBody>
            <TableRow style={{ padding: "none" }}>
              <TableCell style={{ borderBottom: "none" }}>
                <Typography>Email:</Typography>
              </TableCell>
              <TableCell style={{ borderBottom: "none" }}>
                <Typography>manpreet1107@gmail.com</Typography>
              </TableCell>
            </TableRow>
            <TableRow style={{ borderBottom: "none", padding: "none" }}>
              <TableCell style={{ borderBottom: "none" }}>
                <Typography>Contact:</Typography>
              </TableCell>
              <TableCell style={{ borderBottom: "none" }}>
                <Typography>+1 (857)-294-9978</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
