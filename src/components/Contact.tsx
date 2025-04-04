import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import linkedIn from "../LinkedIn.png";

export function Contact() {
  return (
    <Container>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h5">Contact</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow style={{ padding: "none" }}>
              <TableCell>
                <Typography>Email:</Typography>
              </TableCell>
              <TableCell>
                <Typography>manpreet1107@gmail.com</Typography>
              </TableCell>
            </TableRow>
            <TableRow style={{ padding: "none" }}>
              <TableCell>
                <Typography>Contact:</Typography>
              </TableCell>
              <TableCell>
                <Typography>+1 (857)-294-9978</Typography>
              </TableCell>
            </TableRow>
            <TableRow style={{ padding: "none" }}>
              <TableCell>
                <Typography>LinkedIn:</Typography>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  href="https://www.linkedin.com/in/manpreet-singh-5002105a/"
                  style={{
                    backgroundImage: `url(${linkedIn})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundColor: "transparent",
                    width: "110px",
                    height: "50px",
                    color: "white",
                    boxShadow: "none",
                  }}
                ></Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
