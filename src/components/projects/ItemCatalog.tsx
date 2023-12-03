import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Box,
  CardActionArea,
} from "@mui/material";

export function ItemCatalog() {
  return (
    <Card>
      <CardHeader title="Item Catalog" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Mars Dashboard display images captured by the Mars Rovers
        </Typography>
      </CardContent>
      <CardActions>
        <CardActionArea>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button variant="contained" size="small">
              Python
            </Button>
            <Button variant="contained" size="small">
              Flask
            </Button>
            <Button variant="contained" size="small">
              SQLite
            </Button>
            <Button variant="contained" size="small">
              SQLAlchemy
            </Button>
            <Button variant="contained" size="small">
              Jinja
            </Button>
          </Box>
        </CardActionArea>
      </CardActions>
    </Card>
  );
}
