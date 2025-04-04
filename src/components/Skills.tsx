import {
  Box,
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

export function Skills() {
  return (
    <Container>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h5">Skills</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle1">
                  Programming Languages
                </Typography>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <Button
                    variant="contained"
                    size="small"
                    href="https://www.typescriptlang.org/"
                    style={{ backgroundColor: "#007acc", color: "white" }}
                  >
                    Typescript
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    href="https://www.typescriptlang.org/"
                    style={{ backgroundColor: "#fcdc00", color: "black" }}
                  >
                    Javascript
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    href="https://www.python.org/"
                    style={{
                      backgroundColor: "#4584b6",
                      color: "white",
                    }}
                  >
                    Python
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    href="https://www.java.com/en/"
                    style={{
                      backgroundColor: "#f89820",
                      color: "white",
                    }}
                  >
                    Java
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    href="https://learn.microsoft.com/en-us/dotnet/csharp/"
                    style={{ backgroundColor: "green", color: "white" }}
                  >
                    C#
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    href="https://www.typescriptlang.org/"
                    style={{ backgroundColor: "#286b86", color: "white" }}
                  >
                    Groovy
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1">
                  Cloud and Web Technologies
                </Typography>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <Button
                    variant="contained"
                    size="small"
                    href="https://www.typescriptlang.org/"
                    style={{ backgroundColor: "#3C873A", color: "white" }}
                  >
                    NodeJs
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    href="https://expressjs.com/"
                    style={{ backgroundColor: "#eee", color: "black" }}
                  >
                    ExpressJs
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    href="https://loopback.io/"
                    style={{
                      backgroundColor: "#009cff",
                      color: "white",
                    }}
                  >
                    Loopback
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1">Database & Tools </Typography>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <Button
                    variant="contained"
                    size="small"
                    href="https://www.postgresql.org/"
                    style={{
                      backgroundColor: "#0064a5",
                      color: "white",
                    }}
                  >
                    PostgresSQL
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
