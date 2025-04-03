import {
  Box,
  Button,
  Link,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

export function MarsDashboard() {
  return (
    <TableRow>
      <TableCell>MarsDashboard</TableCell>
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
            ReactJS
          </Button>
          <Button
            variant="contained"
            size="small"
            href="https://www.typescriptlang.org/"
            style={{ backgroundColor: "#3C873A", color: "white" }}
          >
            NodeJS
          </Button>
          <Button
            variant="contained"
            size="small"
            href="https://www.typescriptlang.org/"
            style={{ backgroundColor: "#007FFF", color: "black" }}
          >
            MaterialUI
          </Button>
        </Box>
      </TableCell>
      <TableCell>
        <Typography variant="body2" color="text.secondary">
          Mars Dashboard display images captured by the Mars Rovers
        </Typography>
      </TableCell>
      <TableCell>
        <Link
          href="https://github.com/manpreet07/mars-dashboard"
          color="inherit"
        >
          gith repo
        </Link>
      </TableCell>
      <TableCell>
        <Link
          href="https://github.com/manpreet07/mars-dashboard"
          color="inherit"
        >
          live site
        </Link>
      </TableCell>
    </TableRow>
  );
}
