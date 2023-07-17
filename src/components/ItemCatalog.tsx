import {
  Typography,
  Link,
  Box,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";

export function ItemCatalog() {
  return (
    <TableRow>
      <TableCell>Item Catalog</TableCell>
      <TableCell>
        <Box sx={{ display: "flex", gap: "10px" }}>
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
            href="https://www.python.org/"
            style={{
              backgroundColor: "white",
              color: "black",
            }}
          >
            Flask
          </Button>
          <Button
            variant="contained"
            size="small"
            href="https://www.python.org/"
            style={{
              backgroundColor: "lightblue",
              color: "black",
            }}
          >
            SQLite
          </Button>
          <Button
            variant="contained"
            size="small"
            href="https://www.python.org/"
            style={{
              backgroundColor: "#dc3545",
              color: "white",
            }}
          >
            SQLAlchemy
          </Button>
          <Button
            variant="contained"
            size="small"
            href="https://www.python.org/"
            style={{
              backgroundColor: "#a00",
              color: "white",
            }}
          >
            Jinja
          </Button>
        </Box>
      </TableCell>
      <TableCell>
        <Typography variant="body2" color="text.secondary">
          Catalog Item App is integrated with third party user registration and
          authentication that provides a list of items within a variety of
          categories. You can CUD Categories and CUD Items to your categories
        </Typography>
      </TableCell>
      <TableCell>
        <Link href="https://github.com/manpreet07/item-catalog" color="inherit">
          gith repo
        </Link>
      </TableCell>
      <TableCell>
        <Link href="https://github.com/manpreet07/item-catalog" color="inherit">
          live site
        </Link>
      </TableCell>
    </TableRow>
  );
}
